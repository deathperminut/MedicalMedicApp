import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList, Button} from 'react-native';
import { SvgUri } from 'react-native-svg';
import LogoMedicalWhite from '../../../Shared/Icons/LogoMedicalWhite';
import styles from './StartScreenStyle';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';


export default function StartScreen(props) {

  
  let {navigation}=props

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')} style={styles.imageBackground}></ImageBackground>
      <View style={styles.MainContainer}>
          <LogoMedicalWhite width='100' height="100" style={styles.iconContainer}></LogoMedicalWhite>
          <Text style={{...Globalstyles.Medium , ...Globalstyles.white, ...Globalstyles.Title}} >Bienvenido a</Text>
          <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Title}}>Medical Home Care</Text>
          <Text style={{...Globalstyles.Medium, ...Globalstyles.white, ...Globalstyles.text , ...{'marginTop':20}}}>En esta app podrás  agendar citas medicas</Text>
          <Text style={{...Globalstyles.Medium, ...Globalstyles.white, ...Globalstyles.text, ...{'marginBottom':25}}}>en casa con profesionales médicos</Text>
          <View style={{...styles.PointersContainer,...{'marginBottom':5}}}>
            <View style={styles.Pointer_1}></View>
            <View style={styles.Pointer_2}></View>
            <View style={styles.Pointer_3}></View>
          </View>
          <TouchableOpacity style={styles.buttonIn} onPress={() => navigation.navigate('Login')}>
              <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonUp} onPress={() => navigation.navigate('RegisterPatient')}>
              <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Registrarse</Text>
          </TouchableOpacity>

      </View>
    </View>

  )
}

const cardData = [
  { title: 'Tarjeta 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque felis ullamcorper eros feugiat, et convallis elit efficitur. Aliquam euismod. ' },
  { title: 'Tarjeta 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque felis ullamcorper eros feugiat, et convallis elit efficitur. Aliquam euismod. ' },
  { title: 'Tarjeta 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque felis ullamcorper eros feugiat, et convallis elit efficitur. Aliquam euismod. ' },
];