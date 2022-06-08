import { PLAYLIST_LOAD_FAILURE, PLAYLIST_LOAD_REQUEST, PLAYLIST_LOAD_SUCCESS } from './types';

export const playlistLoadRequest = () => ({
  type: PLAYLIST_LOAD_REQUEST,
});

export const playlistLoadSuccess = (data: []) => ({
  type: PLAYLIST_LOAD_SUCCESS,
  payload: data
}
);

export const playlistLoadFailure = () => ({
  type: PLAYLIST_LOAD_FAILURE,
});