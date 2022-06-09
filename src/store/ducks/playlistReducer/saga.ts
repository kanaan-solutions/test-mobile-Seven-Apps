import { call, put } from 'redux-saga/effects';

import { playlistLoadSuccess, playlistLoadFailure } from './actions';
import api from "../../../services/api"
import { playlistLoadRequestAction } from './types';

export function* playlistLoad(action: playlistLoadRequestAction): any {
  try {
    const request = yield call(api.get, `playlists/${action.id}`, {
      headers: {
        'Authorization': `Bearer ${action.token}`,
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    });
        
    yield put(playlistLoadSuccess(request));
  } catch (err) {
    yield put(playlistLoadFailure());
    console.log(err)
  }
}