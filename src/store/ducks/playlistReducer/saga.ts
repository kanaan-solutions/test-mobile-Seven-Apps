import { call, put } from 'redux-saga/effects';

import { playlistLoadSuccess, playlistLoadFailure } from './actions';
import api from "../../../services/api"

export function* playlistLoad(): any {
  try {
    const request = yield call(api.get, '/playlists/3cEYpjA9oz9GiPac4AsH4n');

    console.log(request);
    
    yield put(playlistLoadSuccess(request));
  } catch (err) {
    yield put(playlistLoadFailure());
  }
}