import { View, Text ,ImageBackground,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Icon, Image } from 'react-native-elements';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import styles from './BeneficientStyles'
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import { styles_shadow } from '../OurServices/OurServicesStyles';
import { AppContext } from '../../../AppContext/Context';
import { GetName } from '../../../services/Auth/Login/Login';
import LoadingScreen from '../../../Shared/Alerts/Loader';
import CustomModal from '../../../Shared/Alerts/Alert';
import AlertComponent from '../../../Shared/Icons/AlertComponent';


export default function Beneficient(props) {
  /*
  APARTADO DE NOTIFICACIONES
  --------------------------------------
   EN LAS VARIABLES Notificacion_basic_medic
   y Notificacion_Maintenance_medic 
   TENEMOS CARGADAS DESDE EL LOBBY LAS NOTIFICACIONES DE INVENTARIO Y MANTENIMIENTO
   EN ESTE APARTADO SOLO VISUALIZAMOS UNA ALERTA COMO REFERENCIA.
  */

  /* APP CONTEXT */
  let {Notification_basic_medic,
    Notification_Maintenance_medic,userData} =React.useContext(AppContext);
  
  /* NAVIGATE */
  let {navigation}=props

  /* MODAL */
  const [showModal, setShowModal] = React.useState(false);
  const [message,setMessage]= React.useState("");
  const [iconName,setIconName]=React.useState("");
  const [preloader,setPreloader] = React.useState(false);



  /* FUNCTIONS */


  return (
    <View style={styles.container}>
      {preloader ? 
        <LoadingScreen/>
        :
        <></>
      }
      <ImageBackground source={require('../../../assets/Home/BG-Medical.png')} style={styles.imageBackground}></ImageBackground>
      <View style={styles.LobbyContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.navBar}>
            <TouchableOpacity>
              <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Drawer')}></Icon>
            </TouchableOpacity>
            {/*<LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>*/}
            <View style={{
              width: 160,
              height: 51,
              backgroundColor: '#FFF',
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center'
            }}>
              <Image
                style={{   
                  width: 120,
                  height: 38             
                }}
                source={require("../../../assets/Ingresar/logo_medical.png")}
              />
              </View>
          </View>
          <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2, marginTop: 50}}>{GetName(userData)}</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>{userData?.coverage_city} | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{userData.address}</Text></Text>
        </View>
        <LinearGradient colors={['#FFFFFF', '#695F9766']} style={{...styles.FormContainer,alignItems:'center'}}>
          <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginBottom:20}}>Notificaciones</Text>
          <ScrollView style={{width:'100%',marginBottom:0,maxWidth:470,maxHeight:'160%',height:'140%'}} showsVerticalScrollIndicator={false}>
            <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
                <View style={{width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                {Notification_basic_medic.map((notification, index) => (
                     <TouchableOpacity key={index}  style={{flexDirection:'row',marginBottom:5,width:'90%',height:90,backgroundColor:'#F3F2F8',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:'20%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'transparent'}}>
                          <AlertComponent style={{width:25,height:25}}></AlertComponent>
                        </View>
                        <View style={{width:'80%',height:'100%',alignItems:'flex-start',justifyContent:'center',backgroundColor:'transparent'}}>
                          <View style={{alignItems:'flex-start',justifyContent:'center',flex:1,groundColor:'transparent',}}>
                            <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:15,textAlign:'left',color:'#414D55'}}>{'Alerta inventario personal'}</Text>
                            <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text,flexDirection:'row',color:'black',marginBottom:2}}>
                               <Text style={{color:'#414D55',fontSize:12}}>{notification.info}</Text> 
                             </Text>
                          </View>
                        </View>
                     </TouchableOpacity>
                  ))}
                  {Notification_Maintenance_medic.map((notifications, index) => (
                     <TouchableOpacity key={index}  style={{flexDirection:'row',marginBottom:5,width:'90%',height:90,backgroundColor:'#F3F2F8',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:'20%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'transparent'}}>
                          <AlertComponent style={{width:25,height:25}}></AlertComponent>
                        </View>
                        <View style={{width:'80%',height:'100%',alignItems:'flex-start',justifyContent:'center',backgroundColor:'transparent'}}>
                          <View style={{alignItems:'flex-start',justifyContent:'center',flex:1,groundColor:'transparent',}}>
                            <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:15,textAlign:'left',color:'#414D55'}}>{notifications?.maintenance_type}</Text>
                            <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text,flexDirection:'row',color:'black',marginBottom:2}}>
                               <Text style={{color:'#414D55',fontSize:12}}>Dias restantes: </Text> 
                               <View>
                                <Text style={{backgroundColor:'#F96767',borderRadius:20,padding:2,paddingLeft:4,paddingRight:4,position:'relative',top:5,fontSize:10,color:'white',minWidth:20,minHeight:20,textAlign:'center'}}>{notifications?.time_left}</Text>
                               </View>
                             </Text>
                             <Text style={{...Globalstyles.text,color:'#414D55'}}>Item: <Text style={{padding:2,paddingLeft:4,paddingRight:4,position:'relative',top:5,fontSize:12,...Globalstyles.gray}}>{notifications?.device_name}</Text></Text>
                          </View>
                        </View>
                     </TouchableOpacity>
                  ))}
                </View>
            </View>
          </ScrollView>
          
        </LinearGradient>
      </View>
      <CustomModal visible={showModal} onClose={()=>setShowModal(false)} message={message} iconName={iconName}></CustomModal>
    </View>
  )
}