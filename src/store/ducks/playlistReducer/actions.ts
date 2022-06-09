import { PLAYLIST_LOAD_FAILURE, PLAYLIST_LOAD_REQUEST, PLAYLIST_LOAD_SUCCESS } from './types';

export const playlistLoadRequest = (id: string, token: string | unknown) => ({
  type: PLAYLIST_LOAD_REQUEST,
  id,
  token,
});

export const playlistLoadSuccess = (data: {}) => ({
  type: PLAYLIST_LOAD_SUCCESS,
  payload: data
});

export const playlistLoadFailure = () => ({
  type: PLAYLIST_LOAD_FAILURE,
});