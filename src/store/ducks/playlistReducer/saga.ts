import { call, put } from 'redux-saga/effects';
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { ClientId, ClientSecret } from "../../../utils/spotifyCredentials";
import { tokenEndpoint, authorizationEndpoint } from '../../../services/api';

import { playlistLoadSuccess, playlistLoadFailure } from './actions';

export function* playlistLoad(): any {
  try {
    const discovery = {
      tokenEndpoint,
      authorizationEndpoint
    };
  
    const [request, response, promptAsync] = useAuthRequest(
      {
        responseType: ResponseType.Token,
        clientId: ClientId,
        clientSecret: ClientSecret,
        scopes: [
          "user-read-currently-playing",
          "user-read-recently-played",
          "user-read-playback-state",
          "user-top-read",
          "user-modify-playback-state",
          "streaming",
          "user-read-email",
          "user-read-private",
        ],
        usePKCE: false,
        redirectUri: "exp://192.168.138.101:19000",
      },
      discovery
    );

    const results = {request, response, promptAsync}
    
    yield put(playlistLoadSuccess(["oi"]));
  } catch (err) {
    yield put(playlistLoadFailure());
  }
}