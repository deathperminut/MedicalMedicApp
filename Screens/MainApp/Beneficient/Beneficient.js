import { View, Text ,ImageBackground,Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import styles from './BeneficientStyles'
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import { styles_shadow } from '../OurServices/OurServicesStyles';
import { AppContext } from '../../../AppContext/Context';
import { GetName, GetName_Beneficient } from '../../../services/Auth/Login/Login';
import { getAge } from '../../../services/DateManagement/DateManagement';
import LoadingScreen from '../../../Shared/Alerts/Loader';
import CustomModal from '../../../Shared/Alerts/Alert';
import { getBeneficients } from '../../../services/MainApp/Beneficient/Beneficient';
import { styles_shadow2 } from '../OurServices/OurServicesStyles';
import AlertComponent from '../../../Shared/Icons/AlertComponent';
import { stylesNew } from '../OurServices/OurServicesStyles';


export default function Beneficient(props) {

  /* APP CONTEXT */
  let {listNotifications,setListNotifications,userData, setUserData, token, setToken,currentDate,setCurrentDate,listBeneficient,setListBeneficient} =React.useContext(AppContext);
  
  /* NAVIGATE */
  let {navigation}=props

  /* MODAL */
  const [showModal, setShowModal] = React.useState(false);
  const [message,setMessage]= React.useState("");
  const [iconName,setIconName]=React.useState("");
  const [preloader,setPreloader] = React.useState(false);

  const handleSuccess = () => {
    setMessage('Login exitoso');
    setIconName('check-circle');
    setShowModal(true);
  };

  const handleError = () => {
    setMessage('Error comprueba los campos');
    setIconName('error');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


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
            <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
          </View>
          <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>{GetName(userData)}</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{getAge(userData?.date_birth)+" Años"}</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>{userData?.coverage_city} | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{userData.address}</Text></Text>
        </View>
        <LinearGradient colors={['#FFFFFF', '#695F9766']} style={{...styles.FormContainer,alignItems:'center'}}>
          <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginBottom:20}}>Notificaciones</Text>
          <ScrollView style={{width:'100%',marginBottom:0,maxWidth:470,maxHeight:'160%',height:'140%'}} showsVerticalScrollIndicator={false}>
            <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
                <View style={{width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                  {listNotifications.map((notifications, index) => (
                     <TouchableOpacity key={index}  style={{flexDirection:'row',marginBottom:5,width:'90%',height:90,backgroundColor:'#F3F2F8',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:'20%',height:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'transparent'}}>
                          <AlertComponent style={{width:25,height:25}}></AlertComponent>
                        </View>
                        <View style={{width:'80%',height:'100%',alignItems:'flex-start',justifyContent:'center',backgroundColor:'transparent'}}>
                          <View style={{alignItems:'flex-start',justifyContent:'center',flex:1,groundColor:'transparent',}}>
                            <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:15,textAlign:'left',color:'#414D55'}}>{'Mantenimiento preventivo'}</Text>
                            <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text,flexDirection:'row',color:'black',marginBottom:2}}>
                               <Text style={{color:'#414D55',fontSize:12}}>Dias restantes: </Text> 
                               <View>
                                <Text style={{backgroundColor:'#F96767',borderRadius:20,padding:2,paddingLeft:4,paddingRight:4,position:'relative',top:5,fontSize:10,color:'white'}}>20</Text>
                               </View>
                             </Text>
                             <Text style={{...Globalstyles.text,color:'#414D55'}}>Item: <Text style={{padding:2,paddingLeft:4,paddingRight:4,position:'relative',top:5,fontSize:12,...Globalstyles.gray}}>Tasa de lixiviados</Text></Text>
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