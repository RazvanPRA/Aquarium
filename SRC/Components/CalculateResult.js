import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../Colors/COLORS';

const CalculateResult = ({calculates, isImperial}) => {
  return (
    <View style={styles.body}>
      {isImperial === false ? (
        <View>
          <Text style={styles.textC}>{calculates.toPrecision(8)} Liters</Text>
          <Text style={styles.textC}>
            {(calculates * 0.22).toPrecision(8)} Gallons
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.textC}>
            {(calculates * 4.5454).toPrecision(8)} Liters
          </Text>
          <Text style={styles.textC}>{calculates.toPrecision(8)} Gallons</Text>
        </View>
      )}
      {console.log(isImperial)}
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
