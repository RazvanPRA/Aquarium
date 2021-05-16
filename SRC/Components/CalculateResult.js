import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../Colors/COLORS';

const CalculateResult = ({calculates, isImperial, showError}) => {
  console.log({calculates});
  return (
    <View style={styles.body}>
      {isImperial === false ? (
        <View>
          {!!calculates && (
            <View>
              <Text style={styles.textC}>{calculates.toFixed(2)} Liters</Text>
              <Text style={styles.textC}>
                {(calculates * 0.22).toFixed(2)} Gallons
              </Text>
            </View>
          )}
        </View>
      ) : (
        <View>
          {!!calculates && (
            <View>
              <Text style={styles.textC}>
                {(calculates * 4.5454).toFixed(2)} Liters
              </Text>
              <Text style={styles.textC}>{calculates.toFixed(2)} Gallons</Text>
            </View>
          )}
        </View>
      )}
      {showError && (
        <Text style={styles.textNaN}>Please fill all necessary fields</Text>
      )}
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
  textNaN: {
    color: COLORS.warning,
    textAlign: 'center',
    marginTop: 47,
    fontSize: 22,
    fontFamily: 'Roboto-regular',
  },
});
