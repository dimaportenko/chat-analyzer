/**
 * Created by troublesohard on 5/13/16.
 */
import axios from 'axios';
import { store } from './../store/store';

export const FETCH_USERS = 'FETCH_USERS';

const ROOT_URL = 'https://api.vk.com/method/users.get?';

export function fetchUsers(userIds = []) {
  const { length } = userIds;
  if (length !== 0) {
    const { users } = store.getState();
    let ids = [];
    if (users) {
      for (let i = 0; i < length; i++) {
        const userId = userIds[i];
        if (!users[userId]) {
          ids.push(userId);
        }
      }
    } else {
      ids = userIds;
    }
    const request = axios.get(getAuthUrl(ids));

    return {
      type: FETCH_USERS,
      payload: request
    };
  }
}

function getAuthUrl(ids = []) {
  const authUrl = `${ROOT_URL}user_ids=${ids.toString()}&fields=photo_50`;
  return authUrl;
}
