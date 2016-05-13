/**
 * Created by troublesohard on 5/13/16.
 */

import { FETCH_DIALOGS } from '../actions/dialogs';

export default function(state = [], action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_DIALOGS: {
      return action.payload.data.response;
    }
  }
  return state;
}
