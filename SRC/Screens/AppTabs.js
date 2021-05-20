import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AquariumLanding from './AquariumLanding';
import Converter from './Converter';
import {COLORS} from '../Colors/COLORS';

const Tab = createMaterialTopTabNavigator();
const AppTabs = () => {
  
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 18},
        tabStyle: {color: COLORS.primaryColor},
        style: {backgroundColor: COLORS.colorBackground},
        labelStyle: {color: COLORS.primaryColor},
        tabStyle: {height: 94},
        
      }}>
      <Tab.Screen
        name="AquariumLanding"
        component={AquariumLanding}
        options={{
          title: 'Aquarium',
        }}
      />
      <Tab.Screen name="Converter" component={Converter} />
    </Tab.Navigator>
  );
};

export default AppTabs;

const styles = StyleSheet.create({});
