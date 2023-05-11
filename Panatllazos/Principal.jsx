import { View, Text } from 'react-native'
import React from 'react'; 
import { Button, StyleSheet } from 'react-native';

const Principal = ({navigation}) => {
  return (
    <View style={styles.principales} >
      <Text style={styles.letra} >ELIGE UNA DE LA OPCIONES</Text>
      <Button title='IR A COMEDIA' onPress={()=>navigation.navigate('Comedia')} />
       <Button title='IR A DRAMA' onPress={()=>navigation.navigate('Drama')} />  
        <Button title='IR A FICCION' onPress={()=>navigation.navigate('Ficcion')} /> 
    </View>
  )
}

export default Principal; 

const styles=StyleSheet.create({
    principales: {
        backgroundColor: 'babyBlue',
        with: '100%', 
        flex: 1,
        alignContent: 'center',
        justifyContent:'center'

    },

    letra: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems:'center',
        justifyContent: 'center'
    }
})