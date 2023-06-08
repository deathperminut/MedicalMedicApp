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
import * as Notifications from 'expo-notifications';
import VerticalStepIndicator from './StepByStep';
import { styles_shadow } from '../OurServices/OurServicesStyles';
import { AppContext } from '../../../AppContext/Context';
import { GetName } from '../../../services/Auth/Login/Login';
import { formatearFecha, formatearHora, getAge } from '../../../services/DateManagement/DateManagement';
import CustomModal from '../../../Shared/Alerts/Alert';
import CustomModalCancel from '../../../Shared/Alerts/YesNoAlert';
import LoadingScreen from '../../../Shared/Alerts/Loader';
import { UpdateDate_Arrive, UpdateDate_FINISH, cancelService, getActiveService, getActivities } from '../../../services/MainApp/NewService/NewServiceForm/NewServiceForm';
import AlertComponent from '../../../Shared/Icons/AlertComponent';
import { color } from 'react-native-reanimated';
import { getActiveDates, getNotifications, getNotificationsMaintenance } from '../../../services/MainApp/HistoryDates/HistoryDates';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import ConsultaDomestica from '../../../Shared/Icons/OurServices/ConsultaDomestica';

const openWhatsApp = () => {
  Linking.openURL('whatsapp://send?text=Hola!&phone=+573214411673');
}


/* DATA */

const ServicesData=[
  {

    image:'../../../assets/Home/Tarjeta-Historial.png',
    id:'1',
    text_1:'Citas',
    text_2:'Diarias',
    navigate:'HistoryDates'
  },
  
  {
    image:'../../../assets/Home//Tarjeta-Servicios.png',
    id:'3',
    text_1:'Turnos',
    text_2:'Diarios',
    navigate:'OurServices' 
  },
  //  {
  //    image:'../../../assets/Home/Tarjeta-Reportar.png',
  //    id:'2',
  //    text_1:'Guias',
  //    text_2:'Practicas',
  //    navigate:'Reports'
  // },
  {
    image:'../../../assets/Home/Tarjeta-Solicitar.png',
    id:'4',
    text_1:'Guias',
    text_2:'Practicas', 
    navigate:'FrecuentQuestions'
  },

]





