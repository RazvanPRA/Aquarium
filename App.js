/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AquariumStack from './SRC/Screens/AquariumStack';
import Converter from './SRC/Screens/Converter';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Aquarium" component={AquariumStack} />
        <Stack.Screen name="Convertor" component={Converter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
