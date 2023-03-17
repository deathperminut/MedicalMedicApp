import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import icon from '../assets/Splash/Splash-BG.png';

const mh_WS = () => {
  return (
    <ImageBackground
      source={require('../assets/seguro-familiar.webp')}
      style={styles.imageBackground}>
      <View style={styles.overlay}>
        <View style={styles.container}>
        <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
        </View>
          <Text style={styles.title}>Bienvenido a Medical Home Care</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(126, 114, 209, 0.8)', // El último número es la opacidad (0-1)
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    maxWidth: 500, // Ajusta este valor según tu preferencia
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
    marginRight: 10,
  },
});

export default mh_WS;
