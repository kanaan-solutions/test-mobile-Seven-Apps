import React from 'react';

import { Container, InputText, Label } from './styles';

interface ISearchBar {
  onChangeText: (text:string) => void;
  value: string | undefined;
}

export const SearchBar: React.FC<ISearchBar> = ({ onChangeText, value }) => {
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
        value={value}
        placeholder='Comece a escrever....'
        onChangeText={onChangeText}
      />
    </Container>
  );
};