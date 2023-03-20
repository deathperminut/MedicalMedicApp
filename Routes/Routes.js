import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* COMPONENTS */
import BeginScreen from '../Screens/Auth/BeginScreen/BeginScreen';
import StartScreen from '../Screens/Auth/StartScreen/StartScreen';
import Login from '../Screens/Auth/Login/Login';
import RegisterPatient from '../Screens/Auth/Register/RegisterPatient/RegisterPatient';
import Lobby from '../Screens/MainApp/Lobby/Lobby';
import RegisterBeneficients from '../Screens/Auth/Register/RegisterBeneficients/RegisterBeneficients';
import Eps from '../Screens/MainApp/NewService/ServiceData/Eps/Eps';
import MedicalHomeCare from '../Screens/MainApp/NewService/ServiceData/MedicalHomeCare/MedicalHomeCare';
import Particular from '../Screens/MainApp/NewService/ServiceData/Particular/Particular';
import DrawerComponent from '../Screens/MainApp/DrawerComponent/DrawerComponent';

export default function Routes() {
 
 /* STACK NAVIGATOR */

 const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator  initialRouteName="Begin">
        <Stack.Screen name="Start" component={StartScreen} options={{header:()=>null}}/>
        <Stack.Screen name="Begin" component={BeginScreen} options={{header:()=>null}}/>
        <Stack.Screen name="Login" component={Login} options={{header:()=>null}}/>
        <Stack.Screen name="Drawer" component={DrawerComponent} options={{header:()=>null}}/>
        <Stack.Screen name="RegisterPatient" component={RegisterPatient} options={{header:()=>null}}/>
        <Stack.Screen name="RegisterBeneficient" component={RegisterBeneficients} options={{header:()=>null}}/>
        <Stack.Screen name="EPS" component={Eps} options={{header:()=>null}}/>
        <Stack.Screen name="Particular" component={Particular} options={{header:()=>null}}/>
        <Stack.Screen name="MedicalHomeCare" component={MedicalHomeCare} options={{header:()=>null}}/>
    </Stack.Navigator>
  )
}