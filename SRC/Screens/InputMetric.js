import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InputMetric = () => {
  return (
    <View style={styles.container}>
      <Text>cm</Text>
      <Text>m</Text>
      <Text>km</Text>
    </View>
  );
};

export default InputMetric;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
