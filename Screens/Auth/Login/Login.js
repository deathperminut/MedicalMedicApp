import { View, Text } from 'react-native'
import React from 'react'
import styles from './LoginStyle'
import { Icon } from 'react-native-elements'

export default function Login(props) {
  
  /* NAVITATION */
  let {navigation}=props

  return (
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Start')}></Icon>
      </View>
      <View style={styles.FormContainer}>
      

      </View>
    </View>
  )
}