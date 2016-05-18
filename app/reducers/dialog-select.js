/**
 * Created by troublesohard on 5/12/16.
 */
import { DIALOG_SELECT } from '../actions/dialog-select';

export default function (state = -1, action) {
  switch (action.type) {
    case DIALOG_SELECT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
