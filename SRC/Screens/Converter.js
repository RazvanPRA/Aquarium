import React, {useRef} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {COLORS} from '../Colors/COLORS';
import UnitConvertBtn from '../Components/UnitConvertBtn';
import convertorMap from '../Constants/ConvertorMap';

const Converter = () => {
  // const refRBSheet = useRef();
  return (
    <View style={styles.body}>
      <Text style={styles.text}>COMING SOON</Text>
      {/* <ScrollView>
        {convertorMap.map((item) => {
          return <UnitConvertBtn item={item} />;
        })}
      </ScrollView> */}
    </View>
  );
};

export default Converter;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.colorBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.secondaryColor,
    fontFamily: 'Roboto-regular',
    fontSize: 26,
  },
});
