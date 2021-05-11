import React, {useLayoutEffect, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {COLORS} from '../Colors/COLORS';
import UnitSwitch from '../Components/UnitSwitch';
import GeometricImg from './GeometericImg';

const AquariumCalculate = ({route, navigation}) => {
  const [functionDimensions, setFunctionDimensions] = useState({});
  const [unitMetric, setUnitMetric] = useState('cm');
  const [unitImperial, setUnitImperial] = useState('inch');
  const [isImperial, setIsImperial] = useState(false);
  const {aquariumShape, formulaImgSource, dimensions} = route.params;

  const activeUnit = isImperial ? unitImperial : unitMetric;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: aquariumShape,
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.body}>
        <UnitSwitch
          unitMetric={unitMetric}
          unitImperial={unitImperial}
          setUnitMetric={setUnitMetric}
          setUnitImperial={setUnitImperial}
          setIsImperial={setIsImperial}
          isImperial={isImperial}
        />
        <View style={styles.img}>
          <GeometricImg formulaImgSource={formulaImgSource}></GeometricImg>
        </View>
        {dimensions.map((dimension) => {
          return (
            <View
              removeClippedSubviews={true}
              style={styles.view}
              key={dimension}>
              <TextInput
                accessible={false}
                contextMenuHidden={true}
                keyboardType="numeric"
                onChangeText={(text) => {
                  setFunctionDimensions({
                    ...functionDimensions,
                    [dimension]: text,
                  });
                }}
                style={styles.input}
                maxLength={10}
              />
              <Text style={styles.text}>{dimension}</Text>
            </View>
          );
        })}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AquariumCalculate;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.primaryColor,
    width: 338,
    height: 38,
    marginTop: 21,
    borderRadius: 7,
    fontSize: 26,
    padding: 0,
    textAlign: 'center',
    color: COLORS.secondaryColor,
    alignSelf: 'center',
  },
  body: {
    backgroundColor: COLORS.colorBackground,
    flex: 1,
    alignItems: 'center',
  },
  img: {
    backgroundColor: COLORS.colorBackground,
    height: 125,
    marginTop: 20,
  },
  view: {
    width: '100%',
  },
  text: {
    color: COLORS.secondaryColor,
    fontSize: 26,
    position: 'absolute',
    marginTop: 20,
    marginLeft: '65%',
    textAlign: 'right',
  },
});
