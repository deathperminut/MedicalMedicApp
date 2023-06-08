import { View, Text ,ImageBackground,ScrollView,Dimensions,TouchableOpacity,Modal, StyleSheet,Image} from 'react-native'
import React, { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import LogoMedicalComplete from '../../../../Shared/Icons/LogoMedicalComplete';
import styles from './SelectPatientStyle'
import Globalstyles from '../../../../Shared/Icons/GlobalStyles'
import RNPickerSelect from "react-native-picker-select";
import { styles_shadow } from '../../OurServices/OurServicesStyles';
import { AppContext } from '../../../../AppContext/Context';
import { GetName } from '../../../../services/Auth/Login/Login';
import { getAge } from '../../../../services/DateManagement/DateManagement';
import { getBeneficients } from '../../../../services/MainApp/Beneficient/Beneficient';
import CustomModal from '../../../../Shared/Alerts/Alert';
import LoadingScreen from '../../../../Shared/Alerts/Loader';

export default function SelectPatient(props) {
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

   /* PANTALLA */
   const windowHeight = Dimensions.get('window').height;
   const newHeight = windowHeight  - 100;

  /* FOR SELECT */
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  /* NAVIGATION */
  
  let {navigation}=props;

  /* APP CONTEXT */
  let {userData, setUserData, token, setToken,currentDate,setCurrentDate,listBeneficient,setListBeneficient,patient,setPatient} =React.useContext(AppContext);

  /* USE-EFFECT */

  React.useEffect(()=>{
    if(token){
        getData();
    }
  },[])

  /* FUNCTIONS */

  const getData=async()=>{
    
    setPreloader(true);
    let result=undefined;
    result= await getBeneficients(userData,token).catch((error)=>{
      
      console.log(error);
      setPreloader(false);
      handleError();
    })
    if(result){
      setPreloader(false);
      setListBeneficient(result.data);
    }
    
  }
  const getPatient=(user)=>{
    setPatient(user);
    navigation.navigate('NewServices')

  }

  return (
    <View style={styles.container}>
    {preloader ? 
        <LoadingScreen/>
        :
        <></>
    }
    <ImageBackground source={require('../../../../assets/Home/BG-Medical.png')} style={styles.imageBackground}></ImageBackground>
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
        <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginBottom:7}}>Paciente</Text>
        <Text style={{...Globalstyles.Semibold,...Globalstyles.text,...Globalstyles.gray,marginBottom:20}}>Selecciona si la cita es propia o para un beneficiario</Text>
        <ScrollView style={{width:'100%',marginBottom:5,maxWidth:470,maxHeight:'72.5%'}} showsVerticalScrollIndicator={false}>
          <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.navigate('NewServices')}>
                    <TouchableOpacity  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}} onPress={()=>getPatient(userData)}>
                       {userData?.genre.toLowerCase()==="masculino" ? 
                          <View style={{borderRadius:60,maxWidth:68,maxHeight:68,overflow:'hidden',marginRight:10}}>
                           <ImageBackground source={require('../../../../assets/Male-User.png')} style={styles.photo}></ImageBackground>
                          </View>
                          
                          :
                          <View style={{borderRadius:60,maxWidth:68,maxHeight:68,overflow:'hidden',marginRight:10}}>
                           <ImageBackground source={require('../../../../assets/Female-User.png')} style={styles.photo}></ImageBackground>
                          </View>
                       }
                      <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <View style={{alignItems:'center'}}>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:17,textAlign:'center'}}>{GetName(userData)}</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>{userData.identification_type+". "+userData.identification}</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
              </View>
              {listBeneficient.map((beneficient, index) => (
                <View key={index} style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <TouchableOpacity   style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}} onPress={()=>getPatient(beneficient)}>
                        {beneficient?.genre.toLowerCase()==="masculino" ? 
                            <View style={{borderRadius:60,maxWidth:68,maxHeight:68,overflow:'hidden',marginRight:10}}>
                             <ImageBackground source={require('../../../../assets/Male-User.png')} style={styles.photo}></ImageBackground>
                            </View>
                            
                            :
                            <View style={{borderRadius:60,maxWidth:68,maxHeight:68,overflow:'hidden',marginRight:10}}>
                             <ImageBackground source={require('../../../../assets/Female-User.png')} style={styles.photo}></ImageBackground>
                            </View>
                        }
                        <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                          <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:17,textAlign:'center'}}>{GetName(beneficient)}</Text>
                          <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>{beneficient.identification_type+'. '+beneficient.identification}</Text>
                        </View>
                        </View>
                      </TouchableOpacity>
                </View>
              ))}
         </View>
        </ScrollView>
        
      </LinearGradient>
      <CustomModal visible={showModal} onClose={()=>setShowModal(false)} message={message} iconName={iconName}></CustomModal>
    </View>
  </View>
  )
}