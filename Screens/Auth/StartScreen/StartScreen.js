import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import icon from '../../../assets/Splash/Logotipo-Medical-Color.svg'

export default function StartScreen(props) {
  let {navigation}=props
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')} style={styles.imageBackground}>
        <View style={styles.iconContainer}>
          <SvgUri uri={icon}/>
        </View>
        <View style={styles.tittleContainer}>
          <Text style={styles.title}>Bienvenido a Medical Home Care</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Begin')}>
            <Text style={styles.buttonText}>BeginScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Begin')}>
            <Text style={styles.buttonText}>BeginScreen</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    tittleContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      width: '100%',
    },
    title: { 
      fontSize: 30.36,
      fontFamily: 'Montserrat-SemiBold',
      textAlign: 'center',
      color: '#FFF',
      paddingLeft:60,
      paddingRight:60, 
    },
    iconContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginVertical: 10,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
  });