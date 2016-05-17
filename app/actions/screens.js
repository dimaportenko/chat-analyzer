/**
 * Created by troublesohard on 5/17/16.
 */

export const SCREEN_TYPE = 'SCREEN_TYPE';

export const ScreenTypes = {
  dialogsList: 0,
  selectedDialog: 1,
  selectedChat: 2
};

export function setScreen(screenType = ScreenTypes.dialogsList) {
  return {
    type: SCREEN_TYPE,
    payload: screenType
  };
};
