/**
 * Created by troublesohard on 5/8/16.
 */
import { BrowserWindow, ipcRenderer } from 'electron'
import JsonLoader from './json-loader'
import vkApi from './vk-api';
import url_api from 'url';
//import url_api from 'url';
//const url_api = require('url');

let authWindow = null;

export default class Authentication {
    static ACCOUNTS_JSON    = '.chat-analyzer';
    static CREDENTIALS_JSON = 'credentials.json';

    static authorized(callback) {
        var token = Authentication.defaultAccount();
        //var token = null;
        //console.log(`token - ${token}`);
        //console.log(token);

        if (token && token['accessToken']) {
            callback();
            return;
        }

        new Authentication((token) => {
            Authentication.addToken(token, () => {
                callback();
            });
        });
    }

    static addToken(token, callback) {
        var tokens = JsonLoader.readHome(this.ACCOUNTS_JSON);
        if (tokens == null) {
            tokens = [];
        }
        tokens.push(token);
        JsonLoader.writeHome(this.ACCOUNTS_JSON, Authentication.uniqTokens(tokens));
        callback();
    }

    static uniqTokens(tokens) {
        var names  = [];
        var uniqed = [];

        for (let token of tokens) {
            if (names.indexOf(token['screenName']) < 0) {
                uniqed.push(token);
                names.push(token['screenName']);
            }
        }
        return uniqed;
    }

    static byScreenName(screenName) {
        for (let account of Authentication.allAccounts()) {
            if (account['screenName'] === screenName) {
                return account;
            }
        }
        return {};
    }

    static defaultAccount() {
      console.log('defaultAccount');
        var accounts = Authentication.allAccounts();
      console.log(accounts);
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
      var credentials = Authentication.credentials();
      console.log('credentials');
      console.log(credentials);

      vkApi.setCredentials(credentials);

      var oldWindow;
      var url = vkApi.getAuthUrl();
      if (authWindow) {
        oldWindow = authWindow;
      }

      //ipcRenderer.send('console-log', `test console log from ipc`);

      authWindow = new BrowserWindow({
        width:  655,
        height: 450,
        show: false,
        webPreferences: {nodeIntegration: false}
      });

      //authWindow.openDevTools();

      const handleCallback = (url) => {
        //ipcRenderer.send('console-log', `will naviagate: ${url}`);
        var hash = url.replace('#', '?');
        var parsedUrl = url_api.parse(hash, true);
        if(parsedUrl && parsedUrl.query) {
          credentials.access_token = parsedUrl.query.access_token;
          credentials.user_id = parsedUrl.query.user_id;
        }

        //console.log(`will naviagate: ${url}`);

        if(url.includes('oauth.vk.com/blank.html') && credentials.access_token) {
          var token = { accessToken: credentials.access_token };
          //ipcRenderer.send('console-log', `will naviagate: ${url}`);

          callback(token);
          if (authWindow) {
            authWindow.close();
          }
        }
      }

      authWindow.webContents.on('will-navigate', (event, url) => {
        handleCallback(url);
      });

      authWindow.webContents.on('did-get-redirect-request', function (event, oldUrl, newUrl) {
        handleCallback(newUrl);
      });


      authWindow.on('closed', function() {
        authWindow = null;
      });

      if (oldWindow) {
        oldWindow.close();
      }

      authWindow.loadURL(url);
      authWindow.show();
    }
}
