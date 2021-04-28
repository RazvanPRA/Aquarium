import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const AquariumCalculate = ({route, navigation}) => {
  const {aquariumShape, title, handleCalculate} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: aquariumShape,
    });
  }, []);
  return (
    <View style={styles.body}>
      <Pressable
        onPress={() => {
          handleCalculate({height: 5, lenght: 10, width: 20});
        }}>
        <Text>Calculate: </Text>
      </Pressable>
    </View>
  );
};

export default AquariumCalculate;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1E1F18',
    flex: 1,
  },
});
