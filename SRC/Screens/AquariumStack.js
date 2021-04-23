import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AquariumLanding from './AquariumLanding';

const Stack = createStackNavigator();
const AquariumStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AquariumLanding"
        component={AquariumLanding}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AquariumStack;

const styles = StyleSheet.create({});
