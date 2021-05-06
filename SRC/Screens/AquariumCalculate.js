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
      {isEnabled ? (
        <Text style={styles.isFalse}>Metric</Text>
      ) : (
        <Text style={styles.isTrue}>Metric</Text>
      )}
      <UnitSwitch
        style={styles.switchBtn}
        setIsEnabled={setIsEnabled}
        isEnabled={isEnabled}
      />
      {isEnabled ? (
        <Text style={styles.isTrue}>Imperial</Text>
      ) : (
        <Text style={styles.isFalse}>Imperial</Text>
      )}
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
  isTrue: {
    color: COLORS.secondaryColor,
    fontSize: 18,
    fontFamily: 'Roboto-italic',
  },
  isFalse: {
    color: COLORS.secondaryColor,
    fontSize: 18,
    fontFamily: 'Roboto-regular',
  },
});
