import React from 'react';
import {StyleSheet, View} from 'react-native';
import ImageBtn from './ImageBtn';
import {geometricBtn} from '../Constants/GeometricBtn';
import {COLORS} from '../Colors/COLORS';

const AquariumLanding = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View style={styles.btnTop}></View>
      {geometricBtn.map((row) => (
        <View style={styles.grpBtn}>
          {row.map((btn) => (
            <ImageBtn
              navigation={navigation}
              onPress={() => {
                navigation.navigate('AquariumCalculate', {
                  aquariumShape: btn.aquariumShape,
                  handleCalculate: btn.handleCalculate,
                  formulaImgSource: btn.formulaImgSource,
                });
              }}
              imgSource={btn.imgSource}
              style={styles.body}></ImageBtn>
          ))}
        </View>
      ))}
    </View>
  );
};

export default AquariumLanding;

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.colorBackground,
    flex: 1,
  },
  grpBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  btnCalculator: {
    flex: 1,
    width: 100,
    height: 100,
  },
  btnTop: {
    height: 45,
  },
});
