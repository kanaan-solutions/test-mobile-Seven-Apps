import React from 'react';
import Icon from "react-native-vector-icons/Entypo"
import SearchBar from '../SearchBar';

import { Container } from './styles';

const PageHeader: React.FC = () => {
    return (
        <Container>
            <Icon name="spotify" size={50} color="white" />    
            <SearchBar />
        </Container>
    );
}

export default PageHeader;