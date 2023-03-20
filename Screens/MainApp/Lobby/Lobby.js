import { View, Text ,ImageBackground,Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import ContactIcon from '../../../Shared/Icons/ContactIcon';
import QuestionIcon from '../../../Shared/Icons/QuestionIcon';
import styles from './LobbyStyle';


export default function Lobby(props) {

  /* NAVIGATE */
  let {navigation}=props.props


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')} style={styles.imageBackground}></ImageBackground>
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
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={styles.FormContainer}>
          <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple}}>Servicios</Text>
          <View style={{...styles.PointersContainer}}>
              <View style={styles.Pointer_1}></View>
              <View style={styles.Pointer_2}></View>
              <View style={styles.Pointer_3}></View>
          </View>
          <ScrollView horizontal={true} style={{width:'100%',maxHeight:220}} showsHorizontalScrollIndicator={false}>
            <View style={{width:"100%",flexDirection:'row'}}>
              <TouchableOpacity style={{maxHeight:200}}>
                <Image style={{margin:10}}
                  source={require('../../../assets/Home/Tarjeta-Historial.png')}  
                ></Image>
                <View style={{position:'absolute',padding:20,paddingTop:80}}>
                  
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.white}}>Historial</Text>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.white}}>de citas</Text>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.white,position:'absolute',top:160,left:55}}>Ver +</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{maxHeight:200}}>
                <Image style={{margin:10}}
                  source={require('../../../assets/Home/Tarjeta-Reportar.png')}  
                ></Image>
                <View style={{position:'absolute',padding:20,paddingTop:80}}>
                  <Text style={{...Globalstyles.bold,...Globalstyles.white}}>Reportar</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.white,...Globalstyles.text}}>Estado del paciente o novedades</Text>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.white,position:'absolute',top:160,left:55}}>Ver +</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{maxHeight:200}}>
                <Image style={{margin:10}}
                  source={require('../../../assets/Home/Tarjeta-Servicios.png')}  
                ></Image>
                <View style={{position:'absolute',padding:20,paddingTop:80}}>
                  <Text style={{...Globalstyles.bold,...Globalstyles.green}}>Nuestros</Text>
                  <Text style={{...Globalstyles.bold,...Globalstyles.green}}>servicios</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.white,...Globalstyles.text}}>Portafolio</Text>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.green,position:'absolute',top:160,left:55}}>Ver +</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{maxHeight:200}}  onPress={()=>{navigation.navigate('MedicalHomeCare')}}>
                <Image style={{margin:10}}
                  source={require('../../../assets/Home/Tarjeta-Solicitar.png')}  
                ></Image>
                <View style={{position:'absolute',padding:20,paddingTop:80}}>
                  <Text style={{...Globalstyles.bold,...Globalstyles.green,marginBottom:4}}>Solicitar</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.white,...Globalstyles.text}}>Pide una visita médica en casa</Text>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.green,position:'absolute',top:160,left:55}}>Ver +</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          
          <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple}}>Ayuda</Text>
          <View style={{...styles.PointersContainer,...{'marginBottom':10}}}>
              <View style={styles.Pointer_1}></View>
              <View style={styles.Pointer_2}></View>
              <View style={styles.Pointer_3}></View>
          </View>
          <ScrollView horizontal={true} style={{width:'100%',maxHeight:120}} showsHorizontalScrollIndicator={false}>
            <View style={{width:"100%",flexDirection:'row'}}>
              <View style={{maxHeight:100,flexDirection:'row'}}>
                <TouchableOpacity style={styles.options}>
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
    </View>
  )
}
