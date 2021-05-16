import React, {useLayoutEffect, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CalculateResult from '../Components/CalculateResult';
import {COLORS} from '../Colors/COLORS';
import UnitSwitch from '../Components/UnitSwitch';
import GeometricImg from './GeometericImg';

const AquariumCalculate = ({route, navigation}) => {
  const [functionDimensions, setFunctionDimensions] = useState({});
  const [unitMetric, setUnitMetric] = useState('cm');
  const [unitImperial, setUnitImperial] = useState('inch');
  const [isImperial, setIsImperial] = useState(false);
  const {aquariumShape, formulaImgSource, dimensions, equation} = route.params;
  const [showError, setShowError] = useState(false);
  const [calculates, setCalculates] = useState(null);
  const activeUnit = isImperial ? unitImperial : unitMetric;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: aquariumShape,
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.body}>
        <ScrollView>
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
                    setCalculates(null);
                    setShowError(false);
                  }}
                  style={styles.input}
                  maxLength={10}
                />
                <Text style={styles.text}>{dimension}</Text>
              </View>
            );
          })}
          <Pressable
            onPress={() => {
              if (isImperial === false) {
                if (activeUnit === 'dm') {
                  const result = equation(functionDimensions, setShowError);
                  setCalculates(result);
                } else if (activeUnit === 'cm') {
                  const result = equation(functionDimensions, setShowError);
                  setCalculates(result / 1000);
                } else {
                  const result = equation(functionDimensions, setShowError);
                  setCalculates(result / 1000000);
                }
              } else {
                if (activeUnit === 'inch') {
                  const result = equation(functionDimensions, setShowError);
                  setCalculates(result / 231);
                } else {
                  const result = equation(functionDimensions, setShowError);
                  setCalculates((result / 231) * 1728);
                }
              }
            }}>
            <Text style={styles.textR}>Result</Text>
          </Pressable>
          <View>
            <CalculateResult
              showError={showError}
              calculates={calculates}
              isImperial={isImperial}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AquariumCalculate;

const styles = StyleSheet.create({
  textR: {
    alignSelf: 'center',
    color: COLORS.secondaryColor,
    fontFamily: 'Roboto-regular',
    fontSize: 26,
    padding: 0,
    marginTop: 33,
  },

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
    paddingTop: 30,
    backgroundColor: COLORS.colorBackground,
    flex: 1,
    alignItems: 'center',
  },
  img: {
    backgroundColor: COLORS.colorBackground,
    height: 125,
    marginTop: 20,
    alignItems: 'center',
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
