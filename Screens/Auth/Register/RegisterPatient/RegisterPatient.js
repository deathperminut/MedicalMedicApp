import { View, Text,Switch,StyleSheet,TouchableOpacity,ScrollView,Image,Modal} from 'react-native'
import React from 'react'
import { Input, Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import Globalstyles from '../../../../Shared/Icons/GlobalStyles';
import RNPickerSelect from 'react-native-picker-select';
import styles from './RegisterPatientStyle';
import { AppContext } from '../../../../AppContext/Context';
import CustomModal from '../../../../Shared/Alerts/Alert';
import { initRegister } from '../../../../services/Auth/Register/RegisterPatient/RegisterPatient';

const TypeIdentification = [
  { value: "cc", label: "CC" },
  { value: "di", label: "DI" },
  { value: "ce", label: "CE" },
  { value: "nie", label: "NIE" }
];

export default function RegisterPatient(props) {

  const [showModal, setShowModal] = React.useState(false);

  const handleRegistrationSuccess = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { counter, setCounter } = React.useContext(AppContext);
  /* USE STATE */
  let [showPassword,setShowPassword]=React.useState(true);
  let [showPassword2,setShowPassword2]=React.useState(true);

  /* NAVITATION */
  let {navigation}=props

  /* USESTATE */

  let [userData,setUserData]=React.useState({
    "first_name":"",
    "second_name":"",
    "last_name":"",
    "second_last_name":"",
    "date_joined":"",
    "email":"",
    "password":"",
    "phone":"",
    "identification":"",
    "department":"",
    "city":"",
    "coverage_city":"",
    "date_birth":"",
    "photo_profile":null,
    "neighbourhood":"",
    "genre":"",
    "eps":"",
    "occupation":"",
    "regime_type":"",
    "insurer":"",
  })

  const placeholder_type = {
    label: 'Tipo de documento',
    value: null,
    color: '#9EA0A4',
    fontFamily:'Montserrat-SemiBold'
  };

  /* FUNCTIONS */

  const InputTextRead=(text,type)=>{

    setUserData({...userData,[type]:text});

  }

  const InputSelectRead=(value,type)=>{

    if(value === null){
      setUserData({...userData,[type]:""});
    }else{
      setUserData({...userData,[type]:value});
    }
    
  }

  const InputImageRead=()=>{

  }

  const register =()=>{
    
    

  }

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
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Email' onChangeText={(text)=>InputTextRead(text,'email')} leftIcon={
                    <Icon
                      name='email'
                      size={20}
                      color='#7E72D1'
              />}   
              />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Primer nombre' onChangeText={(text)=>InputTextRead(text,'first_name')} leftIcon={
                    <Icon
                      name='user'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
               />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Segundo nombre' onChangeText={(text)=>InputTextRead(text,'second_name')} leftIcon={
                    <Icon
                      name='user'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Primer apellido' onChangeText={(text)=>InputTextRead(text,'last_name')} leftIcon={
                    <Icon
                      name='user'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
              <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Segundo apellido' onChangeText={(text)=>InputTextRead(text,'second_last_name')} leftIcon={
                    <Icon
                      name='user'
                      type='font-awesome'
                      size={20}
                      color='#7E72D1'
                    />}  
                />
            </View>
            <View style={{width:'100%',maxWidth:500,marginBottom:20}}>
              <RNPickerSelect
                      style={pickerSelectStyles}
                      placeholder={placeholder_type }
                      onValueChange={(value) => InputSelectRead(value,"")}
                      items={[
                        { value: "CC", label: "CC" },
                        { value: "DI", label: "DI" },
                        { value: "CE", label: "CE" },
                        { value: "NIE", label: "NIE" }
                      ]}
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
              <TouchableOpacity style={styles.buttonIn} onPress={handleRegistrationSuccess}>
                <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Registrar</Text>
              </TouchableOpacity>
              <CustomModal visible={showModal} onClose={handleCloseModal} message="Registro exitoso!" iconName="check-circle"/>
            </View>
        </ScrollView>
      </LinearGradient>
    </View>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      fontFamily:'Montserrat-SemiBold',
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#9D91F4',
      borderRadius: 4,
      color: '#9EA0A4',
      paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
      fontSize: 16,
      fontFamily:'Montserrat-SemiBold',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: '#9D91F4',
      borderRadius: 8,
      color: '#9EA0A4',
      width:'100%',
      maxWidth:500,
      paddingRight: 30 // to ensure the text is never behind the icon
  }
});
