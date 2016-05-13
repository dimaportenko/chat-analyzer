/**
 * Created by troublesohard on 5/13/16.
 */
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './../reducers';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
export const store = createStoreWithMiddleware(reducers);
