import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Test</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Convertor');
        }}>
        <Text>Click me</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
