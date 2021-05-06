import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {COLORS} from '../Colors/COLORS';
import UnitSwitch from '../Components/UnitSwitch';

const AquariumCalculate = ({route, navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const {aquariumShape, handleCalculate} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: aquariumShape,
    });
  }, []);
  return (
    <View style={styles.body}>
      <UnitSwitch setIsEnabled={setIsEnabled} isEnabled={isEnabled} />
    </View>
  );
};

export default AquariumCalculate;

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.colorBackground,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
