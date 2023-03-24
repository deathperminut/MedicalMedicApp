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
          <View style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height:120,backgroundColor:'#F1EEFE',borderRadius: 14, marginBottom:16}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                    
                      <ConsultaDomestica style={{width:30,height:30}}></ConsultaDomestica>
                      <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:18,marginLeft:20}}>Hospitalización en Casa</Text>
                    
              </View>
              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10,marginTop:10,color:'#685CBF'}}>La atención domiciliaria constituye hoy una modalidad que permite solventar las dificultades derivadas de la sobreocupación hospitalaria y la cronicidad.</Text>
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height:120,backgroundColor:'#F1EEFE',borderRadius: 14, marginBottom:16}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <CuidadoAgudo style={{width:30,height:30}}></CuidadoAgudo> 
                      <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:18,marginLeft:20}}>Cuidado Agudo</Text>
                    
              </View>
              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10,marginTop:10,color:'#685CBF'}}>Esta atención se realizará a pacientes que, según concepto clínico, pueden continuar en su domicilio el tratamiento iniciado intrahospitalariamente.</Text>
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height:120,backgroundColor:'#F1EEFE',borderRadius: 14, marginBottom:16}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <CuidadoCronico style={{width:30,height:30}}></CuidadoCronico>
                      <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:18,marginLeft:20}}>Cuidado Crónico</Text>
              </View>
              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10,marginTop:10,color:'#685CBF'}}>Esta atención se realizará a pacientes crónicos de alto costo, garantizando con este servicio, la disminución de hospitalizaciones innecesarias y asistencia a urgencias.</Text>
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height:120,backgroundColor:'#F1EEFE',borderRadius: 14, marginBottom:16}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Orientacion style={{width:30,height:30}}></Orientacion>
                      <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:18,marginLeft:20}}>Orientación médica Videofónica</Text>
                    
              </View>
              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10,marginTop:10,color:'#685CBF'}}>Prestamos orientación médica telefónica a la hora que se necesite, los 7 días de la semana, las 24 horas del día a los 365 días del año.</Text>
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height:130,backgroundColor:'#F1EEFE',borderRadius: 14, marginBottom:16}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <ConsultaDomestica style={{width:30,height:30}}></ConsultaDomestica> 
                      <View>
                       <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:18,marginLeft:20}}>Consulta médica</Text>
                       <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:18,marginLeft:20}}>Domiciliaria</Text>
                      </View>
                      
                    
              </View>
              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10,marginTop:10,color:'#685CBF'}}>Realizará la respectiva valoración y establecerá las intervenciones a seguir para solucionar o mejorar el motivo de consulta por el cual fue solicitado, esta visita se podrá realizar en su hogar o sitio de trabajo.</Text>
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height:120,backgroundColor:'#F1EEFE',borderRadius: 14, marginBottom:16}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <TerapiaFisica style={{width:30,height:30}}></TerapiaFisica>
                      <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:18,marginLeft:20}}>Terapia Física</Text>
                    
              </View>
              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10,marginTop:10,color:'#685CBF'}}>Prestamos orientación médica telefónica a la hora que se necesite, los 7 días de la semana, las 24 horas del día a los 365 días del año.</Text>
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height:120,backgroundColor:'#F1EEFE',borderRadius: 14, marginBottom:16}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <TerapiaRespiratoria style={{width:30,height:30}}></TerapiaRespiratoria> 
                      <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:18,marginLeft:20}}>Terapia Respiratoria</Text>
                    
              </View>
              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10,marginTop:10,color:'#685CBF'}}>La atención domiciliaria constituye hoy una modalidad que permite solventar las dificultades derivadas de la sobreocupación hospitalaria y la cronicidad.</Text>
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height:120,backgroundColor:'#F1EEFE',borderRadius: 14, marginBottom:16}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <TerapiaOcupacional style={{width:30,height:30}}></TerapiaOcupacional>
                      <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:18,marginLeft:20}}>Terapia Ocupacional</Text>
              </View>
              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10,marginTop:10,color:'#685CBF'}}>La atención domiciliaria constituye hoy una modalidad que permite solventar las dificultades derivadas de la sobreocupación hospitalaria y la cronicidad.</Text>
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'column',width:'100%',maxWidth:500,height:120,backgroundColor:'#F1EEFE',borderRadius: 14, marginBottom:16}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                      <Fonoaudiologia style={{width:30,height:30}}></Fonoaudiologia> 
                      <Text style={{...Globalstyles.Purple,...Globalstyles.Medium,fontSize:18,marginLeft:20}}>Fonoaudiología</Text>
                    
              </View>
              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10,marginTop:10,color:'#685CBF'}}>La atención domiciliaria constituye hoy una modalidad que permite solventar las dificultades derivadas de la sobreocupación hospitalaria y la cronicidad.</Text>
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