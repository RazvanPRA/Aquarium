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
import Home from './SRC/Screens/Home';
import Convertor from './SRC/Screens/Convertor';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={Home} />
        <Stack.Screen name="Convertor" component={Convertor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
