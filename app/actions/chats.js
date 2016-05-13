/**
 * Created by troublesohard on 5/13/16.
 */
import axios from 'axios';
import { store } from './../store/store'

export const FETCH_CHAT = 'FETCH_CHAT';

const ROOT_URL = 'https://api.vk.com/method/messages.getChat?';

export function fetchChat(chatId = null) {
  const { chats } = store.getState();

  if(chatId && !chats[chatId]) {

    const request = axios.get(getAuthUrl(chatId));

    return {
      type: FETCH_CHAT,
      payload: request
    };
  }
}

function getAuthUrl(id) {
  const state = store.getState();
  var authUrl = ROOT_URL +
    'chat_id=' + id +
    '&fields=' + 'photo_50' +
    '&access_token=' + state.accessToken
    ;
  return authUrl;
}
