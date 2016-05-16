/**
 * Created by troublesohard on 5/13/16.
 */

import { FETCH_CHATS } from '../actions/chats';

export default function(state = {}, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_CHATS: {
      const chats = Object.assign({}, state);

      action.payload.data.response.map((chat) => {
        chats[chat.chat_id] = chat;
      });

      console.log('FETCH_CHATS reducer');
      console.log(chats);

      return chats;
    }
  }
  return state;
}
