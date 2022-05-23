import { ReactNode } from 'react';
import AlbumItem from '../AlbumItem';

import { Container, Subtitle, Wrapper } from './styles';

interface AlbumProps  {
  title: string;
}

const AlbumList: React.FC<AlbumProps> = ({ title, ...props }) => {
  return (
    <Container>
      <Subtitle>{ title }</Subtitle>
      <Wrapper>
        <AlbumItem />
        <AlbumItem />
      </Wrapper>
    </Container>
  );
};

export default AlbumList;
