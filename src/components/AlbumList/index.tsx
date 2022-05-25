import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AlbumCard from '../AlbumCard';
import { useNavigation } from '@react-navigation/native';

import { Container, Subtitle, Wrapper } from './styles';

interface AlbumProps  {
  title: string;
}

const AlbumList: React.FC<AlbumProps> = ({ title }) => {
  const { navigate } =useNavigation()

  return (
    <Container>
      <Subtitle>{ title }</Subtitle>
      <Wrapper>
        <TouchableOpacity
          onPress={() => navigate('TrackList')}
        >
          <AlbumCard />
        </TouchableOpacity>
      </Wrapper>
    </Container>
  );
};

export default AlbumList;
