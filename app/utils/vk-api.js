/**
 * Created by troublesohard on 5/7/16.
 */

const vkAuthUrl = 'https://oauth.vk.com/authorize?';

export default class VkApi {

  setCredentials(options) {
    this.client_id = options.client_id;
    this.display = options.display;
    this.redirect_uri = options.redirect_uri;
    this.scope = options.scope;
    this.response_type = options.response_type;
    this.v = options.v;
  }

  getAuthUrl() {
    const authUrl = vkAuthUrl +
      'client_id=' + this.client_id +
      '&display=' + this.display +
      '&redirect_uri=' + this.redirect_uri +
      '&scope=' + this.scope +
      '&response_type=' + this.response_type +
      '&v=' + this.v;
    return authUrl;
  }
}

const vkApi = new VkApi();

export default vkApi;
