import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../Colors/COLORS';

const CalculateResult = ({calculates, calculatesTest}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.textC}>{calculates} Liters</Text>
      <Text style={styles.textC}>
        {(calculates * 0.26417).toPrecision(4)} Gallons
      </Text>
    </View>
  );
};

export default CalculateResult;

const styles = StyleSheet.create({
  body: {
    marginTop: 26,
  },
  textC: {
    color: COLORS.secondaryColor,
    fontFamily: 'Roboto-regular',
    fontSize: 26,
    padding: 0,
    marginTop: 10,
    textAlign: 'center',
  },
});
