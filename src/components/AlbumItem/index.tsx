import { ReactNode } from 'react';

import { Container, Image, Title, Description } from './styles';

function AlbumItem() {
  return (
    <Container>
      <Image />
      <Title>Nome do Álbum</Title>
      <Description>Nome do artista</Description>
    </Container>
  );
};

export default AlbumItem;
