import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import styles from './BeginScreenStyle';


export default function BeginScreen() {
  return (
    <ImageBackground
      source={require('../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')}
      style={styles.imageBackground}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a Medical</Text>
        </View>
      </View>
    </ImageBackground>

  )
}
