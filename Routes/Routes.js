import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* COMPONENTS */
import BeginScreen from '../Screens/Auth/BeginScreen/BeginScreen';
import StartScreen from '../Screens/Auth/StartScreen/StartScreen';
import Login from '../Screens/Auth/Login/Login';
import Lobby from '../Screens/MainApp/Lobby/Lobby';
import DrawerComponent from '../Screens/MainApp/DrawerComponent/DrawerComponent';
import EditRegister from '../Screens/Auth/EditRegister/EditRegister';
import Beneficient from '../Screens/MainApp/Beneficient/Beneficient';
import HistoryDates from '../Screens/MainApp/HistoryDates/HistoryDates';
import OurServices from '../Screens/MainApp/OurServices/OurServices';
import FQ from '../Screens/MainApp/FrecuentQuestions/FQ';

export default function Routes() {
 
 /* STACK NAVIGATOR */

 const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator  initialRouteName="Begin">
        <Stack.Screen name="Start" component={StartScreen} options={{header:()=>null}}/>
        <Stack.Screen name="Begin" component={BeginScreen} options={{header:()=>null}}/>
        <Stack.Screen name="Login" component={Login} options={{header:()=>null}}/>
        <Stack.Screen name="Drawer" component={DrawerComponent} options={{header:()=>null}}/>
        <Stack.Screen name="EditPerfil" component={EditRegister} options={{header:()=>null}} ></Stack.Screen>
        <Stack.Screen name="Beneficient" component={Beneficient} options={{header:()=>null}} ></Stack.Screen>
        <Stack.Screen name="HistoryDates" component={HistoryDates} options={{header:()=>null}} ></Stack.Screen>
        <Stack.Screen name="OurServices" component={OurServices} options={{header:()=>null}}></Stack.Screen>
        <Stack.Screen name="FrecuentQuestions" component={FQ} options={{header:()=>null}}></Stack.Screen>
    </Stack.Navigator>
  )
}