/**
 * Created by troublesohard on 5/12/16.
 */
import { SCREEN_TYPE, ScreenTypes } from '../actions/screens';

export default function (state = ScreenTypes.dialogsList, action) {
  switch (action.type) {
    case SCREEN_TYPE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
