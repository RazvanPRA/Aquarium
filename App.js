/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AquariumCalculate from './SRC/Screens/AquariumCalculate';
import AppTabs from './SRC/Screens/AppTabs';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import CustomBtn from './SRC/Components/CustomBtn';
import {COLORS} from './SRC/Colors/COLORS';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppTabs"
          component={AppTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AquariumCalculate"
          component={AquariumCalculate}
          options={{
            headerLeft: () => <CustomBtn></CustomBtn>,
            headerTintColor: COLORS.secondaryColor,
            headerStyle: {
              backgroundColor: COLORS.colorBackground,
              height: 92,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontFamily: 'Roboto-italic',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
