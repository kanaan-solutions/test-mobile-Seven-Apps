import React from 'react';
import { Box,Text, theme } from '../../utils/theme';
import Icon from '@expo/vector-icons/Feather';


const Header = ({title , iconName}: {title:string, iconName?: any }) => {
    return (
      <Box >
        <Box marginHorizontal="m" height={60} flexDirection="row" alignItems="center" justifyContent="space-between" >
          <Text color="bright" variant="title1">{title}</Text>
          {iconName ?
            <Icon name={iconName} size={26} color={theme.colors.text} />
            : null}
        </Box>
      </Box>
    )
  }
  

export default Header;