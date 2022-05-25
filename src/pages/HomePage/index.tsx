import React, { useState } from 'react';

import AlbumList from '../../components/AlbumList';
import { SearchBar } from '../../components/SearchBar';

import { Container } from './styles'

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Container>
        <SearchBar
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />

        <AlbumList 
          title={
            searchTerm 
            ? `Resultados encontrados para ${searchTerm}`
            : "Álbuns buscados recentemente"
          } 
        />

        {/* {!searchTerm &&
          <AlbumList title={"Álbuns buscados recentemente"} />
        } */}

      </Container>
    </>
  );
};

export default HomePage;
