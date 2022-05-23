import React from 'react';

import AlbumList from '../../components/AlbumList';
import { SearchBar } from '../../components/SearchBar';

import { Container, SpotifyIcon } from './styles'

export const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <SpotifyIcon name="spotify" size={65} color="white" /> 
        <SearchBar />
        <AlbumList title={"Álbuns buscados recentemente"} />
      </Container>
    </>
  );
};

export default HomePage;
