import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* COMPONENTS */
import BeginScreen from '../Screens/Auth/BeginScreen/BeginScreen';
import StartScreen from '../Screens/Auth/StartScreen/StartScreen';


export default function Routes() {
 
 /* STACK NAVIGATOR */

 const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator  initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen}/>
        <Stack.Screen name="Begin" component={BeginScreen}/>
    </Stack.Navigator>
  )
}