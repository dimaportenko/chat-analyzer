/**
 * Created by troublesohard on 5/13/16.
 */

import { FETCH_USERS } from '../actions/users';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_USERS: {
      console.log(action.type);
      console.log(action.payload.data.response);
      var users = Object.assign({}, state);

      action.payload.data.response.map((user) => {
        users[user.uid] = user;
      });
      return users;
    }
  }
  return state;
}
