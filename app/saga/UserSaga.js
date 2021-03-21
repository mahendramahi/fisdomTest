import {put, call, takeLatest} from 'redux-saga/effects';
import {getUserLlist, userLogin} from '../service/userServices';
import {AuthState} from '../state';
import * as Navigation from '../navigations/Navigator';

export function* login(action) {
  console.log('action==>', action);
  const apiResponse = yield call(userLogin, action.payload);
  if (apiResponse.response_type === 'success') {
    yield put(AuthState.saveUser(apiResponse.response));
    Navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });
  } else {
    alert(apiResponse?.response?.error);
  }
}

export function* getUsersList(action) {
  console.log('action==>', action);
  const apiResponse = yield call(getUserLlist, action.payload);
  if (apiResponse.response_type === 'success') {
    yield put(AuthState.usersList(apiResponse.response));

  } else {
    alert(apiResponse?.response?.error);
  }
}

export function* watchAuth() {
  yield takeLatest('POST_LOGIN', login);
  yield takeLatest('GET_USERS_LIST', getUsersList);
}
