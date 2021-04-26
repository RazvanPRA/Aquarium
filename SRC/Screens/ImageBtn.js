import React from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';

const ImageBtn = ({imgSource, navigation}) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('AquariumCalculate');
      }}>
      <Image style={{height: 150, width: 150}} source={imgSource} />
    </Pressable>
  );
};

export default ImageBtn;

const styles = StyleSheet.create({});