export default function Lobby(props) {

  /* APP CONTEXT */
  var {Notification_basic_medic,setNotification_basic_medic,
    Notification_Maintenance_medic,setNotification_Maintenance_medic,activities,setActivities,userData, setUserData, token, setToken,currentDate,setCurrentDate,step,setStep,currentPosition, setCurrentPosition} =React.useContext(AppContext);

  /* NAVIGATE */
  var {navigation}=props.props
  const windowHeight = Dimensions.get('window').height;

  let [preloader,setPreloader]=React.useState(false);
 /* MODAL */
 var [showModal, setShowModal] = React.useState(false);
 var [showModalCancel, setShowModalCancel] = React.useState(false);
 var [message,setMessage]= React.useState("");
 var [iconName,setIconName]=React.useState("");


 const handleSuccess = () => {
   setMessage('Acción completada con exito');
   setIconName('check-circle');
   setShowModal(true);
 };
 const handleCancelWeb = (date) => {
  setMessage("Cita cancelada por el siguiente motivo: "+date.reason);
  setIconName('error');
  setShowModal(true);
};

 const handleError = () => {
   setMessage('Error al completar la acción');
   setIconName('error');
   setShowModal(true);
 };

const handleCancel = () => {
  setMessage('Da un motivo para cancelación');
  setIconName('error');
  setShowModalCancel(true);
};

const handleArrive = () => {
  setMessage('Llegada registrada correctamente');
  setIconName('check-circle');
  setShowModal(true);
};

const handleFinish = () => {
  setMessage('Cita finalizada correctamente');
  setIconName('check-circle');
  setShowModal(true);
};

 const handleInfo = () => {
   setMessage('Solo es posible cancelar mientras no haya sido agendada, en caso distinto comuniquese con la central, en el apartado de contacto.');
   setIconName('error');
   setShowModal(true);
 };

 const handleCloseModal = () => {
   setShowModal(false);
 };
 

  /* NEW SERVICE LOGIC */

  React.useEffect(()=>{
    if(token && currentDate===null && activities.length!==0){
      if(currentPosition===null){
        requestLocationPermission();
      }else{
        getData();
      }
    }
  },[userData,activities])


  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permiso de ubicación denegado');
    } else {
      getData();
      //getCurrentLocation();
      startUpdatingLocation();
    }
  };

  const getCurrentLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      console.log(latitude, longitude)
      setCurrentPosition({ latitude, longitude });
      getData();
      //startUpdatingLocation();
    } catch (error) {
      console.log(error);
    }
  };

  //setInterval(getCurrentLocation, 10000);

  const getData=async()=>{
    setPreloader(true);
    let result=undefined
    result= await getActiveDates(token).catch((error)=>{
      console.log(error);
      handleError();
      setPreloader(false);
    })
    if (result!==undefined){

      if(result.data.name){
        let DateActive=result.data;
        
        setCurrentDate(DateActive);
        
      }
      
      setPreloader(false);
       // NOS SUSCRIBIMOS AL SOCKET
       //getNotificationPermission();
      // registerForPushNotificationsAsync(userData).then((token) => {
      //   // NOS SUSCRIBIMOS AL SOCKET
      // });
    }


    
  }

  React.useEffect(()=>{
    if(token){
      GetActivities();
      GetNotifications();
      GetNotificationsMaintenance();
    }
    
  },[])
  

  
  const GetNotifications=async()=>{
   
    setPreloader(true);
    let result=undefined;
    result=await getNotifications(token).catch((error)=>{
     console.log("error",error);
     handleError();
     setPreloader(false);
    })
  
    if (result!==undefined){
      if (Object.keys(result.data).length === 0) {
        console.log('El objeto está vacío');
      } else {
        setNotification_basic_medic([{info:"Debes acercate al almacén para recargar inventario básico"}])
      }
    }
  }

  const GetNotificationsMaintenance=async()=>{
   
    setPreloader(true);
    let result=undefined;
    result=await getNotificationsMaintenance(token).catch((error)=>{
     console.log("error",error);
     handleError();
     setPreloader(false);
    })
    if (result!==undefined){
      setNotification_Maintenance_medic(result.data);
      setPreloader(false);
    }
  }

  const GetActivities=async()=>{
   
    setPreloader(true);
    let result=undefined;
    result=await getActivities(token).catch((error)=>{
     console.log("error",error);
     handleError();
     setPreloader(false);
    })
  
    if (result!==undefined){
     let ACTIVITIES=result['data'].map(obj => ({
      value: obj.id,
      label: obj.name,
    }))
    setActivities(ACTIVITIES);
    setPreloader(false);
    }
  }

  const GetActividad=(ActivityId)=>{
   let FilterArray = activities.filter((obj)=>obj.value.toString() === ActivityId.toString());

   return FilterArray[0].label

  }

  const registerForPushNotificationsAsync = async () => {

    let token;

    // Verificar los permisos de notificación
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      // Si los permisos no están otorgados, solicitarlos
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.log('Permisos de notificación denegados');
      return;
    }

    // Obtener el token de notificación
    try {
      token = (await Notifications.getExpoPushTokenAsync({ projectId:'4398c9a5-330e-49bc-ab1b-913a11feac3c'})).data;
      console.log('Token de notificación:', token);
    } catch (error) {
      console.log('Error al obtener el token de notificación:', error);
    }

    return token;
  };


  const showNotification = (message,Token) => {
    console.log("ENVIANDO NOTIFICACIÓN: ",Token);
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Nuevo mensaje',
        body: message,
      },
      trigger: null,
      to:Token,
    });
  };

  const UPDATE_DATE=async()=>{

    setPreloader(true);
    let result=undefined;
    result=await UpdateDate_Arrive(currentDate,token).catch((error)=>{
     console.log(error);
     handleError();
     setPreloader(false);
    })
    if (result!==undefined){
      setPreloader(false);
      handleArrive();
      console.log("Cita actualizada: ",result.data);
      setCurrentDate(result.data);
    }
 }

 const startUpdatingLocation = async () => {
  Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      distanceInterval: 1, // Actualiza la posición cada 10 metros
    },
    (location) => {
      const { latitude, longitude } = location.coords;
      console.log("DATOS DE UBICACIÓN: ",{latitude,longitude})
      setCurrentPosition({ latitude, longitude });
    }
  );
};

 const UPDATE_DATE_FINISH=async()=>{

  setPreloader(true);
  let result=undefined;
  result=await UpdateDate_FINISH(currentDate,token).catch((error)=>{
   console.log(error);
   handleError();
   setPreloader(false);
  })
  if (result!==undefined){
    setPreloader(false);
    handleFinish();
    console.log("Cita actualizada: ",result.data);
    setCurrentDate(null);
  }
}



  let [reason,setReason]=React.useState("");

  const readInputReason=(Text)=>{

    setReason(Text);

  }

  /* OBTENEMOS LAS COORDENADAS */
  const [destinationCoordinates, setDestinationCoordinates] = React.useState(null);
  const getCoordinates = async (address,neighborhood,city, country) => {
    try {
      //let address = address.split(' ').join('+');
      let newAddress = address.replace('#', 'No.');
      newAddress += ', ' + city + ', '+country;
      console.log(newAddress);
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${newAddress}&key=AIzaSyCw4GK9llNdu3RvbmsW25xp1P3b8WghL6w`
      try {
        const response = await axios.get(url);
        const { results } = response.data;
        
        if (results.length > 0) {
          const firstResult = results[0];
          const { lat, lng } = firstResult.geometry.location;
          
          console.log('Latitud:', lat);
          console.log('Longitud:', lng);
          setDestinationCoordinates({ lat: lat, lng: lng });
        } else {
          console.log('No se encontraron resultados para la dirección proporcionada.');
        }
      } catch (error) {
        console.error('Error al llamar a la API de Google:', error);
      }

    } catch (error) {
        console.log(error);
    }
  };

  React.useEffect(()=>{

    console.log("Datos cita: ",currentDate)
    if(currentDate!==null){
      if(currentDate.name!==undefined){
        getCoordinates(currentDate?.address,currentDate?.city,'Colombia');
      }
    }
    
    
  },[currentDate])

   
  return (
    
        <View style={styles.container}>
        {preloader ? 
          <LoadingScreen/>
          :
          <></>
        }
        <ImageBackground source={require('../../../assets/Home/BG-Particular.png')} style={styles.imageBackground}>
        </ImageBackground>
        <ScrollView showsVerticalScrollIndicator={false} style={{height:'100%',height:'100%',position:'absolute'}}>
            <View style={styles.LobbyContainer}>
              <View style={styles.iconContainer}>
                <View style={styles.navBar}>
                  <View style={{borderRadius:60,maxWidth:70,maxHeight:70,overflow:'hidden'}}>
                    <Image source={{uri:userData?.photo}} style={{resizeMode:'cover',width:70,height:70}}></Image>
                  </View>
                  <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
                </View>
                <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>{GetName(userData)}</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{getAge(userData?.date_birth)+" Años"}</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>{userData?.coverage_city} | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{userData.address}</Text></Text>
                {currentDate!==null ? 
                <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:5}}>
                <View style={{width:14,height:14,backgroundColor:'#BDFC97', borderRadius:10 ,marginRight:10}}></View>
                  <Text style={{...Globalstyles.bold,color:'#BDFC97',marginRight:10}}>Citas activa</Text>
                </View>
                :
                <></>
                }
                
              </View>
              <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={[styles.FormContainer, { minHeight: windowHeight - 200 }]}>
                {currentDate!== null ? 
                <>
                <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginLeft:30,marginBottom:10}}>Cita Aceptada</Text>
                <View style={{width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                              {currentDate?.genre?.toLowerCase()==="masculino" ? 
                                <View style={{borderRadius:60,maxWidth:70,maxHeight:70,overflow:'hidden',marginRight:15}}>
                                  <ImageBackground source={require('../../../assets/Male-User.png')} style={styles.photo}></ImageBackground>
                                </View>
                                :
                                <View style={{borderRadius:60,maxWidth:70,maxHeight:70,overflow:'hidden',marginRight:15}}>
                                  <ImageBackground source={require('../../../assets/Female-User.png')} style={styles.photo}></ImageBackground>
                                </View>
                              }
                              <View style={{maxWidth:250,alignItems:'center',justifyContent:'center',backgroundColor:'#FFFFFF'}}>
                                <View style={{width:'100%'}}>
                                  <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'center'}}>
                                    <Icon
                                      name='calendar'
                                      type='font-awesome'
                                      color='#FFA500'
                                      size={14}
                                      style={{marginRight:10}}
                                    />
                                    <Text style={{...Globalstyles.BlackPurple,...Globalstyles.bold}}>{formatearHora(currentDate?.datetime_start) + ' - ' + formatearHora(currentDate?.datetime_end)}</Text>
                                  </View>
                                  <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:13,textAlign:'center'}}>{GetName(currentDate)}</Text>
                                  <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text,textAlign:'center'}}>{currentDate.identification_type + ' ' +currentDate.identification}</Text>
                                </View>
                              </View>
                          </View>
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,minHeight:50,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>{GetActividad(currentDate?.activity)}</Text>
                          </View>
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,height:50,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{width:120,...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:13,textAlign:'center'}}>{'Autorización'}</Text>
                                  <View style={{borderColor:'#FF0057',borderWidth:1,borderRadius:20, padding:5,justifyContent:'center',marginLeft:20,minWidth:200}}>
                                    <Text style={{...Globalstyles.Medium,...Globalstyles.gray,fontSize:10,textAlign:'center'}}>{"#"+currentDate.authorization_id}</Text>
                                  </View>
                                </View>
                          </View>
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,height:50,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{width:120,...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:13,textAlign:'center'}}>{'Copago'}</Text>
                                  <View style={{borderColor:'#BDFC97',borderWidth:1,borderRadius:20, padding:5,justifyContent:'center',marginLeft:20,minWidth:200}}>
                                    <Text style={{...Globalstyles.Medium,...Globalstyles.gray,fontSize:10,textAlign:'center'}}>{"$"+currentDate.copay}</Text>
                                  </View>
                                </View>
                          </View>
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,height:50,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                                <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{width:120,...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:13,textAlign:'center'}}>{'C. moderadora'}</Text>
                                  <View style={{borderColor:'#BDFC97',borderWidth:1,borderRadius:20, padding:5,justifyContent:'center',marginLeft:20,minWidth:200}}>
                                    <Text style={{...Globalstyles.Medium,...Globalstyles.gray,fontSize:10,textAlign:'center'}}>{"$"+currentDate.moderator_fee}</Text>
                                  </View>
                                </View>
                          </View>
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,minHeight:50,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{...Globalstyles.text,...Globalstyles.PurpleWhite2,textAlign:'center',...Globalstyles.Semibold}}>{currentDate?.address}</Text>
                          </View> 

                          {destinationCoordinates !== null ?
                          <MapView
                            style={{ flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,minHeight:500,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}
                            initialRegion={{
                              latitude: currentPosition.latitude, // Latitud inicial del mapa
                              longitude: currentPosition.longitude, // Longitud inicial del mapa
                              latitudeDelta: 0.0922,
                              longitudeDelta: 0.0421,
                            }}
                          >
                            <Marker
                              coordinate={{ latitude: currentPosition?.latitude, longitude: currentPosition?.longitude}} // Coordenadas de tu posición actual
                              title="Mi posición actual"
                            />
                            <Marker
                              coordinate={{ latitude: destinationCoordinates?.lat, longitude: destinationCoordinates?.lng }} // Coordenadas de la segunda posición
                              title="Destino"
                            />
                            <Polyline
                              coordinates={[
                                { latitude: currentPosition?.latitude, longitude: currentPosition?.longitude },
                                { latitude: destinationCoordinates?.lat, longitude: destinationCoordinates?.lng },
                              ]}
                              strokeWidth={2}
                              strokeColor="#FF0000"
                            />
                          </MapView>  
                          :
                          <View style={{flexDirection:'column', marginBottom:5,width:'90%',maxWidth:450,minHeight:50,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{...Globalstyles.text,...Globalstyles.PurpleWhite2,textAlign:'center',...Globalstyles.Medium,...Globalstyles.gray}}>{'No fue posible encontrar la dirección en google maps'}</Text>
                                <ConsultaDomestica style={{width:30,height:30}}></ConsultaDomestica>
                          </View> 
                          }

                          {currentDate?.datetime_arrival!==null ?
                          <TouchableOpacity style={{...styles.buttonDelete,borderColor:'#3A9EE9'}} onPress={UPDATE_DATE_FINISH}>
                                      <Text style={{...styles.buttonText,...Globalstyles.Medium,color:'#3A9EE9'}}>Finalizar consulta</Text>
                          </TouchableOpacity>
                          :
                          <TouchableOpacity style={styles.buttonDelete} onPress={UPDATE_DATE}>
                                      <Text style={{...styles.buttonText,...Globalstyles.Medium,color:'#FF0057'}}>Llegada a destino</Text>
                          </TouchableOpacity>  
                          }
                          
                                                 
                </View>
                </>
                :
                <>
                </>
                }
                
                <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginLeft:30}}>Módulos</Text>
                <Carusel data={ServicesData}  props={props.props}></Carusel>
                <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginLeft:30}}>Eventos</Text>
                <ScrollView horizontal={true} style={{width:'100%',height:220,paddingTop:30,paddingLeft:20}} showsHorizontalScrollIndicator={false}>
                  <View style={{width:"100%",flexDirection:'row'}}>
                    <View style={{maxHeight:100,flexDirection:'row'}}>
                      <TouchableOpacity style={{...styles.options,...styles_shadow,width:250}} onPress={()=>openWhatsApp()}>
                        <View style={{width:50,height:50,borderRadius:30,backgroundColor:'#00000029',alignItems:'center',justifyContent:'center'}}>
                            <QuestionIcon style={{width:25,height:25}}></QuestionIcon>
                        </View>
                        <Text style={{...Globalstyles.bold,...Globalstyles.SubTitle_2,...Globalstyles.Purple}}>Chat</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{...styles.options,...styles_shadow,width:250}} onPress={()=>{navigation.navigate('Beneficient')}}>
                        <View style={{marginBottom:4,minWidth:23,minHeight:20,padding:3,borderRadius:30,backgroundColor:'#F96767',alignItems:'center',justifyContent:'center',position:'relative',top:20,left:20}}>
                           <Text style={{color:'white'}}>{Notification_Maintenance_medic.length+Notification_basic_medic.length}</Text>
                        </View>
                        <View style={{width:50,height:50,borderRadius:30,backgroundColor:'#00000029',alignItems:'center',justifyContent:'center'}}>
                           <AlertComponent style={{width:25,height:25}}></AlertComponent>
                        </View>
                        <Text style={{...Globalstyles.bold,...Globalstyles.SubTitle_2,...Globalstyles.Purple}}>Alertas</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </LinearGradient>
            </View>
          </ScrollView>
          <CustomModal visible={showModal} onClose={()=>setShowModal(false)} message={message} iconName={iconName}></CustomModal>
        </View>

      
    
  )
}
