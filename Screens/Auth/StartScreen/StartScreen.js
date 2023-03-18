import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList} from 'react-native';
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
          <Text style={Globalstyles.Semibold}>Bienvenido a</Text>
          <Text style={Globalstyles.bold}>Medical Home Care</Text>
      </View>
    </View>

  )
}

const cardData = [
  { title: 'Tarjeta 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque felis ullamcorper eros feugiat, et convallis elit efficitur. Aliquam euismod. ' },
  { title: 'Tarjeta 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque felis ullamcorper eros feugiat, et convallis elit efficitur. Aliquam euismod. ' },
  { title: 'Tarjeta 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque felis ullamcorper eros feugiat, et convallis elit efficitur. Aliquam euismod. ' },
];