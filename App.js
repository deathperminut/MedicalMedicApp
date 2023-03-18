import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes/Routes';
/* FUENTES */
import * as Font from 'expo-font';

export default function App() {

  
  const [fontsLoaded,setFontsLoaded]=useState(false);

  /* USE EFFECT */
  useEffect(()=>{
    if (!fontsLoaded){

      loadFonts();
     
    }
  })
 
  const loadFonts=async ()=>{
   
    await Font.loadAsync({
      'Montserrat-Bold':require('./assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-SemiBold':require('./assets/fonts/Montserrat-SemiBold.ttf'),
      'Montserrat-Medium':require('./assets/fonts/Montserrat-Medium.ttf'),
    })
    setFontsLoaded(true);

  }

  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
    
  );
};
