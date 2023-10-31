import { View, Text ,ImageBackground,ScrollView,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import styles from './HistoryDatesStyles'
import { styles_shadow } from '../OurServices/OurServicesStyles';
import { formatearFecha, formatearHora} from '../../../services/DateManagement/DateManagement';
import { GetName } from '../../../services/Auth/Login/Login';
import { AppContext } from '../../../AppContext/Context';
import LoadingScreen from '../../../Shared/Alerts/Loader';
import CustomModal from '../../../Shared/Alerts/Alert';
import * as Location from 'expo-location';
import { getMedicDates } from '../../../services/MainApp/HistoryDates/HistoryDates';
import { UpdateDate, Whatsapp_message_llegada_destino, Whatsapp_message_salida } from '../../../services/MainApp/NewService/NewServiceForm/NewServiceForm';


export default function HistoryDates(props) {
    /* NAVIGATE */
  let {navigation}=props

  /* EXPAND */
  const [expanded, setExpanded] = useState({});
  const [preloader,setPreloader] = React.useState(false);


  const handleExpand = (index) => {
    setExpanded({
      ...expanded,
      [index]: !expanded[index]
    });
  };

  
  /* MODAL */
  const [showModal, setShowModal] = React.useState(false);
  const [message,setMessage]= React.useState("");
  const [iconName,setIconName]=React.useState("");


  const handleError = () => {
    setMessage('Error al cargar historial de consultas');
    setIconName('error');
    setShowModal(true);
  };

  const handleError_2 = () => {
    setMessage('Error al aceptar cita');
    setIconName('error');
    setShowModal(true);
  };

  const handleError_3 = () => {
    setMessage('Debemos poder acceder a tu ubicación para aceptar la cita.');
    setIconName('error');
    setShowModal(true);
  };

  const handleAcceptError = () => {
    setMessage('Ya tienes una consulta aceptada');
    setIconName('error');
    setShowModal(true);
  };

  let [currentPosition, setCurrentPosition] = React.useState(null);

  React.useEffect(()=>{
    if(currentPosition=== null){
      requestLocationPermission();
    }
  },[])

  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return undefined
    } else {
      startUpdatingLocation();
    }
  };

  const startUpdatingLocation = async () => {
    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        distanceInterval: 0.5, // Actualiza la posición cada 10 metros
      },
      (location) => {
        const { latitude, longitude } = location?.coords;
        setCurrentPosition({ latitude, longitude });
      }
    );
  };


  /* APP CONTEXT */
  let {userData, token,currentDate,setCurrentDate,historyDates,setHistoryDates} =React.useContext(AppContext);

   React.useEffect(()=>{
     if(token){
       getData();
     }
   },[])

  // /* FUNCTIONS */


  const AcceptDate=(DateAccepted)=>{
    if(currentDate!==null){
      handleAcceptError();
    }else{
      UPDATE_DATE(DateAccepted)
    }
    

  }

   const getData=async()=>{
    
     setPreloader(true);
     let result=undefined;
     result= await getMedicDates(token).catch((error)=>{
       console.log(error.response);
       setPreloader(false);
       handleError();
     })
     if(result!==undefined){
      if(result.data.length!==0){
        setHistoryDates(result.data);
      }else{
        setHistoryDates(result.data);
      }

      //socket_control(userData,token);
      
      setPreloader(false);

     }
    
   }


  /* UPDATE DATE */

  const UPDATE_DATE=async(DATE)=>{

     // MIRAMOS SI YA ACEPTO LOS PERMISOS DE UBICACIÓN
     let ubication = requestLocationPermission()

      setPreloader(true);
      let result=undefined;
      result=await UpdateDate(DATE,token).catch((error)=>{
        console.log(error);
        handleError_2();
        setPreloader(false);
      })
      if (result!==undefined){
        setPreloader(false);
        // ENVIAMOS UBICACIÓN ACTUAL DEL MÉDICO
        console.log("RESULTADOS APP: ",currentPosition);
        Whatsapp_message_salida(result.data.cellphone_number,currentPosition?.latitude,currentPosition?.longitude).then((data)=>{
          console.log("ENVIADO CON EXITO",data);
        }).catch((error)=>{
          console.log("ERROR AL ENVIAR",error);
        });
        setCurrentDate(result.data);

        navigation.navigate('Drawer');
      }

     

  }


  return (
    <>
    {preloader ? 
      <LoadingScreen/>
      :
      <></>
      }
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Home/BG-Particular.png')} style={styles.imageBackground}></ImageBackground>
      <View style={styles.LobbyContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.navBar}>
            <TouchableOpacity>
              <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>{
                navigation.navigate('Drawer');
              }}></Icon>
            </TouchableOpacity>
            <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
          </View>
          <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>{GetName(userData)}</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>{userData?.coverage_city} | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{userData.address}</Text></Text>
          <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:5}}>
            <View style={{width:14,height:14,backgroundColor:'#BDFC97', borderRadius:10 ,marginRight:10}}></View>
            <Text style={{...Globalstyles.bold,color:'#BDFC97',marginRight:10}}>Citas asignadas</Text>
            <View style={{minWidth:20,minHeight:20,backgroundColor:'#867BD8', borderRadius:2 ,marginLeft:1,alignItems:'center',justifyContent:'center',padding:5}}>
              <Text style={{...Globalstyles.Medium,fontSize:10,color:'#FFFF'}}>{historyDates.length}</Text>
            </View>
            <Text style={{...Globalstyles.BlackPurple,...Globalstyles.bold,marginLeft:10,color:'#FFFF'}}>{formatearFecha(new Date())}</Text>
          </View>
        </View>
        <LinearGradient colors={['#FFFFFF', '#B2ACDC91']} style={{...styles.FormContainer,alignItems:'center'}}>
          {historyDates.length===0 ?
          <Text style={{...Globalstyles.Medium,...Globalstyles.gray,marginTop:'50%'}}>No se han cargado citas para hoy</Text>
          :
          
          <ScrollView style={{width:'100%',marginBottom:5,maxWidth:470,maxHeight:'100%'}} showsVerticalScrollIndicator={false}>
            <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
              <Text style={{...Globalstyles.Medium,...Globalstyles.gray}}>{}</Text>
              {historyDates.map((faq, index) => (
              <View style={{width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={index}>
                <View  style={{flexDirection:'column', marginBottom:5,width:'90%',minHeight:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:5,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                  <TouchableOpacity style={{flexDirection:'row',width:'100%',height:90,padding:10,alignItems:'flex-start',justifyContent:'center'}} onPress={() => handleExpand(index)}>
                      {faq?.genre?.toLowerCase()==="masculino" ? 
                        <View style={{borderRadius:60,maxWidth:70,maxHeight:70,overflow:'hidden'}}>
                          <ImageBackground source={require('../../../assets/Male-User.png')} style={styles.photo}></ImageBackground>
                        </View>
                        :
                        <View style={{borderRadius:60,maxWidth:70,maxHeight:70,overflow:'hidden'}}>
                          <ImageBackground source={require('../../../assets/Female-User.png')} style={styles.photo}></ImageBackground>
                        </View>
                      }
                    <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start',marginLeft:20}}>
                    <View>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon
                          name='calendar'
                          type='font-awesome'
                          color='#FFA500'
                          size={14}
                          style={{marginRight:10}}
                        />
                        <Text style={{...Globalstyles.BlackPurple,...Globalstyles.bold}}>{formatearHora(faq.datetime_start) + ' - ' + formatearHora(faq.datetime_end)}</Text>
                      </View>
                      <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:13,textAlign:'center'}}>{GetName(faq)}</Text>
                      <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text,textAlign:'center'}}>{faq.identification_type + ' ' +faq.identification}</Text>
                    </View>
                    </View>
                  </TouchableOpacity>
                  {expanded[index] && (
                    <>
                      <View style={{width:'100%',display:'flex',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>AcceptDate(faq)} style={{padding:5,alignItems:'center',flexDirection:'row',width:'50%',maxWidth:500,height:30,borderColor:'#1AE494',borderWidth:2,borderRadius: 20, marginBottom:20,justifyContent:'center',marginTop:20}}>
                          <Text style={{...Globalstyles.Purple,...Globalstyles.bold,fontSize:12}}>Aceptar</Text>  
                        </TouchableOpacity>
                      </View>
                    </>
                        )}
                </View>
              </View>
              ))}
            </View>
          </ScrollView>
          }
          
        </LinearGradient>
      </View>
      <CustomModal visible={showModal} onClose={()=>setShowModal(false)} message={message} iconName={iconName}></CustomModal>
    </View>
    </>
    
  )
}