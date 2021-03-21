import {combineReducers} from 'redux';
import * as SongsState from './SongsState';
import * as AuthState from './AuthState';

const rootReducer = combineReducers({
  songs: SongsState.songsSliceReducer,
  auth: AuthState.authSliceReducer,
});
export {rootReducer, SongsState, AuthState};
