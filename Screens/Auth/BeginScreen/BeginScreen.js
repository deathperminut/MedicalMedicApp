import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './BeginScreenStyle';


const BeginScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../../assets/Splash/Splash-BG.png')}
      style={styles.imageBackground}>
    </ImageBackground>
  );
};


export default BeginScreen;
