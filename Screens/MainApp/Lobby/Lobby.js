import { View, Text ,ImageBackground,Image,Dimensions,FlatList,ScrollView,TouchableOpacity,useWindowDimensions } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import { Linking } from 'react-native';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import ContactIcon from '../../../Shared/Icons/ContactIcon';
import QuestionIcon from '../../../Shared/Icons/QuestionIcon';
import styles from './LobbyStyle';
import Carusel from '../Carusel/Carusel';
import VerticalStepIndicator from './StepByStep';

const openWhatsApp = () => {
  Linking.openURL('whatsapp://send?text=Hola!&phone=+573222423267');
}


/* DATA */

const ServicesData=[
  {

    image:'../../../assets/Home/Tarjeta-Historial.png',
    id:'1',
    text_1:'Historial',
    text_2:'citas',
    text_3:'',
    navigate:'HistoryDates'

  },
  {
    image:'../../../assets/Home/Tarjeta-Reportar.png',
    id:'2',
    text_1:'Reportar',
    text_2:'Estado del paciente o novedades',
    text_3:'',
    navigate:'Reports'

  },
  {
    image:'../../../assets/Home//Tarjeta-Servicios.png',
    id:'3',
    text_1:'Nuestros servicios',
    text_2:'portafolio',
    navigate:'OurServices' 
  },
  {
    image:'../../../assets/Home/Tarjeta-Solicitar.png',
    id:'4',
    text_1:'Solicitar',
    text_2:'Pide una cita', 
    navigate:'Swiper'
  },

]




export default function Lobby(props) {

  /* NAVIGATE */
  let {navigation}=props.props
  const windowHeight = Dimensions.get('window').height;

   
  return (
    
        <View style={styles.container}>
        <ImageBackground source={require('../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')} style={styles.imageBackground}>
        </ImageBackground>
        <ScrollView showsVerticalScrollIndicator={false} style={{height:'100%',height:'100%',position:'absolute'}}>
            <View style={styles.LobbyContainer}>
              <View style={styles.iconContainer}>
                <View style={styles.navBar}>
                  <ImageBackground source={require('../../../assets/Home/Foto-Usuario.png')} style={styles.photo}></ImageBackground>
                  <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
                </View>
                <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>Alejandro Soto</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>70 años</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>Manizales | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>Clle 98 #35-37 la enea</Text></Text>
              </View>
              <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={[styles.FormContainer, { minHeight: windowHeight - 250 }]}>
                
                <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginLeft:30}}>Cita</Text>
                <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                  <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <View  style={{flexDirection:'column', marginBottom:5,width:'100%',height:290,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'flex-start'}}>
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center'}}>
                          <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                            <Image source={require('../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                          </View>
                          <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                          <View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                              <Icon
                                name='calendar'
                                type='font-awesome'
                                color='#FFA500'
                                size={14}
                                style={{marginRight:10}}
                              />
                              <Text style={{...Globalstyles.BlackPurple,...Globalstyles.bold}}>28 de Julio de 2022</Text>
                            </View>
                            <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:20}}>Dr Pedro Pablo Ruiz</Text>
                            <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>8:00 Am - 9:00 Am</Text>
                          </View>
                          </View>

                          </View>
                          <VerticalStepIndicator></VerticalStepIndicator>
                        </View>
                        
                  </View>
                </View>
                <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginLeft:30}}>Servicios</Text>

                <Carusel data={ServicesData}  props={props.props}></Carusel>
                <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginLeft:30}}>Ayuda</Text>
                <ScrollView horizontal={true} style={{width:'100%',height:240,paddingTop:30}} showsHorizontalScrollIndicator={false}>
                  <View style={{width:"100%",flexDirection:'row'}}>
                    <View style={{maxHeight:100,flexDirection:'row'}}>
                      <TouchableOpacity style={styles.options} onPress={()=>openWhatsApp()}>
                        <View style={{width:30,height:30,borderRadius:30,backgroundColor:'#00000029',alignItems:'center',justifyContent:'center'}}>
                            <ContactIcon style={{width:15,height:15}}></ContactIcon>
                        </View>
                        <Text style={{...Globalstyles.bold,...Globalstyles.SubTitle_2,...Globalstyles.Purple}}>Contacto</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.options}>
                        <View style={{width:30,height:30,borderRadius:30,backgroundColor:'#00000029',alignItems:'center',justifyContent:'center'}}>
                            <QuestionIcon style={{width:15,height:15}}></QuestionIcon>
                        </View>
                        <Text style={{...Globalstyles.bold,...Globalstyles.SubTitle_2,...Globalstyles.Purple}}>Preguntas</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple}}>Frecuentes</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.options} onPress={()=>{navigation.navigate('RegisterBeneficient')}}>
                        <View style={{width:30,height:30,borderRadius:30,backgroundColor:'#00000029',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{textAlign:'center',...Globalstyles.Purple,textAlignVertical:'center'}}>+</Text>
                        </View>
                        <Text style={{...Globalstyles.bold,...Globalstyles.SubTitle_2,...Globalstyles.Purple}}>Beneficiarios</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </LinearGradient>
            </View>
          </ScrollView>

        </View>

      
    
  )
}
