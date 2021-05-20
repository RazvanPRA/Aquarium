import React, {useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  Pressable
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import UnitBtn from './UnitBtn';
import {COLORS} from '../Colors/COLORS';

const Converter = () => {
  const [number, onChangeNumber] = React.useState(null);
  const refRBSheet = useRef();
  return (
    <View style={styles.body}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.body2}>
          <View style={styles.body3}>
            <Pressable
        style={styles.box}
        onPress={() => {}}>
        <Text style={styles.text}>CM</Text>
        <Image source={require('../Img/AQM/ArrowDown.png')} />
      </Pressable>
              <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.input}
            />
          </View>
          <Image
            style={styles.arrow}
            source={require('../Img/Menu/Arow1.png')}
          />
          <View style={styles.body3}>
           
            <Pressable
        style={styles.box}
        onPress={() => {}}>
        <Text style={styles.text}>CM</Text>
        <Image source={require('../Img/AQM/ArrowDown.png')} />
      </Pressable>
          
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.body2}>
          <View style={styles.body3}>
          <Pressable
        style={styles.box}
        onPress={() => {}}>
        <Text style={styles.text}>CM</Text>
        <Image source={require('../Img/AQM/ArrowDown.png')} />
      </Pressable>
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.input}
            />
          </View>
          <Image
            style={styles.arrow}
            source={require('../Img/Menu/Arow1.png')}
          />
          <View style={styles.body3}>
          <Pressable
        style={styles.box}
        onPress={() => {}}>
        <Text style={styles.text}>CM</Text>
        <Image source={require('../Img/AQM/ArrowDown.png')} />
      </Pressable>
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.body2}>
          <View style={styles.body3}>
          <Pressable
        style={styles.box}
        onPress={() => {}}>
        <Text style={styles.text}>CM</Text>
        <Image source={require('../Img/AQM/ArrowDown.png')} />
      </Pressable>
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.input}
            />
          </View>
          <Image
            style={styles.arrow}
            source={require('../Img/Menu/Arow1.png')}
          />
          <View style={styles.body3}>
          <Pressable
        style={styles.box}
        onPress={() => {}}>
        <Text style={styles.text}>CM</Text>
        <Image source={require('../Img/AQM/ArrowDown.png')} />
      </Pressable>
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.input}
            />
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Converter;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    height: 38,
    width: 93,
    backgroundColor: COLORS.primaryColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  body: {
    flex: 1,
    backgroundColor: COLORS.colorBackground,
    alignItems: 'center',
  },
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
  input: {
    backgroundColor: COLORS.primaryColor,
    width: 130,
    height: 20,
    fontSize: 15,
    padding: 0,
    color: '#FFFFFF',
    marginTop: 10
  },
  arrow: {
    alignSelf: 'flex-start',
    marginTop: '13%',
  },
  text: {
    paddingLeft: 12,
    fontSize: 18,
    fontFamily: 'Roboto-regular',
    color: COLORS.secondaryColor,
  },
});
