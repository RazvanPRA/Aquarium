import React, {useRef} from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {COLORS} from '../Colors/COLORS';
import RBSheet from 'react-native-raw-bottom-sheet';

const UnitBtn = ({isActive, units, selectedUnit, setSelectedUnit, title}) => {
  const bottomSheetRef = useRef();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isActive && styles.activeTitle]}>
        {title}
      </Text>
      <Pressable
        style={styles.box}
        onPress={() => bottomSheetRef.current.open()}>
        <Text style={styles.text}>{selectedUnit}</Text>
        <Image source={require('../Img/AQM/ArrowDown.png')} />
      </Pressable>
      <RBSheet
        ref={bottomSheetRef}
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
          container: {
            backgroundColor: COLORS.primaryColor,
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
          },
        }}>
        <View style={styles.bottomSheetContainer}>
          {units &&
            units.map((item) => (
              <Pressable
                key={item.longUnit}
                onPress={() => {
                  setSelectedUnit(item.shortUnit);
                  bottomSheetRef.current.close();
                }}>
                <Text style={styles.input}>{item.longUnit}</Text>
              </Pressable>
            ))}
        </View>
      </RBSheet>
    </View>
  );
};

export default UnitBtn;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    fontSize: 18,
    fontFamily: 'Roboto-regular',
    textAlign: 'center',
  },
  title: {
    color: COLORS.secondaryColor,
    fontSize: 18,
    fontFamily: 'Roboto-regular',
    textAlign: 'center',
    marginBottom: 8,
  },
  activeTitle: {
    fontFamily: 'Roboto-italic',
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
  bottomSheetContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
