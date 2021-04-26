import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageBtn from './ImageBtn';

const AquariumLanding = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View style={styles.grpBtn}>
        <ImageBtn
          navigation={navigation}
          onPress={() => {
            navigation.navigate('AquariumCalculate');
          }}
          imgSource={require('../Img/CubeSelected.png')}
          style={styles.body}></ImageBtn>

        <ImageBtn
          navigation={navigation}
          imgSource={require('../Img/HexagonCubeSelected.png')}
          style={styles.body}></ImageBtn>
      </View>
      <View style={styles.grpBtn}>
        <ImageBtn
          navigation={navigation}
          imgSource={require('../Img/PentagonalCubeSelected.png')}
          style={styles.body}></ImageBtn>
        <ImageBtn
          navigation={navigation}
          imgSource={require('../Img/TrigonalCubeSelected.png')}
          style={styles.body}></ImageBtn>
      </View>
      <View style={styles.grpBtn}>
        <ImageBtn
          navigation={navigation}
          imgSource={require('../Img/BowFrontCubeSelected.png')}
          style={styles.body}></ImageBtn>
        <ImageBtn
          navigation={navigation}
          imgSource={require('../Img/TriganolCube2Selected.png')}
          style={styles.body}></ImageBtn>
      </View>
      <View style={styles.grpBtn}>
        <ImageBtn
          navigation={navigation}
          imgSource={require('../Img/CylinderSelected.png')}
          style={styles.body}></ImageBtn>
        <ImageBtn
          navigation={navigation}
          imgSource={require('../Img/HalfCylinderSelected.png')}
          style={styles.body}></ImageBtn>
      </View>
    </View>
  );
};

export default AquariumLanding;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  grpBtn: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btnCalculator: {
    flex: 1,
    width: 100,
    height: 100,
  },
});
