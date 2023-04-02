import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes/Routes';
import { Loader } from './Shared/Alerts/Loader';
import AppWrapper from './AppContext/Context';


/* FUENTES */
import * as Font from 'expo-font';

export default function App(props) {

  const [loading, setLoading] = useState(true);
  const [fontsLoaded,setFontsLoaded]=useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);
  

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
      <AppWrapper name={"valor"}>
        {loading ? <Loader loading={loading} /> : null}
         <Routes></Routes>
      </AppWrapper>
    </NavigationContainer>
    
  );
};


