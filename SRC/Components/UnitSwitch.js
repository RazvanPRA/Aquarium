import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {COLORS} from '../Colors/COLORS';

const UnitSwitch = ({setIsEnabled, isEnabled}) => {
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <View>
      <Switch
        trackColor={{false: COLORS.secondaryColor, true: COLORS.secondaryColor}}
        thumbColor={isEnabled ? COLORS.primaryColor : COLORS.primaryColor}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {/* {isEnabled ? <Text>enable</Text> : <Text>not enable</Text>} */}
    </View>
  );
};

export default UnitSwitch;

const styles = StyleSheet.create({});
