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
        <Stack.Screen name="AquariumCalculate" component={AquariumCalculate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
