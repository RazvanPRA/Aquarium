import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AquariumLanding from './AquariumLanding';
import Converter from './Converter';

const Tab = createMaterialTopTabNavigator();
const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AquariumLanding" component={AquariumLanding} />
      <Tab.Screen name="Converter" component={Converter} />
    </Tab.Navigator>
  );
};

export default AppTabs;

const styles = StyleSheet.create({});
