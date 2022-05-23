import React from 'react';

import { Container, InputText, Label } from './styles';

export const SearchBar: React.FC = () => {
  return (
    <Container 
      style={{
        "borderBottomColor": "#c3c3c3",
        "borderBottomWidth": 1,
      }}
    >
      <Label>
        Busque por artistas, álbums ou músicas 
      </Label>
      <InputText 
        placeholder='Comece a escrever...'
      />
    </Container>
  );
};