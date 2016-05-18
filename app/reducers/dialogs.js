/**
 * Created by troublesohard on 5/13/16.
 */

import _ from 'lodash';
import { FETCH_DIALOGS } from '../actions/dialogs';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_DIALOGS: {
      return _.unionWith(state, action.payload.data.response, (obj1, obj2) => {
        if (obj1.chat_id && obj2.chat_id) {
          return _.isEqual(obj1.chat_id, obj2.chat_id);
        } else if (!obj1.chat_id && !obj2.chat_id) {
          return _.isEqual(obj1.uid, obj2.uid);
        }
        return _.isEqual(obj1, obj2);
      });
    }
    default: {
      return state;
    }
  }
}

