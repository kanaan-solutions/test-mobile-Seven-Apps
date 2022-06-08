import { all, takeLatest } from 'redux-saga/effects';

import { PLAYLIST_LOAD_REQUEST } from './playlistReducer/types';

import { playlistLoad } from './playlistReducer/saga';

export default function* rootSaga(): any {
  return yield all([
    takeLatest(PLAYLIST_LOAD_REQUEST, playlistLoad),
  ]);
}