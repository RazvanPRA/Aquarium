import React, {useRef, useState} from 'react';
import {StyleSheet, View, Switch} from 'react-native';
import {COLORS} from '../Colors/COLORS';
import UnitBtn from '../Screens/UnitBtn';

const UnitSwitch = ({
  isImperial,
  setIsImperial,
  unitMetric,
  unitImperial,
  setUnitMetric,
  setUnitImperial,
  setShowError,
  setCalculates,
}) => {
  const refRBSheetMetric = useRef();
  const refRBSheetImperial = useRef();
  const toggleSwitch = () => {
    setIsImperial(!isImperial);
    setShowError(false);
    setCalculates(null);
  };
  return (
    <View style={styles.switchBtn}>
      <UnitBtn
        isActive={!isImperial}
        title={'Metric'}
        units={[
          {shortUnit: 'mm', longUnit: 'Mimimiter'},
          {shortUnit: 'cm', longUnit: 'Centimeter'},
          {shortUnit: 'dm', longUnit: 'Decimetre'},
        ]}
        setSelectedUnit={setUnitMetric}
        selectedUnit={unitMetric}
        setShowError={setShowError}
        setCalculates={setCalculates}
      />

      <Switch
        trackColor={{false: COLORS.secondaryColor, true: COLORS.secondaryColor}}
        thumbColor={isImperial ? COLORS.primaryColor : COLORS.primaryColor}
        ios_backgroundColor={COLORS.primaryColor}
        onValueChange={toggleSwitch}
        value={isImperial}
        style={styles.switch}
      />
      <UnitBtn
        isActive={isImperial}
        title={'Imperial'}
        units={[
          {shortUnit: 'inch', longUnit: 'Inch'},
          {shortUnit: 'feet', longUnit: 'Feet'},
        ]}
        setSelectedUnit={setUnitImperial}
        selectedUnit={unitImperial}
        setShowError={setShowError}
        setCalculates={setCalculates}
      />
    </View>
  );
};

export default UnitSwitch;

const styles = StyleSheet.create({
  switch: {
    marginHorizontal: 20,
  },
  switchBtn: {
    backgroundColor: COLORS.colorBackground,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  isTrue: {
    color: COLORS.secondaryColor,
    fontSize: 18,
    fontFamily: 'Roboto-italic',
    textAlign: 'center',
  },
  isFalse: {
    color: COLORS.secondaryColor,
    fontSize: 18,
    fontFamily: 'Roboto-regular',
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    height: 38,
    width: 93,
    backgroundColor: COLORS.primaryColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  text: {
    paddingLeft: 12,
    fontSize: 18,
    fontFamily: 'Roboto-regular',
    color: COLORS.secondaryColor,
  },
});
