/**
 * Created by troublesohard on 5/13/16.
 */
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './../reducers';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);
