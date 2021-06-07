import React, {useRef} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {COLORS} from '../Colors/COLORS';
import UnitConvertBtn from '../Components/UnitConvertBtn';
import convertorMap from '../Constants/ConvertorMap';

const Converter = () => {
  const refRBSheet = useRef();
  return (
    <View style={styles.body}>
      <ScrollView>
        {convertorMap.map((item) => {
          return <UnitConvertBtn item={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Converter;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.colorBackground,
    alignItems: 'center',
  },
});
