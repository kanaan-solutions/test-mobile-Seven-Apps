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
  payload: {};
}

interface playlistLoadFailuretAction {
  type: typeof PLAYLIST_LOAD_FAILURE;
}

export type PlaylistAction = 
          playlistLoadRequestAction | 
          playlistLoadSuccessAction | 
          playlistLoadFailuretAction;

interface IArtists {
  href: string;
  id: string;
  name:  string;
  uri: string;
}

interface IImages {
  height: number | null;
  url: string;
  width: number | null;
}

interface ITrack {
  artists: IArtists[];
  images: IImages[];
}

interface ITracks {
  track: ITrack
}

interface IOwmer {
  display_name: string;
  external_urls: {
    sportify: string;
  }
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface IFollowers {
  herf: string | null;
  total: number;
}

// Data Types
export interface IPlaylistReturns {
  description: string;
  followers: IFollowers;
  images: IImages[];
  name: string;
  tracks: {
    items: ITracks[]
  };
  owner: IOwmer;
}

export interface IPlaylistData {
  data: IPlaylistReturns
}

// State Type
export interface PlaylistState {
  data: IPlaylistData;
  loading: boolean;
  error: boolean;
}