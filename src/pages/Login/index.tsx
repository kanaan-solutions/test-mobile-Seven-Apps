import React, { useEffect } from "react";
import { ResponseType, useAuthRequest } from "expo-auth-session";

import { ClientId, ClientSecret } from "../../utils/spotifyCredentials";
import { storeData } from "../../utils/storage";
import { useNavigation } from "@react-navigation/native";

import { 
  Container,
  LoginButton,
  LoginText,
  Wrapper
 } from './styles';

const Login = () => {
  const { navigate } = useNavigation();
  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: ClientId,
      clientSecret: ClientSecret,
      scopes: [
        "playlist-modify-public",
        "playlist-modify-private",
        "playlist-read-private",
      ],
      usePKCE: false,
      redirectUri: "exp://192.168.138.101:19000",
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params;
      const token = storeData("@access_token", access_token);
      navigate("HomePage");
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