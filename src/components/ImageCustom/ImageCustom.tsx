import React from 'react';
import {Image} from 'react-native';
import {ImageCustomProps, IMAGES} from './imagesData';

const ImageCustom = ({width, height, name}: ImageCustomProps) => {
  const imageStyle = {
    width,
    height,
  };

  return <Image source={IMAGES[name]} style={imageStyle}  />;
};

export default ImageCustom;
