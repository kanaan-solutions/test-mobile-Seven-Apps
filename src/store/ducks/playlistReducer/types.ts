import { AuthRequest, AuthRequestPromptOptions, AuthSessionResult } from "expo-auth-session";

// Action Types
export const PLAYLIST_LOAD_REQUEST = 'PLAYLIST_LOAD_REQUEST';
export const PLAYLIST_LOAD_SUCCESS = 'PLAYLIST_LOAD_SUCCESS';
export const PLAYLIST_LOAD_FAILURE = 'PLAYLIST_LOAD_FAILURE';

export interface playlistLoadRequestAction {
  type: typeof PLAYLIST_LOAD_REQUEST;
  id: string;
  token: string;
}

interface playlistLoadSuccessAction {
  type: typeof PLAYLIST_LOAD_SUCCESS;
  payload: [];
}

interface playlistLoadFailuretAction {
  type: typeof PLAYLIST_LOAD_FAILURE;
}

export type PlaylistAction = 
          playlistLoadRequestAction | 
          playlistLoadSuccessAction | 
          playlistLoadFailuretAction;

// Data Types
export interface IPlaylistReturns {
  name: string;
}

export interface IPlaylistData {
  data: {IPlaylistReturns}
}

// State Type
export interface PlaylistState {
  data: IPlaylistData;
  loading: boolean;
  error: boolean;
}