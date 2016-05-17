/**
 * Created by troublesohard on 5/12/16.
 */

export const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const accessToken = (token = null) => {
  return {
    type: ACCESS_TOKEN,
    payload: token
  };
};
