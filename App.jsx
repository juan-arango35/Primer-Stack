 import * as React from 'react'
 import { NavigationContainer } from '@react-navigation/native'
 import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
 import Principal from './Panatllazos/Principal';
 import Drama from './Panatllazos/Drama';
 import Comedia from './Panatllazos/Comedia';
 import Ficcion from './Panatllazos/Ficcion';
import { StyleSheet } from 'react-native/types';



  const VinculoPantalla= createNativeStackNavigator()
  const App = () => {
    return (

     
      <NavigationContainer >
        <VinculoPantalla.Navigator initialRouteName='Principal' >
          <VinculoPantalla.Screen name='Principal' component={Principal}/>
          <VinculoPantalla.Screen name='Comedia' component={Comedia}/>
          <VinculoPantalla.Screen name='Drama' component={Drama}/>
          <VinculoPantalla.Screen name='Ficcion' component={Ficcion}/>

        </VinculoPantalla.Navigator>
      </NavigationContainer>
     
    )
  }
  
  export default App; 

  