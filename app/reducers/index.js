import { combineReducers } from 'redux';

import accessToken from './access-token';
import dialogs from './dialogs';

const rootReducer = combineReducers({
    accessToken,
    dialogs
});

export default rootReducer;
