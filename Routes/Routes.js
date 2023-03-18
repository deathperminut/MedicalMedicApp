import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* COMPONENTS */
import BeginScreen from '../Screens/Auth/BeginScreen/BeginScreen';
import StartScreen from '../Screens/Auth/StartScreen/StartScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Login from '../Screens/Auth/Login/Login';
import RegisterPatient from '../Screens/Auth/Register/RegisterPatient/RegisterPatient';

export default function Routes() {
 
 /* STACK NAVIGATOR */

 const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator  initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} options={{header:()=>null}}/>
        <Stack.Screen name="Begin" component={BeginScreen} options={{header:()=>null}}/>
        <Stack.Screen name="Login" component={Login} options={{header:()=>null}}/>
        <Stack.Screen name="RegisterPatient" component={RegisterPatient} options={{header:()=>null}}/>
    </Stack.Navigator>
  )
}