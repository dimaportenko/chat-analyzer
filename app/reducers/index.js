import { combineReducers } from 'redux';

import accessToken from './access-token';
import dialogs from './dialogs';
import users from './users';

const rootReducer = combineReducers({
    accessToken,
    dialogs,
    users
});

export default rootReducer;
