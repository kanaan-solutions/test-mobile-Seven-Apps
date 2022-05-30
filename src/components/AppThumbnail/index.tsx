import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text } from "../../utils/theme";

import { Container, ThumbImage } from './styles';

const AppThumbnail = ({ name, owner, images, onPress }: any) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <Box elevation={2} margin="s">
        <Box borderRadius="m">
          <ThumbImage source={{ uri: images }} />
          <Box width={120} marginVertical="s">
            <Text numberOfLines={1} variant="listContentTitle">
              {name}
            </Text>
            <Text variant="listContentSubTitle">{owner}</Text>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};



export default AppThumbnail;