import React from 'react';
import {StyleSheet, Image} from 'react-native';

const GeometricImg = ({formulaImgSource}) => {
  return <Image style={styles.img} source={formulaImgSource} />;
};

export default GeometricImg;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: 'contain',
  },
});
