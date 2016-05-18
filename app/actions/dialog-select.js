/**
 * Created by troublesohard on 5/18/16.
 */

export const DIALOG_SELECT = 'DIALOG_SELECT';

export function selectDialog(id = -1) {
  return {
    type: DIALOG_SELECT,
    payload: id
  };
}
