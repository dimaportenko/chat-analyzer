/**
 * Created by troublesohard on 5/13/16.
 */

import { FETCH_DIALOGS } from '../actions/dialogs';

export default function(state = [], action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_DIALOGS: {
      console.log(action.type);
      console.log(action.payload.data.response);
      return [...state, ...action.payload.data.response];
    }
  }
  return state;
}

//export default function(state = [], action) {
//  //console.log(action);
//  switch (action.type) {
//    case FETCH_DIALOGS: {
//      console.log({ ...state, dialogs: action.payload.data.response });
//      return { ...state, dialogs: action.payload.data.response };
//    }
//  }
//  return state;
//}
