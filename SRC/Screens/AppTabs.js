import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HeaderBackButton} from '@react-navigation/stack';
import AquariumLanding from './AquariumLanding';
import Converter from './Converter';

const Tab = createMaterialTopTabNavigator();
const AppTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 18},
        style: {backgroundColor: '#1E1F18'},
        labelStyle: {color: '#2D7842'},
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
