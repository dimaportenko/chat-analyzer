/**
 * Created by troublesohard on 5/12/16.
 */
import { ACCESS_TOKEN } from '../actions/access-token';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case ACCESS_TOKEN: {
      return action.payload;
    }
  }
  return state;
}
