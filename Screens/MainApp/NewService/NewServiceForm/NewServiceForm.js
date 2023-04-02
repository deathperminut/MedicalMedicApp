import { View, Text,ImageBackground,ScrollView,TouchableOpacity ,TextInput,StyleSheet,Dimensions } from 'react-native'
import React, { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import { Linking } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './NewServiceFormStyle';
import Globalstyles from '../../../../Shared/Icons/GlobalStyles';
import LogoMedicalComplete from '../../../../Shared/Icons/LogoMedicalComplete';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NewServiceForm(props) {

  /* PANTALLA */
  const windowHeight = Dimensions.get('window').height;
  const newHeight = windowHeight  - 250;

  /* NAVIGATION */

  let {navigation}=props

  /* SELECTS */
  const placeholder = {
    label: 'Seleccione el tipo de servicio',
    value: null,
    color: '#9EA0A4',
    fontFamily:'Montserrat-SemiBold'
  };

  const placeholder_type = {
    label: 'Seleccione el tipo de cliente',
    value: null,
    color: '#9EA0A4',
    fontFamily:'Montserrat-SemiBold'
  };

  const [texto, setTexto] = useState('');

  const handleTexto = (texto) => {
    setTexto(texto);
  };


  const [selectedValue, setSelectedValue] = React.useState('');

  return (
    <View style={styles.container}>
    <ImageBackground source={require('../../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')} style={styles.imageBackground}>
    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
    <View style={styles.LobbyContainer}>
      <View style={styles.iconContainer}>
        <View style={styles.navBar}>
          <ImageBackground source={require('../../../../assets/Home/Foto-Usuario.png')} style={styles.photo}></ImageBackground>
          <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
        </View>
        <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>Alejandro Soto</Text>
        <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>70 años</Text>
        <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>Manizales | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>Clle 98 #35-37 la enea</Text></Text>
      </View>
      <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,alignItems:'center',minHeight:newHeight}}>
        <Text style={{...Globalstyles.Semibold,...Globalstyles.Purple,fontSize:20,marginBottom:20}}>Solicitud del servicio</Text>
        <View style={{width:'100%',maxWidth:500,marginBottom:20}}>
          <RNPickerSelect
                  style={pickerSelectStyles}
                  placeholder={placeholder }
                  onValueChange={(value) => console.log(value)}
                  items={[
                      { label: "JavaScript", value: "JavaScript" },
                      { label: "TypeScript", value: "TypeScript" },
                      { label: "Python", value: "Python" },
                      { label: "Java", value: "Java" },
                      { label: "C++", value: "C++" },
                      { label: "C", value: "C" },
                  ]}
              />
        </View>
        <View style={{width:'100%',maxWidth:500,marginBottom:20}}>
          <RNPickerSelect
                  style={pickerSelectStyles}
                  placeholder={placeholder_type }
                  onValueChange={(value) => console.log(value)}
                  items={[
                      { label: "Medical Home Care", value: "Medical Home Care" },
                      { label: "Eps", value: "Eps" },
                      { label: "Particular", value: "Particular" },
                  ]}
              />
        </View>
        <TextInput
              style={{...styles.textArea,...Globalstyles.Medium,marginBottom:10,maxWidth:500,height:100}}
              value={texto}
              onChangeText={handleTexto}
              placeholder="Detalle su dirección"
              placeholderTextColor="#B0A8EA80"
              multiline
         />
        <TextInput
              style={{...styles.textArea,...Globalstyles.Medium,marginBottom:100,maxWidth:500}}
              value={texto}
              onChangeText={handleTexto}
              placeholder="Realize una descripción para el servicio"
              placeholderTextColor="#B0A8EA80"
              multiline
         />
         <TouchableOpacity style={styles.buttonIn} onPress={() => navigation.navigate('Drawer')}>
                    <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Actualizar</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttonDelete} onPress={() => navigation.navigate('Drawer')}>
                    <Text style={{...styles.buttonText,...Globalstyles.Medium,color:'#FF0057'}}>Cancelar</Text>
         </TouchableOpacity>
      </LinearGradient>
    </View>
    </ScrollView>
    
    </ImageBackground>
  </View>
  )
}



/* STILOS SELECT */
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
