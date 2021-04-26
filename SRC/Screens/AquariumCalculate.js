import React from 'react';
import {Pressable, StyleSheet, Text, Image} from 'react-native';

const AquariumCalculate = () => {
  return (
    <Pressable>
      <Image
        style={{height: 150, width: 150}}
        source={require('../Img/CubeSelected.png')}
      />
    </Pressable>
  );
};

export default AquariumCalculate;

const styles = StyleSheet.create({});
