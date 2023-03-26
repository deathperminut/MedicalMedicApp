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
import EditRegister from '../Screens/Auth/EditRegister/EditRegister';
import Beneficient from '../Screens/MainApp/Beneficient/Beneficient';
import EditBeneficient from '../Screens/Auth/Register/EditBeneficient/EditBeneficient';
import HistoryDates from '../Screens/MainApp/HistoryDates/HistoryDates';
import NewServiceForm from '../Screens/MainApp/NewService/NewServiceForm/NewServiceForm';
import SelectPatient from '../Screens/MainApp/NewService/SelectPatient/SelectPatient';
import Swiper from '../Screens/MainApp/NewService/ServiceData/Swiper/Swiper';
import Reports from '../Screens/MainApp/Reports/Reports';
import OurServices from '../Screens/MainApp/OurServices/OurServices';

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
        <Stack.Screen name="EditPerfil" component={EditRegister} options={{header:()=>null}} ></Stack.Screen>
        <Stack.Screen name="Beneficient" component={Beneficient} options={{header:()=>null}} ></Stack.Screen>
        <Stack.Screen name="EditBeneficient" component={EditBeneficient} options={{header:()=>null}} ></Stack.Screen>
        <Stack.Screen name="HistoryDates" component={HistoryDates} options={{header:()=>null}} ></Stack.Screen>
        <Stack.Screen name="NewServices" component={NewServiceForm} options={{header:()=>null}} ></Stack.Screen>
        <Stack.Screen name="SelectPatient" component={SelectPatient} options={{header:()=>null}} ></Stack.Screen>
        <Stack.Screen name="Swiper" component={Swiper} options={{header:()=>null}}></Stack.Screen>
        <Stack.Screen name="Reports" component={Reports} options={{header:()=>null}}></Stack.Screen>
        <Stack.Screen name="OurServices" component={OurServices} options={{header:()=>null}}></Stack.Screen>
    </Stack.Navigator>
  )
}