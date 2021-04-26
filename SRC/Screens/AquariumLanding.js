import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AquariumCalculate from './AquariumCalculate';

const AquariumLanding = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View style={styles.grpBtn}>
        <AquariumCalculate style={styles.body}></AquariumCalculate>
        <AquariumCalculate
          style={styles.body}
          onPress={() => {
            navigation.navigate('AquariumCalculate');
          }}></AquariumCalculate>
      </View>
      <View style={styles.grpBtn}>
        <Text style={styles.btnCalculator}>3</Text>
        <Text style={styles.btnCalculator}>4</Text>
      </View>
      <View style={styles.grpBtn}>
        <Text style={styles.btnCalculator}>5</Text>
        <Text style={styles.btnCalculator}>6</Text>
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
