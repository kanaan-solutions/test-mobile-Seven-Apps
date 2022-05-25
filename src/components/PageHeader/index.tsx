import { ReactNode } from 'react';

import { Container, SpotifyIcon } from './styles'

const PageHeader = () => {
  return (
    <Container>
      <SpotifyIcon name="spotify" size={65} color="white" /> 
    </Container>
  );
};

export default PageHeader;
