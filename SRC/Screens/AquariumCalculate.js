import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../Colors/COLORS';
import UnitSwitch from '../Components/UnitSwitch';
import GeometricImg from './GeometericImg';

const AquariumCalculate = ({route, navigation}) => {
  const [unitMetric, setUnitMetric] = useState('cm');
  const [unitImperial, setUnitImperial] = useState('inch');
  const [isImperial, setIsImperial] = useState(false);
  const {aquariumShape, formulaImgSource} = route.params;

  const activeUnit = isImperial ? unitImperial : unitMetric;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: aquariumShape,
    });
  }, []);

  console.log({formulaImgSource});
  return (
    <View style={styles.body}>
      <UnitSwitch
        unitMetric={unitMetric}
        unitImperial={unitImperial}
        setUnitMetric={setUnitMetric}
        setUnitImperial={setUnitImperial}
        setIsImperial={setIsImperial}
        isImperial={isImperial}
      />
      <View style={styles.img}>
        <GeometricImg formulaImgSource={formulaImgSource}></GeometricImg>
      </View>
    </View>
  );
};

export default AquariumCalculate;

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.colorBackground,
    flex: 1,
    alignItems: 'center',
  },
  img: {
    backgroundColor: COLORS.colorBackground,
    height: 125,
    marginTop: 20,
  },
});
