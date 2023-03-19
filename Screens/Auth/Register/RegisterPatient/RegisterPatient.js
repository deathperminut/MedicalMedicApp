import { View, Text,Switch,TouchableOpacity,ScrollView,Image} from 'react-native'
import React from 'react'
import { Input, Icon } from 'react-native-elements';
import Globalstyles from '../../../../Shared/Icons/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import styles from './RegisterPatientStyle';

export default function RegisterPatient(props) {

  /* USE STATE */
  let [showPassword,setShowPassword]=React.useState(true);
  let [showPassword2,setShowPassword2]=React.useState(true);

  /* NAVITATION */
  let {navigation}=props

  return (
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Start')}></Icon>
      </View>

      <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,...{['width']:'100%'}}}>
        <Image
            style={{ width: 100, height: 100, marginBottom: 15, position:'absolute',top:-50 }}
            source={require("../../../../assets/Registro/Icono-Mano-Registro.png")}
         />
        <Text style={{...Globalstyles.Semibold,...Globalstyles.Title,...Globalstyles.Orange,...{['marginBottom']:40}}}>Registro</Text>
        <Text style={{...Globalstyles.Semibold,...Globalstyles.Purple,...Globalstyles.text,...{['marginBottom']:10,textAlign:'center'}}}>Llena todos los campos y dale registrar para completar el registro</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={{['width']:'100%'}}>
            <View style={{...styles.InputsDesignContainer,...styles.PictureContainer}}>
                    <Image
                    style={{ width: 70, height: 70, }}
                    source={require("../../../../assets/Registro/Subir-Foto.png")}
                    />
            </View>
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
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} secureTextEntry={true} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Contraseña' leftIcon={
                    <Icon
                      name='lock'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                    rightIcon={
                      <Icon
                        name={showPassword2 ? 'visibility-off' : 'visibility'}
                        size={20}
                        color='#7E72D1'
                        onPress={() => setShowPassword2(!showPassword2)}
                      />
                    } 
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:5},...{['marginBottom']:5}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} secureTextEntry={true} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Contraseña' leftIcon={
                    <Icon
                      name='lock'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                    rightIcon={
                      <Icon
                        name={showPassword ? 'visibility-off' : 'visibility'}
                        size={20}
                        color='#7E72D1'
                        onPress={() => setShowPassword(!showPassword)}
                      />
                    } 
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...{['flexDirection']:'column',['alignItems']:'center'},...{['marginTop']:5}}}>
                <TouchableOpacity style={styles.buttonIn} onPress={() => navigation.navigate('Lobby')}>
                      <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </LinearGradient>
    </View>
  )
}