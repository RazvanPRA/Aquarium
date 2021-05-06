import React from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {COLORS} from '../Colors/COLORS';

const UnitSwitch = ({setIsEnabled, isEnabled}) => {
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <View style={styles.switchBtn}>
      {isEnabled ? (
        <Text style={styles.isFalse}>Metric</Text>
      ) : (
        <Text style={styles.isTrue}>Metric</Text>
      )}
      <Switch
        trackColor={{false: COLORS.secondaryColor, true: COLORS.secondaryColor}}
        thumbColor={isEnabled ? COLORS.primaryColor : COLORS.primaryColor}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {isEnabled ? (
        <Text style={styles.isTrue}>Imperial</Text>
      ) : (
        <Text style={styles.isFalse}>Imperial</Text>
      )}
    </View>
  );
};

export default UnitSwitch;

const styles = StyleSheet.create({
  switchBtn: {
    backgroundColor: COLORS.colorBackground,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  isTrue: {
    color: COLORS.secondaryColor,
    fontSize: 18,
    fontFamily: 'Roboto-italic',
  },
  isFalse: {
    color: COLORS.secondaryColor,
    fontSize: 18,
    fontFamily: 'Roboto-regular',
  },
});
