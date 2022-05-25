import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, GoBackIcon, Wrapper, ListTrack } from './styles';
import AlbumCard from '../../components/AlbumCard';

const TrackList = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <GoBackIcon 
        name="arrow-back-sharp" 
        size={40} 
        color="white" 
        onPress={() => goBack() }
      />

      <Wrapper>   
        <AlbumCard />

        <ListTrack>

        </ListTrack>
      </Wrapper>
    </Container>
  );
};

export default TrackList;