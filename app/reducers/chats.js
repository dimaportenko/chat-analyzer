/**
 * Created by troublesohard on 5/13/16.
 */

import { FETCH_CHAT } from '../actions/chats';

export default function(state = {}, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_CHAT: {
      const chat = action.payload.data.response;
      console.log(action.payload);
      const chats = Object.assign({}, state);
      //chats[chat.chat_id] = chat;
      console.log('CHATS');
      console.log(chat);

      //console.log(action.type);
      //console.log(action.payload.data.response);
      //action.payload.data.response.map((user) => {
      //  users[user.uid] = user;
      //});
      return chats;
    }
  }
  return state;
}
