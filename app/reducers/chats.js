/**
 * Created by troublesohard on 5/13/16.
 */

import { FETCH_CHATS } from '../actions/chats';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CHATS: {
      const chats = Object.assign({}, state);

      const { response } = action.payload.data;
      if (response && response.length) {
        response.map((chat) => {
          chats[chat.chat_id] = chat;
          return chat;
        });
      } else {
        console.log('FETCH_CHATS error');
        console.log(action.payload.data);
      }

      return chats;
    }
    default: {
      return state;
    }
  }
}
