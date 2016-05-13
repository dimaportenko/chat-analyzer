import { combineReducers } from 'redux';

import accessToken from './access-token';
import dialogs from './dialogs';
import users from './users';
import chats from './chats';

const rootReducer = combineReducers({
    accessToken,
    dialogs,
    users,
    chats
});

export default rootReducer;
