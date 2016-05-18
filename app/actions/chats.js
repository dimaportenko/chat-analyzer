/**
 * Created by troublesohard on 5/13/16.
 */
import axios from 'axios';
import { store } from './../store/store';

export const FETCH_CHATS = 'FETCH_CHATS';

const ROOT_URL = 'https://api.vk.com/method/messages.getChat?';

export function fetchChats(chatIds = []) {
  const { length } = chatIds;
  if (length !== 0) {
    const { chats } = store.getState();
    let ids = [];
    if (chats) {
      for (let i = 0; i < length; i++) {
        const chatId = chatIds[i];
        if (!chats[chatId]) {
          ids.push(chatId);
        }
      }
    } else {
      ids = chatIds;
    }

    if (ids.length) {
      const request = axios.get(getAuthUrl(ids));
      return {
        type: FETCH_CHATS,
        payload: request
      };
    }

    return {
      type: FETCH_CHATS,
      payload: { data: {} }
    };
  }
}

function getAuthUrl(ids) {
  const state = store.getState();
  const authUrl = `${ROOT_URL}chat_ids=${ids.toString()}&fields=photo_50&access_token=${state.accessToken}`;
  return authUrl;
}
