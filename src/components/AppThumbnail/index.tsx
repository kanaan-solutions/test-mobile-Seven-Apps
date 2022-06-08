import React from "react";

import { Container, ThumbImage, ThumbTextTitle, ThumbTextSubtitle } from './styles';

const AppThumbnail = ({ name, owner, images, onPress }: any) => {
  return (
    <Container onPress={onPress} >
          <ThumbImage source={{ uri: images }} />          
          <ThumbTextTitle numberOfLines={1}>
            {name}
          </ThumbTextTitle>
          <ThumbTextSubtitle>{owner}</ThumbTextSubtitle>
    </Container>
  );
};

export default AppThumbnail;