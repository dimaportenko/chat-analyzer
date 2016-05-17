/**
 * Created by troublesohard on 5/13/16.
 */

import { FETCH_USERS } from '../actions/users';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_USERS: {
      const users = Object.assign({}, state);

      action.payload.data.response.map((user) => {
        users[user.uid] = user;
        return user;
      });
      return users;
    }
    default: {
      return state;
    }
  }
}
