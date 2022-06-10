import { Reducer, Action } from 'redux';
import { 
    PlaylistState,
    PlaylistAction,
    PLAYLIST_LOAD_FAILURE,
    PLAYLIST_LOAD_REQUEST,
    PLAYLIST_LOAD_SUCCESS } from './types';

const INITIAL_STATE: PlaylistState = {
  data: {},
  error: false,
  loading: false,
};

const reducer: Reducer<PlaylistState, Action> = (
  state = INITIAL_STATE,
  action: PlaylistAction
) => {
  switch (action.type) {
    case PLAYLIST_LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PLAYLIST_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case PLAYLIST_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: []
      };
    default:
      return state;
  }
};

export default reducer;