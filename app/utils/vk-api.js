/**
 * Created by troublesohard on 5/7/16.
 */

"use strict";
const VERSION = "5.50";
//const request = require("request");

var vkAuthUrl = "https://oauth.vk.com/authorize?";

export default class VkApi {

    constructor() {

    }

    setCredentials(options) {
        this.client_id = options.client_id;
        this.display = options.display;
        this.redirect_uri = options.redirect_uri;
        this.scope = options.scope;
        this.response_type = options.response_type;
        this.v = options.v;
    }

    getAuthUrl() {
        var authUrl = vkAuthUrl +
            'client_id=' + this.client_id +
            '&display=' + this.display +
            '&redirect_uri=' + this.redirect_uri +
            '&scope=' + this.scope +
            '&response_type=' + this.response_type +
            '&v=' + this.v;
        return authUrl;
    }

    getRequestToken(callback) {

    }

}

let vkApi = new VkApi();

export default vkApi;

//var VK = function(options) {
//    if (!(this instanceof VK))
//        return new VK(options);
//
//    this.client_id = options.client_id;
//    this.display = options.display;
//    this.redirect_uri = options.redirect_uri;
//    this.scope = options.scope;
//    this.response_type = option.response_type;
//    this.callback = options.callback;
//
//    var authUrl = authUrl +
//        'client_id=' + options.client_id +
//        '&display=' + options.display +
//        '&redirect_uri=' + options.redirect_uri +
//        '&scope=' + options.scope +
//        '&response_type=' + options.response_type +
//        '&v=' + VERSION;
//
//    request(authUrl, options.callback);
//
//    return this;
//};
//VK.VERSION = VERSION;
//
//module.exports = VK;

//var vkUrl = 'https://oauth.vk.com/authorize?';
//var authUrl = vkUrl +
//    'client_id=' + options.client_id +
//    '&display=' + options.display +
//    '&redirect_uri=' + options.redirect_uri +
//    '&scope=' + options.scope +
//    '&response_type=' + options.response_type +
//    '&v=' + options.v;
//authWindow.loadURL(authUrl);
//authWindow.show();
