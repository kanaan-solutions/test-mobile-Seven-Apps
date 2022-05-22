import { ReactNode } from 'react';

import { Container, InputText, Label } from './styles';

interface SearchBarProps {
  children: ReactNode;
}

function SearchBar() {
  return (
    <Container>
      <Label>
        Busque por artistas, álbums ou músicas 
      </Label>
      <InputText 
        placeholder='Comece a escrever...'
      />
    </Container>
  );
};

export default SearchBar;
