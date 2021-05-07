import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Switch, Pressable, Image} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COLORS} from '../Colors/COLORS';
import UnitBtn from '../Screens/UnitBtn';

const UnitSwitch = ({
  isImperial,
  setIsImperial,
  unitMetric,
  unitImperial,
  setUnitMetric,
  setUnitImperial,
}) => {
  const refRBSheetMetric = useRef();
  const refRBSheetImperial = useRef();
  const toggleSwitch = () => {
    setIsImperial(!isImperial);
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
      />

      <Switch
        trackColor={{false: COLORS.secondaryColor, true: COLORS.secondaryColor}}
        thumbColor={isImperial ? COLORS.primaryColor : COLORS.primaryColor}
        ios_backgroundColor={COLORS.primaryColor}
        onValueChange={toggleSwitch}
        value={isImperial}
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
      />
      {/* <View>
        {isImperial ? (
          <Text style={styles.isFalse}>Imperial</Text>
        ) : (
          <Text style={styles.isTrue}>Imperial</Text>
        )}
        <Pressable
          style={styles.box}
          onPress={() => refRBSheetImperial.current.open()}>
          <Text style={styles.text}>{unitImperial}</Text>
          <Image source={require('../Img/AQM/ArrowDown.png')} />
        </Pressable>
        <RBSheet
          style={styles.btn}
          ref={refRBSheetImperial}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={239}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: COLORS.primaryColor,
            },
          }}>
          <Unit
            units={[
              {shortUnit: 'inch', longUnit: 'Inch'},
              {shortUnit: 'feet', longUnit: 'Feet'},
            ]}
            setUnit={setUnitImperial}
          />
        </RBSheet>
      </View> */}
    </View>
  );
};

export default UnitSwitch;

const styles = StyleSheet.create({
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
