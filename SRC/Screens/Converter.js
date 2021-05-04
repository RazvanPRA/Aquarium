import React, {useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import InputMetric from './InputMetric';

const Converter = () => {
  const [number, onChangeNumber] = React.useState(null);
  const refRBSheet = useRef();
  return (
    <View style={styles.body}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.body2}>
          <View style={styles.body3}>
            <View style={styles.test}>
              <Button
                style={styles.test}
                title="OPEN"
                onPress={() => refRBSheet.current.open()}
              />
              <RBSheet
                style={styles.btn}
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={250}
                customStyles={{
                  wrapper: {
                    backgroundColor: 'transparent',
                  },
                  draggableIcon: {
                    backgroundColor: '#000',
                  },
                }}>
                <InputMetric />
              </RBSheet>
            </View>
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.test2}
            />
          </View>
          <Image
            style={styles.arrow}
            source={require('../Img/Menu/Arow1.png')}
          />
          <View style={styles.body3}>
            <View style={styles.test}>
              <Text>2</Text>
            </View>
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.test2}
            />
          </View>
        </View>
        <View style={styles.body2}>
          <View style={styles.body3}>
            <View style={styles.test}>
              <Text>3</Text>
            </View>
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.test2}
            />
          </View>
          <Image
            style={styles.arrow}
            source={require('../Img/Menu/Arow1.png')}
          />
          <View style={styles.body3}>
            <View style={styles.test}>
              <Text>4</Text>
            </View>
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.test2}
            />
          </View>
        </View>
        <View style={styles.body2}>
          <View style={styles.body3}>
            <View style={styles.test}>
              <Text>5</Text>
            </View>
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.test2}
            />
          </View>
          <Image
            style={styles.arrow}
            source={require('../Img/Menu/Arow1.png')}
          />
          <View style={styles.body3}>
            <View style={styles.test}>
              <Text>6</Text>
            </View>
            <TextInput
              value={number}
              keyboardType="numeric"
              onChangeText={onChangeNumber}
              style={styles.test2}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Converter;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1E1F18',
    alignItems: 'center',
  },
  body2: {
    backgroundColor: '#1E1F18',
    padding: 10,
    flexDirection: 'row',
    marginTop: 75,
    alignItems: 'center',
  },
  body3: {
    backgroundColor: '#1E1F18',
    padding: 10,
    alignItems: 'center',
  },
  btn: {},
  test: {
    marginBottom: 10,
    backgroundColor: '#04ECB5',
    width: 112,
    height: 26,
    alignSelf: 'center',
    fontSize: 10,
  },
  test2: {
    backgroundColor: '#2D7842',
    width: 130,
    height: 20,
    fontSize: 50,
    color: '#000000',
  },
  arrow: {
    alignSelf: 'flex-start',
    marginTop: '13%',
  },
});
