import React, { useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";

// @ts-ignore
import { CLIENT_ID, CLIENT_SECRET } from "../../utils/spotifyCredentials";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData } from "../../utils/storage";

// import { useDispatch } from "react-redux";
// import { getCurrentUser } from "../redux/slices/user";

import { 
  Container,
  LoginButton,
  LoginText,
  Wrapper
 } from './styles';

const Login = ({ navigation }: any) => {
  // const dispatch = useDispatch();
  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
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
      redirectUri: "exp://127.0.0.1:19000/",
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      storeData("@access_token", access_token);
      // dispatch(getCurrentUser());
      navigation.navigate("Home", { screen: "Home" });
    }
  }, [response]);

  return (
    <Container>
      <LoginButton onPress={() => promptAsync()}>
        <Wrapper
        >
          <LoginText>Login</LoginText>
        </Wrapper>
      </LoginButton>
    </Container>
  );
};

export default Login;