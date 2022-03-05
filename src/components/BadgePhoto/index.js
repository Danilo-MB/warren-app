import React from 'react';
import { Wrapper } from './styled';
import { Image, ImageBackground, View } from 'react-native';

const BadgePhoto = (props) => {

  const { width, height, borderWidth, borderColor, borderRadius, imageUrl } = props;

  return (
    <Image style={{borderColor: borderColor, borderRadius: borderRadius, borderWidth: borderWidth, width: width, height: height }} source={{uri: imageUrl}}/>
  );
};

export default BadgePhoto;