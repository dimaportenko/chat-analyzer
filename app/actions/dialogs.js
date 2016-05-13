/**
 * Created by troublesohard on 5/13/16.
 */
import axios from 'axios';
import { store } from './../store/store'

export const FETCH_DIALOGS = 'FETCH_DIALOGS';

const ROOT_URL = 'https://api.vk.com/method/messages.getDialogs?';

export function fetchDialogs() {
  const request = axios.get(getAuthUrl());

  return {
    type: FETCH_DIALOGS,
    payload: request
  };
}

function getAuthUrl() {
  const state = store.getState();
  var authUrl = ROOT_URL +
    'offset=' + '0' +
    '&count=' + '20' +
    '&access_token=' + state.accessToken
    ;
  return authUrl;
}
