import React, {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {StyleSheet, View, Image, TextInput} from 'react-native';
import {COLORS} from '../Colors/COLORS';
import UnitBtn from './UnitBtn';

const UnitConvertBtn = ({item}) => {
  const {units, milimeterToMeter, centemeterToMeter, decimetreToMeter} = item;
  const [number, onChangeNumber] = useState(null);
  const [activeUnitIn, setActiveUnitIn] = useState(units[0].shortUnit);
  const [activeUnitOut, setActiveUnitOut] = useState(units[1].shortUnit);
  return (
    <View style={styles.body2}>
      <View style={styles.body3}>
        <UnitBtn
          isActive={false}
          units={units}
          setSelectedUnit={setActiveUnitIn}
          selectedUnit={activeUnitIn}
          setShowError={() => {}}
          setCalculates={() => {}}
        />
        <TextInput
          value={number}
          keyboardType="numeric"
          onChangeText={onChangeNumber}
          style={styles.input}
        />
      </View>
      <Image style={styles.arrow} source={require('../Img/Menu/Arow1.png')} />
      <View style={styles.body3}>
        <UnitBtn
          isActive={false}
          units={units}
          setSelectedUnit={setActiveUnitOut}
          selectedUnit={activeUnitOut}
          setShowError={() => {}}
          setCalculates={() => {}}
        />

        <TextInput
          value={number}
          keyboardType="numeric"
          onChangeText={onChangeNumber}
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default UnitConvertBtn;

const styles = StyleSheet.create({
  body2: {
    backgroundColor: COLORS.colorBackground,
    padding: 10,
    flexDirection: 'row',
    marginTop: 75,
    alignItems: 'center',
  },
  body3: {
    backgroundColor: COLORS.colorBackground,
    padding: 10,
    alignItems: 'center',
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
  input: {
    backgroundColor: COLORS.primaryColor,
    width: 130,
    height: 20,
    fontSize: 15,
    padding: 0,
    color: '#FFFFFF',
    marginTop: 10,
  },
});
