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

