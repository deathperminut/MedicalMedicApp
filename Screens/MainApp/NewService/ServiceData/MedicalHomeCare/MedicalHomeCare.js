import { View, Text, ImageBackground, TouchableOpacity, Animated } from 'react-native'
import { Icon } from 'react-native-elements'
import React, { useState, useEffect } from 'react';
import styles from './MedicalHomeCareStyle'
import Globalstyles from '../../../../../Shared/Icons/GlobalStyles'
import LogotipoMedicalColor from '../../../../../Shared/Icons/Logotipo-Medical-Color'

export default function MedicalHomeCare(props) {
  let {navigation}=props

  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

  const animateAndNavigate = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
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
    <View style={styles.container}>
      <ImageBackground source={require('../../../../../assets/Home/BG-Medical.png')} style={styles.imageBackground}/>

      <View style={styles.MainContainer}>
        <LogotipoMedicalColor style={styles.iconContainer}></LogotipoMedicalColor>
        <Text style={{...Globalstyles.Medium , ...Globalstyles.white, ...Globalstyles.Title}} >Paciente</Text>
        <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Title}}>Medical Home Care</Text>

        <View style={{...styles.PointersContainer}}>
            <View style={styles.Pointer_1}></View>
            <View style={styles.Pointer_2}></View>
            <View style={styles.Pointer_3}></View>
          </View>

        <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Title, ...{marginTop:'0%'}}}>Medical Home Care</Text>
        <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Medium, ...{marginTop:'5%'},...{paddingHorizontal:'10%'}}}>Decir que es cada cosa particular suscrito y eps para que sepan que escojer</Text>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Login')}>
            <Icon name="chevron-left" type="font-awesome" size={20} color="#fff" />
          </TouchableOpacity>
          <View >
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          
            <Icon name="chevron-right" type="font-awesome" size={20} color="#fff" style={{position:'relative'}} />
            <Text style={{...styles.buttonText,...Globalstyles.Medium,}}>Siguiente</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}