import { View, Text,ImageBackground,ScrollView,TouchableOpacity ,TextInput,StyleSheet,Dimensions } from 'react-native'
import React, { useState } from 'react';
import styles from './OurServicesStyles';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import { Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import RNPickerSelect from "react-native-picker-select";
import ConsultaDomestica from '../../../Shared/Icons/OurServices/ConsultaDomestica';
import CuidadoAgudo from '../../../Shared/Icons/OurServices/CuidadoAgudo';
import CuidadoCronico from '../../../Shared/Icons/OurServices/CuidadoCronico';
import Fonoaudiologia from '../../../Shared/Icons/OurServices/Fonoaudiología';
import Hospitalizacion from '../../../Shared/Icons/OurServices/Hospitalizacion';
import Nutricion from '../../../Shared/Icons/OurServices/Nutricion';
import Orientacion from '../../../Shared/Icons/OurServices/OrientacionVideofónica';
import TerapiaFisica from '../../../Shared/Icons/OurServices/TerapiaFisica';
import TerapiaOcupacional from '../../../Shared/Icons/OurServices/TerapiaOcupacional';
import TerapiaRespiratoria from '../../../Shared/Icons/OurServices/TerapiaRespiratoria';
import { styles_shadow } from './OurServicesStyles';
import { CalendarList } from 'react-native-big-calendar';

export default function OurServices(props) {

  /* PANTALLA */
  const windowHeight = Dimensions.get('window').height;
  const newHeight = windowHeight  - 250;


  /* NAVIGATION */

  let {navigation}=props;

  /* SELECTS */
  const placeholder = {
    label: 'Seleccione una novedad',
    value: null,
    color: '#9EA0A4',
    fontFamily:'Montserrat-SemiBold'
  };

  const [texto, setTexto] = useState('');

  const handleTexto = (texto) => {
    setTexto(texto);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Home/BG-EPS.png')} style={styles.imageBackground}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
      <View style={styles.LobbyContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.navBar}>
            <TouchableOpacity>
              <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Drawer')}></Icon>
            </TouchableOpacity>
            <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
          </View>
          <Text style={{...Globalstyles.Medium,...Globalstyles.white,...Globalstyles.SubTitle_2,marginTop:40}}>Nuestros servicios</Text>
        </View>
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,alignItems:'center',minHeight:newHeight}}>
          <View style={{ flex: 1 }}>
            {/* <CalendarList
            selectedDate={new Date()}
            events={[
              {
                startDate: new Date(),
                endDate: new Date(),
                title: 'Evento de ejemplo',
              },
            ]}
            onEventPress={(event) => console.log('Evento seleccionado:', event)}
          /> */}
          </View>
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
        color: '#9D91F4',
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
        color: '#9D91F4',
        width:'100%',
        maxWidth:500,
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});