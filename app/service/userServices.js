import {apiRequest} from './service';
import {LOGIN, USER_LIST} from './apiUrls';

export const userLogin = payload =>
  apiRequest({
    apiUrl: LOGIN,
    method: 'POST',
    payload: payload,
  });

export const getUserLlist = () =>
  apiRequest({
    apiUrl: USER_LIST,
    method: 'GET',
  });
