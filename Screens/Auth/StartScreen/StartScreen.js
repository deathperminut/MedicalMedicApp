import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import icon from '../../../assets/Splash/Logotipo-Medical-Color.svg'
import styles from './StartScreenStyle';

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
        <View style={styles.cardContainer}>
          <FlatList data={cardData} renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <View style={styles.cardIndicator}></View>
          </View>
            )}
            keyExtractor={(_, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}/>
        </View>
        <View style={styles.buttonContainerWrapper}>
          <View style={styles.buttonContainerIn}>
            <TouchableOpacity style={styles.buttonIn} onPress={() => navigation.navigate('Begin')}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainerUp}>
            <TouchableOpacity style={styles.buttonUp} onPress={() => navigation.navigate('Begin')}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>

  )
}

const cardData = [
  { title: 'Tarjeta 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque felis ullamcorper eros feugiat, et convallis elit efficitur. Aliquam euismod. ' },
  { title: 'Tarjeta 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque felis ullamcorper eros feugiat, et convallis elit efficitur. Aliquam euismod. ' },
  { title: 'Tarjeta 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque felis ullamcorper eros feugiat, et convallis elit efficitur. Aliquam euismod. ' },
];