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
        <View style={{...styles.navBar,marginBottom:200,paddingLeft:40,paddingRight:40}}>
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Drawer')}>
                <Icon name="chevron-left" type="font-awesome" size={20} color="#fff" />
            </TouchableOpacity> 
            <LogotipoMedicalColor style={styles.iconContainer}></LogotipoMedicalColor>
        </View>
        
        <Text style={{...Globalstyles.Medium , ...Globalstyles.white, ...Globalstyles.Title}} >Paciente</Text>
        <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Title,marginBottom:'35%'}}>Medical Home Care</Text>
        <View style={{...styles.whiteBox,alignItems:'center'}}>
            <View style={{...styles.PointersContainer}}>
                <View style={styles.Pointer_1}></View>
                <View style={styles.Pointer_2}></View>
                <View style={styles.Pointer_3}></View>
            </View> 
            <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Title, ...{marginTop:'0%'}, ...{color:'#642B80'}}}>Medical Home Care</Text>
            <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Medium, ...{marginTop:'5%'},...{paddingHorizontal:'10%'}, ...{color:'#9D91F4'},textAlign:'center'}}>Decir que es cada cosa particular suscrito y eps para que sepan que escojer</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Drawer')}>
              <Icon name="chevron-right" type="font-awesome" size={20} color="#fff" style={{position:'relative'}} />
              <Text style={{...styles.buttonText,...Globalstyles.Medium,}}>Siguiente</Text>
            </TouchableOpacity>

        </View>
            
      </View>
    </View>
  )
}