import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Drama = () => {
  return (
    <View style={styles.dramaestilos}>
      <Text style={styles.letra}>Drama</Text>
    </View>
  );
};

export default Drama;

const styles = StyleSheet.create({
  dramaestilos: {
    flex: 1,
    backgroundColor: 'green', 
    justifyContent: 'center', 
    alignItems: 'center'
  }, 

  letra: {
    fontSize: 40,
    color: 'blue',
    fontWeight: 'bold'
  }
});
