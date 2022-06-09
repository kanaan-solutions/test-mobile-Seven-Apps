import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as PlaylistAction from '../../store/ducks/playlistReducer/actions'

import { Text } from 'react-native';

import { Container } from './styles';
import { IPlaylistReturns } from "../../store/ducks/playlistReducer/types";
import { ApplicationState } from "../../store";
import { getData } from "../../utils/storage";

interface StateProps {
  playlist: IPlaylistReturns
}

const HomePage: React.FC<StateProps> = () => {
  const [token, setToken] = useState<string | unknown>("");

  const playlist = useSelector((state: ApplicationState) => 
    state.playlist.data
    // Ajeitar as interface do data, pois é state.platlist.data.data
  );

  const dispatch = useDispatch();
 
  async function fetchToken() {
    const token = await getData("@access_token");
    setToken(token);
    return token;
  }

  useEffect(() => {
    fetchToken()
    
    dispatch(PlaylistAction.playlistLoadRequest("13VeS4Ykz5IH7rC2ZOTICi", token))
    console.log(playlist)
  }, [])

  return (
    <Container>
      <Text>Home Page</Text>
    </Container>
  );
};

export default HomePage;
