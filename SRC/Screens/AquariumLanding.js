import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const AquariumLanding = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View style={styles.grpBtn}>
        <Pressable
          style={styles.body}
          onPress={() => {
            navigation.navigate('AquariumCalculate');
          }}>
          <Text style={styles.btnCalculator}>1</Text>
        </Pressable>
        <Pressable
          style={styles.body}
          onPress={() => {
            navigation.navigate('AquariumCalculate');
          }}>
          <Text style={styles.btnCalculator}>2</Text>
        </Pressable>
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
  },
  btnCalculator: {
    flex: 1,
    width: 100,
    height: 100,
  },
});
