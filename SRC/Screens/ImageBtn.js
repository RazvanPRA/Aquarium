import React from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';

const ImageBtn = ({imgSource, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Image style={styles.img} source={imgSource} />
    </Pressable>
  );
};

export default ImageBtn;

const styles = StyleSheet.create({
  img: {
    height: 92,
    width: 151,
    borderRadius: 20,
  },
});
