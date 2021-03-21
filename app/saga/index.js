import {all, fork} from 'redux-saga/effects';
import {watchSongsList} from './SongsSaga';
import {watchAuth} from './UserSaga';

export default function* rootSaga() {
  yield all([fork(watchSongsList), fork(watchAuth)]);
}
