import { combineReducers } from 'redux';

import accessToken from './access-token';
import dialogs from './dialogs';
import users from './users';
import chats from './chats';
import screen from './screens';

const rootReducer = combineReducers({
  accessToken,
  dialogs,
  users,
  chats,
  screen
});

export default rootReducer;
