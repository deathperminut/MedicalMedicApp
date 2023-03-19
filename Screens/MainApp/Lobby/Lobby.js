import { View, Text ,ImageBackground } from 'react-native'
import React from 'react'
import styles from './LobbyStyle'
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';

export default function Lobby() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')} style={styles.imageBackground}></ImageBackground>
      <View style={styles.LobbyContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.navBar}>
            <ImageBackground source={require('../../../assets/Home/Foto-Usuario.png')} style={styles.photo}></ImageBackground>
          </View>
        </View>
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={styles.FormContainer}>
          <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,...{['marginBottom']:40}}}>Servicios</Text>
        </LinearGradient>
      </View>
    </View>
  )
}