import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './EpsStyle'
import Globalstyles from '../../../../../Shared/Icons/GlobalStyles'

export default function Eps(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../../assets/Home/BG-Medical.pnng')}
        style={styles.imageBackground}>
      </ImageBackground>

      <View style={styles.MainContainer}>
        <TouchableOpacity style={styles.buttonIn} onPress={() => navigation.navigate('Login')}>
              <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}