import { View, Text ,ImageBackground,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import { Linking } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './NewServiceFormStyle';
import Globalstyles from '../../../../Shared/Icons/GlobalStyles';
import LogoMedicalComplete from '../../../../Shared/Icons/LogoMedicalComplete';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NewServiceForm() {


  const [selectedValue, setSelectedValue] = React.useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')} style={styles.imageBackground}></ImageBackground>
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
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={styles.FormContainer}>
          <Text style={{...Globalstyles.bold,...Globalstyles.Purple,fontSize:15,marginBottom:20}}>Seleccione <Text style={{...Globalstyles.Medium,...Globalstyles.Purple,fontSize:15}}>el tipo de servicio</Text></Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => setSelectedValue(value)}
            items={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ]}
            placeholder={{ label: 'Selecciona una opción', value: null }}
            value={selectedValue}
            Icon={() => (
              <Icon name="angle-down" size={25} color="#9D91F4" />
            )}
          />
        </LinearGradient>
      </View>
    </View>
  )
}

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    borderWidth: 4,
    borderColor: '#9D91F4',
    borderStyle: 'solid',
    color: 'black',
    backgroundColor: '#FFFFFF',
    hideIcon: true,
  },
  inputIOS: {
    borderWidth: 4,
    borderColor: '#9D91F4',
    borderStyle: 'solid',
    color: 'black',
    backgroundColor: '#FFFFFF',
    hideIcon: true,
  },
  pickerSelectStyles: {
    borderWidth: 5,
    borderColor: '#9D91F4',
  },
  iconContainer: {
    top: 14,
    right: 18,
  },
  // Agregar un estilo para el icono personalizado
  icon: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 5,
    borderTopColor: '#9D91F4',
    borderRightWidth: 5,
    borderRightColor: 'transparent',
    borderLeftWidth: 5,
    borderLeftColor: 'transparent',
    width: 0,
    height: 0,
    top: 20,
    right: 15,
    hideIcon: true,
  },
});
