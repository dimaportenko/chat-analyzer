import { combineReducers } from 'redux';

import selectedDialog from './dialog-select';
import accessToken from './access-token';
import dialogs from './dialogs';
import screen from './screens';
import users from './users';
import chats from './chats';

const rootReducer = combineReducers({
  selectedDialog,
  accessToken,
  dialogs,
  screen,
  users,
  chats
});

export default rootReducer;
