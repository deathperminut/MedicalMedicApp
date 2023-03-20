import { View, Text,Switch,TouchableOpacity,ScrollView,Image} from 'react-native'
import React from 'react'
import { Input, Icon } from 'react-native-elements';
import Globalstyles from '../../../../Shared/Icons/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import styles from './RegisterBeneficientsStyle'

export default function RegisterBeneficients(props) {
  
  /* NAVITATION */
  let {navigation}=props

  return (
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Drawer')}></Icon>
      </View>

      <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={styles.FormContainer}>
        <Image
            style={{ width: 100, height: 100, marginBottom: 15, position:'absolute',top:-50 }}
            source={require("../../../../assets/Registro/Icono-Mano-Registro.png")}
         />
        <Text style={{...Globalstyles.Semibold,...Globalstyles.Title,...Globalstyles.Orange,...{['marginBottom']:40}}}>Registro Beneficiario</Text>
        <Text style={{...Globalstyles.Medium,...Globalstyles.Purple,...Globalstyles.text,...{['marginBottom']:10}}}>Llena todos los campos y dale registrar para completar el registro</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}}>

            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Email' leftIcon={
                    <Icon
                      name='email'
                      size={20}
                      color='#7E72D1'
                    />}   
              />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Primer nombre' leftIcon={
                    <Icon
                      name='user'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Segundo nombre' leftIcon={
                    <Icon
                      name='user'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Primer apellido' leftIcon={
                    <Icon
                      name='user'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Segundo apellido' leftIcon={
                    <Icon
                      name='user'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Documento Ident.' leftIcon={
                    <Icon
                      name='id-card'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Fecha de nacimiento' leftIcon={
                    <Icon
                      name='calendar'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Número celular' leftIcon={
                    <Icon
                      name='phone'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Ciudad' leftIcon={
                    <Icon
                      name='directions'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Dirección' leftIcon={
                    <Icon
                      name='directions'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...{['flexDirection']:'column',['alignItems']:'center'},...{['marginTop']:5}}}>
                <TouchableOpacity style={styles.buttonIn} onPress={() => navigation.navigate('Drawer')}>
                      <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </LinearGradient>
    </View>
  )
}