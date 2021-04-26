import React from 'react';
import {StyleSheet, TextInput, View, Text, Image} from 'react-native';

const Converter = () => {
  return (
    <View style={styles.body}>
      <View style={styles.body2}>
        <View style={styles.body3}>
          <View style={styles.test}>
            <Text>1</Text>
          </View>
          <TextInput style={styles.test2} />
        </View>
        <View style={styles.body3}>
          <View style={styles.test}>
            <Text>2</Text>
          </View>
          <TextInput style={styles.test2} />
        </View>
      </View>
      <View style={styles.body2}>
        <View style={styles.body3}>
          <View style={styles.test}>
            <Text>3</Text>
          </View>
          <TextInput style={styles.test2} />
        </View>
        <View style={styles.body3}>
          <View style={styles.test}>
            <Text>4</Text>
          </View>
          <TextInput style={styles.test2} />
        </View>
      </View>
      <View style={styles.body2}>
        <View style={styles.body3}>
          <View style={styles.test}>
            <Text>5</Text>
          </View>
          <TextInput style={styles.test2} />
        </View>
        <View style={styles.body3}>
          <View style={styles.test}>
            <Text>6</Text>
          </View>
          <TextInput style={styles.test2} />
        </View>
      </View>
    </View>
  );
};

export default Converter;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#1E1F18',
  },
  body2: {
    flex: 1,
    backgroundColor: '#1E1F18',
    padding: 10,
    flexDirection: 'row',
  },
  body3: {
    flex: 1,
    backgroundColor: '#1E1F18',
    padding: 10,
  },
  test: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#04ECB5',
    width: 112,
    height: 26,
  },
  test2: {
    flex: 3,
    backgroundColor: '#2D7842',
    width: 130,
    height: 55,
  },
});
