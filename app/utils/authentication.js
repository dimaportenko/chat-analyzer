/**
 * Created by troublesohard on 5/8/16.
 */
import { BrowserWindow } from 'electron';
import JsonLoader from './json-loader';
import vkApi from './vk-api';
import urlApi from 'url';

let authWindow = null;

export default class Authentication {
  static ACCOUNTS_JSON = '.chat-analyzer';
  static CREDENTIALS_JSON = 'credentials.json';

  static authorized(callback) {
    const token = Authentication.defaultAccount();

    if (token && token.accessToken) {
      callback();
      return;
    }

    const auth = new Authentication((authToken) => {
      Authentication.addToken(authToken, () => {
        callback();
      });
    });
  }

  static addToken(token, callback) {
    let tokens = JsonLoader.readHome(this.ACCOUNTS_JSON);
    if (!tokens) {
      tokens = [];
    }
    tokens.push(token);
    JsonLoader.writeHome(this.ACCOUNTS_JSON, Authentication.uniqTokens(tokens));
    callback();
  }

  static uniqTokens(tokens) {
    const names = [];
    const uniqed = [];

    for (const token of tokens) {
      if (names.indexOf(token.screenName) < 0) {
        uniqed.push(token);
        names.push(token.screenName);
      }
    }
    return uniqed;
  }

  static byScreenName(screenName) {
    for (const account of Authentication.allAccounts()) {
      if (account.screenName === screenName) {
        return account;
      }
    }
    return {};
  }

  static defaultAccount() {
    const accounts = Authentication.allAccounts();

    if (accounts.length === 0) {
      return {};
    }
    return accounts[0];
  }

  static allAccounts() {
    return JsonLoader.readHome(this.ACCOUNTS_JSON) || [];
  }

  static credentials() {
    return JsonLoader.read(this.CREDENTIALS_JSON);
  }

  constructor(callback) {
    const credentials = Authentication.credentials();

    vkApi.setCredentials(credentials);

    let oldWindow;
    const url = vkApi.getAuthUrl();
    if (authWindow) {
      oldWindow = authWindow;
    }

    authWindow = new BrowserWindow({
      width: 655,
      height: 450,
      show: false,
      webPreferences: { nodeIntegration: false }
    });

    const handleCallback = (callbackUrl) => {
      const hash = callbackUrl.replace('#', '?');
      const parsedUrl = urlApi.parse(hash, true);
      if (parsedUrl && parsedUrl.query) {
        credentials.access_token = parsedUrl.query.access_token;
        credentials.user_id = parsedUrl.query.user_id;
      }

      if (url.includes('oauth.vk.com/blank.html') && credentials.access_token) {
        const token = { accessToken: credentials.access_token };

        callback(token);
        if (authWindow) {
          authWindow.close();
        }
      }
    };

    authWindow.webContents.on('will-navigate', (event, toUrl) => {
      handleCallback(toUrl);
    });

    authWindow.webContents.on('did-get-redirect-request', (event, oldUrl, newUrl) => {
      handleCallback(newUrl);
    });


    authWindow.on('closed', () => {
      authWindow = null;
    });

    if (oldWindow) {
      oldWindow.close();
    }

    authWindow.loadURL(url);
    authWindow.show();
  }
}
