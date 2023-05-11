import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Comedia = () => {
  return (
    <View style={styles.comediaEstilo} >
      <Text style={styles.letracomedia} >Comedia</Text>
    </View>
  )
}

export default Comedia; 

const styles=StyleSheet.create({
  comediaEstilo: {
    flex: 1,
    backgroundColor: 'gray', 
    justifyContent: 'center', 
    alignItems: 'center'
  }, 

  letracomedia: {
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold'
  }
})