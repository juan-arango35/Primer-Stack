import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Ficcion = () => {
  return (
    <View style={styles.vistaficcion}>
      <Text style={styles.letraficcion}>Ficcion</Text>
    </View>
  );
};

export default Ficcion;

const styles = StyleSheet.create({
  vistaficcion: {
    backgroundColor: 'yellow',
    alignItems: 'center',

    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  letraficcion: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
