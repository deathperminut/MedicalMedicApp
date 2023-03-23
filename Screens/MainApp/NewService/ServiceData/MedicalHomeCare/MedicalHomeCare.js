import { View, Text, ImageBackground, TouchableOpacity, Animated, Easing } from 'react-native'
import { Icon } from 'react-native-elements'
import React, { useState, useEffect } from 'react';
import Globalstyles from '../../../../../Shared/Icons/GlobalStyles'
import LogotipoMedicalColor from '../../../../../Shared/Icons/Logotipo-Medical-Color'
import styles from './MedicalHomeCareStyle'

export default function Particular(props) {
  let {navigation}=props

  const [translateX, setTranslateX] = useState(new Animated.Value(0));

  const animateAndNavigate = () => {
    Animated.timing(translateX, {
      toValue: -500,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.out(Easing.quad)
    }).start(() => {
      navigation.navigate('Particular');
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateAndNavigate();
    }, 3000); // tiempo en milisegundos, en este caso 3 segundos

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View style={{...styles.container, transform: [{ translateX }]}}>
    <View style={styles.container}>
      <ImageBackground source={require('../../../../../assets/Home/BG-Medical.png')} style={styles.imageBackground}/>

      <View style={styles.MainContainer}>
        <LogotipoMedicalColor style={styles.iconContainer}></LogotipoMedicalColor>
        <Text style={{...Globalstyles.Medium , ...Globalstyles.white, ...Globalstyles.Title}} >Paciente</Text>
        <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Title}}>Medical Home Care</Text>
        <View style={styles.whiteBox}></View>
        <View style={{...styles.PointersContainer}}>
            <View style={styles.Pointer_1}></View>
            <View style={styles.Pointer_2}></View>
            <View style={styles.Pointer_3}></View>
          </View>
        
        
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Login')}>
            <Icon name="chevron-left" type="font-awesome" size={20} color="#fff" />
          </TouchableOpacity>
          
          <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Title, ...{marginTop:'0%'}, ...{color:'#642B80'}}}>Medical Home Care</Text>
        <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Medium, ...{marginTop:'5%'},...{paddingHorizontal:'10%'}, ...{color:'#9D91F4'}}}>Decir que es cada cosa particular suscrito y eps para que sepan que escojer</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          
            <Icon name="chevron-right" type="font-awesome" size={20} color="#fff" style={{position:'relative'}} />
            <Text style={{...styles.buttonText,...Globalstyles.Medium,}}>Siguiente</Text>
          </TouchableOpacity>
          
          </View>
          
        </View>
        </Animated.View>
  )
}