import React from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomBtn = () => {
  const {goBack} = useNavigation();
  return (
    <Pressable style={styles.sizeImg} onPress={goBack}>
      <Image
        style={styles.img}
        source={require('../Img/Menu/ArrowBack.png')}></Image>
    </Pressable>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  sizeImg: {
    marginLeft: 15,
  },
});
