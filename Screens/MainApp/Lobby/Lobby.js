import { View, Text ,ImageBackground,Image,Dimensions,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { Linking } from 'react-native';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import QuestionIcon from '../../../Shared/Icons/QuestionIcon';
import styles from './LobbyStyle';
import Carusel from '../Carusel/Carusel';
import { styles_shadow } from '../OurServices/OurServicesStyles';
import { AppContext } from '../../../AppContext/Context';
import { GetName } from '../../../services/Auth/Login/Login';
import {  formatearHora, getAge } from '../../../services/DateManagement/DateManagement';
import CustomModal from '../../../Shared/Alerts/Alert';
import LoadingScreen from '../../../Shared/Alerts/Loader';
import { UpdateDate_Arrive, UpdateDate_FINISH, Whatsapp_message_llegada, Whatsapp_message_time, getActivities } from '../../../services/MainApp/NewService/NewServiceForm/NewServiceForm';
import AlertComponent from '../../../Shared/Icons/AlertComponent';
import { getActiveDates, getNotifications, getNotificationsMaintenance } from '../../../services/MainApp/HistoryDates/HistoryDates';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import ConsultaDomestica from '../../../Shared/Icons/OurServices/ConsultaDomestica';
import * as Speech from 'expo-speech';




/* DATA */
// IMAGENES PARA MOSTRAR EN LAS TARJEAS QUE PERMITEN ACCEDER A LOS DIFERENTES MODULOS DE LA APLICACIÓN
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
  {
    image:'../../../assets/Home/Tarjeta-Solicitar.png',
    id:'4',
    text_1:'Guias',
    text_2:'Practicas', 
    navigate:'FrecuentQuestions'
  },

]





export default function Lobby(props) {

  /* lobby */
  


  /* APP CONTEXT */
  var {Notification_basic_medic,setNotification_basic_medic, // variable para cargar las notificaciones del inventario del médico
    Notification_Maintenance_medic,setNotification_Maintenance_medic, // variable para cargar las notificaciones de mantenimiento del médico
    activities,setActivities, // variable para cargar los servicios que maneja MHC
    userData, setUserData, // variable para manejar la información del usuario
    token, setToken, // token de acceso a los servicios
    currentDate,setCurrentDate, // variable para almacenar la cita que este activa en el momento o en su defecto la ultima cita cargada
    currentPosition, setCurrentPosition // variable para almacenar la posición actual del médico
    } =React.useContext(AppContext);

  /* NAVIGATE */
  var {navigation}=props.props // variable para navegar en la app
  const windowHeight = Dimensions.get('window').height;

  let [preloader,setPreloader]=React.useState(false); // variable para la acceder al preloader
 /* MODAL */
  var [showModal, setShowModal] = React.useState(false); // use state para controlar la aparición de los modal
  var [message,setMessage]= React.useState(""); // variable para controlar los mensajes al momento de cancelar una cita
  var [iconName,setIconName]=React.useState(""); // variable para controlar los iconos que aparecen en el modal


 const handleError = () => {
   /* función para definir los textos, el icono y la aparición del modal*/
   setMessage('Error al completar la acción');
   setIconName('error');
   setShowModal(true);
 };


const handleArrive = () => {
  /* función para definir los textos, el icono y la aparición del modal*/
  setMessage('Llegada registrada correctamente');
  setIconName('check-circle');
  setShowModal(true);
};

const handleFinish = () => {
  /* función para definir los textos, el icono y la aparición del modal*/
  setMessage('Cita finalizada correctamente');
  setIconName('check-circle');
  setShowModal(true);
};


  /* NEW SERVICE LOGIC */

  React.useEffect(()=>{
    /* 
    al momento de entrar a la aplicación se solicitan permisos
    para obtener la ubicación actual nuestra y cargar datos para su funcionamiento
    como la ultima cita activa,y las actividades que maneja MHC.
    */
    if(token && currentDate===null && activities.length!==0){
      if(currentPosition===null){
        requestLocationPermission(); // permisos de gps
      }else{
        getData(); // carga de datos
      }
    }
  },[userData,activities])


  const requestLocationPermission = async () => {
    /*
    OBTENEMOS LOS PERMISOS PARA ACCEDER AL GPS DEL DISPOSITIVO
    */
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
    } else {
      /* EN CASO DE SER ACEPTADA 
         OBTENEMOS LOS DATOS DEL USUARIOS Y ACTUALIZAMOS LA POSICIÓN ACTUAL DEL USUARIO
      */
      getData();
      startUpdatingLocation();
    }
  };

  //setInterval(getCurrentLocation, 10000);

  const getData=async()=>{
    /*
    función para obtener la cita activa del médico
    */
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
        setCurrentDate(DateActive); // guardamos la cita activa para mostrar la ubicación del usuario
      }
      setPreloader(false);
    }


    
  }

  React.useEffect(()=>{
    if(token){
      GetActivities(); // cargamos los servicios de MHC
      GetNotifications(); // cargamos las notificaciones de inventario del médico
      GetNotificationsMaintenance(); // cargamos las notificaciones de mantenimiento del médico
    }
    
  },[])
  

  
  const GetNotifications=async()=>{
    // cargamos las notificaciones de inventario del médico
    setPreloader(true);
    let result=undefined;
    result=await getNotifications(token).catch((error)=>{
     console.log(error);
     handleError();
     setPreloader(false);
    })
  
    if (result!==undefined){
      if (Object.keys(result.data).length === 0) {
      } else {
        /*
        en caso de tener notificaciones solo se debe mostrar una notificación de aviso no hay
        que dar detalle de esta información puesto que el usuario debe averiguarlo personalmente
        */
        setNotification_basic_medic([{info:"Debes acercate al almacén para recargar inventario básico"}])
      }
    }
  }

  const GetNotificationsMaintenance=async()=>{
    // cargamos las notificaciones de mantenimiento del médico
    setPreloader(true);
    let result=undefined;
    result=await getNotificationsMaintenance(token).catch((error)=>{
     console.log(error);
     handleError();
     setPreloader(false);
    })
    if (result!==undefined){
      setNotification_Maintenance_medic(result.data);
      setPreloader(false);
    }
  }

  const GetActivities=async()=>{
    // CARGAMOS LOS SERVICIOS DE MHC
    setPreloader(true);
    let result=undefined;
    result=await getActivities(token).catch((error)=>{
     console.log(error);
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
  /* OBTENEMOS LA ACTIVIDAD CORRESPONDIENTE SEGUN EL ID*/
   let FilterArray = activities.filter((obj)=>obj.value.toString() === ActivityId.toString());

   return FilterArray[0].label

  }


  const UPDATE_DATE=async()=>{
    
    /*
    función para actualizar el estado de la cita en el momento 
    en el que el médico ha llegado al lugar o dirección del paciente

    */
    setPreloader(true);
    let result=undefined;
    result=await UpdateDate_Arrive(currentDate,token).catch((error)=>{
     console.log(error);
     handleError();
     setPreloader(false);
    })
    if (result!==undefined){
      setPreloader(false);
      handleArrive();// mensaje de aviso para la llegada del médico
      // whatsapp de llegada con la ubicación actual del médico
      Whatsapp_message_llegada(result?.data?.cellphone_number,currentPosition?.latitude,currentPosition?.longitude).then((data)=>{
        console.log(data);
      }).catch((error)=>{
        console.log(error);
      });
      // guardamos la cita actualizada con el estado nuevo de la cita
      setCurrentDate(result.data);
    }
 }

 const startUpdatingLocation = async () => {
  /*
  función para obtener la posición del médico y mediante un async, 
  definimos una distancia para actualizar la posición del médico
  cada 0.5 metros en este caso
  */
  Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      distanceInterval: 0.5, // distancia para actualizar la posición en el mapa
    },
    (location) => {
      const { latitude, longitude } = location?.coords;
      setCurrentPosition({ latitude, longitude });
    }
  );
};

 const UPDATE_DATE_FINISH=async()=>{
  
  /*
  función para actualizar la cita al estado de finalizado
  es decir cuando ya se ha registrado la historia clinica
  */
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
    setCurrentDate(null);
  }
}

  function filtrarDireccionParaGoogleMaps(direccionCompleta) {
    /*
    función para acondicionar la dirección lo mejor posible para ser diligenciada
    en google maps
    */
    // Eliminar caracteres especiales y convertir a minúsculas
    direccionCompleta = direccionCompleta.replace(/[^\w\s]/gi, '').toLowerCase();
  
    // Palabras ignoradas y sus sinónimos (opcional)
    const palabrasIgnoradas = ['calle', 'avenida', 'barrio', 'ciudad', 'número'];
    const sinonimosIgnorados = ['cl', 'av', 'brr', 'urb', 'urb.', 'urb-', 'nro', 'n', '#'];
  
    // Eliminar espacios en blanco adicionales
    direccionCompleta = direccionCompleta.replace(/\s+/g, ' ').trim();
  
    return direccionCompleta;
  }

  /* useState */

  // variable para almacenar las coordenadas de la dirección del usuario
  const [destinationCoordinates, setDestinationCoordinates] = React.useState(null);


  const getCoordinates = async (address,neighborhood,city, country) => {

    /*
    función para obtener la posición de la dirección de destino 
    mediante la dirección el barrio la ciudad y el pais.
    */
    try {
      let ADD = filtrarDireccionParaGoogleMaps(address);
      let Address = address.split(' ').join('+');
      let newAddress = Address.replace('#', 'No.');
      ADD += ', ' +neighborhood+', '+city+', '+country;
      
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${ADD}&key=AIzaSyCw4GK9llNdu3RvbmsW25xp1P3b8WghL6w`
      try {
        const response = await axios.get(url);
        const { results } = response.data;
        
        if (results.length > 0) {
          const firstResult = results[0];
          // seteamos la latitud y longitud en caso de haber sido posible encontrarla
          const { lat, lng } = firstResult.geometry.location;
          setDestinationCoordinates({ lat: lat, lng: lng });
        } else {
          console.log('No se encontraron resultados para la dirección proporcionada.');
        }
      } catch (error) {
        console.error(error);
      }

    } catch (error) {
        console.log(error);
    }
  };

  React.useEffect(()=>{
    if(currentDate!==null){
      if(currentDate.name!==undefined){
        // en caso de que tengamos una cita activa buscamos las coordenadas de la dirección de destino
        getCoordinates(currentDate?.address,currentDate?.city,'Colombia');
      }
    }
    
    
  },[currentDate])


  React.useEffect(()=>{
    /*
    si tenemos la dirección de destino y la posición actual del médico
    calculamos la ruta mas cercana para trazar por google maps
    */
    if(currentPosition!==null && destinationCoordinates!==null){
      console.log('Llega hasta este punto', currentDate);
       obtenerRuta(currentPosition,destinationCoordinates); // obtenemos la ruta entre los 2 puntos
    }
    
    
  },[currentPosition,destinationCoordinates])

  /* USE STATE */

  // variable para almacenar los vectores de la ruta
  let [poliLine,setPoliLine]=React.useState(null);

  // variable para almacenar las indicaciones suministradas por google maps
  let [Indications,setIndications]=React.useState(null);

  // variable para almacenar el tiempo estimado de llegada calculado por la API de google maps
  let [time,setTime]=React.useState(null);
  // variable para almacenar la imagen de street view que ofrece la api de google maps
  let [ViewUrl,setViewUrl]=React.useState(null);

  /* OBTENER POLI-LINEA */

  const obtenerRuta = async (coordinatesStart,coordinatesEnd) => {
    /*
    función para obtener los vectores que representan la ruta  entre la posición
    del médico y la dirección de la casa
    */
    const apiKey = 'AIzaSyCw4GK9llNdu3RvbmsW25xp1P3b8WghL6w';
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${coordinatesStart?.latitude},${coordinatesStart?.longitude}&destination=${coordinatesEnd?.lat},${coordinatesEnd?.lng}&key=${apiKey}&language=es`;
  
    try {
      const response = await axios.get(url);
      const data = response.data;
      // Procesa los datos de respuesta para obtener los puntos de latitud y longitud de la ruta
      const ruta = data.routes[0].overview_polyline.points;
      const duration = data.routes[0].legs[0].duration.text; // Duración estimada de la ruta
      setTime(duration);
      if(currentDate?.status === "EN CAMINO"){
        // enviamos al usuario el tiempo estimado de llegada
        Whatsapp_message_time(currentDate?.cellphone_number,duration,currentDate.datetime_start).then((data)=>{
          console.log(data);
        }).catch((error)=>{
          console.log(error);
        });

      }
      // Convierte la codificación de puntos a coordenadas
      const coordenadasRuta = decodePolyline(ruta);
      setPoliLine(coordenadasRuta);
      // obtenemos las indicaciones que ofrece la api de google
      const pasos = data.routes[0].legs[0].steps;
      // Reproduce las instrucciones paso a paso 
      if( currentDate?.datetime_arrival===null ){
        // en caso de que el médico no haya llegado a la casa reproduce las instrucciones
        let instruccion = pasos[0].html_instructions.replace(/<[^>]+>/g, ' '); // Elimina las etiquetas HTML de la instrucción
        setIndications(instruccion);
        instruccion=instruccion.replace('Cra.','Carrera');
        instruccion=instruccion.replace('Cl.','Calle');
        instruccion=instruccion.replace('/',' ');
        instruccion=instruccion.replace('Av.','Avenida');
        Speech.speak(instruccion, {
             language: 'es-ES', // Establece el idioma de las instrucciones de voz
             pitch: 1, // Establece el tono de voz
             rate: 1, // Establece la velocidad de reproducción
        });
      }

      const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${coordinatesEnd.lat},${coordinatesEnd.lng}&fov=90&heading=235&pitch=10&key=${apiKey}`;
      setViewUrl(streetViewUrl);
      

    } catch (error) {
      console.error('Error al obtener la ruta:', error);
    }
  };

  // Función para decodificar la codificación de polilínea de Google
// Función para decodificar la codificación de polilínea de Google
const decodePolyline = (polyline) => {
  /*
  función para decodificar la ruta y retornar algo reconocible para el react map
  */
  const points = [];
  let index = 0;
  let lat = 0;
  let lng = 0;

  while (index < polyline.length) {
    let shift = 0;
    let result = 0;
    let byte;

    do {
      byte = polyline.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const deltaLat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lat += deltaLat;

    shift = 0;
    result = 0;

    do {
      byte = polyline.charCodeAt(index++) - 63;
      result |= (byte & 0x1f) << shift;
      shift += 5;
    } while (byte >= 0x20);

    const deltaLng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lng += deltaLng;

    points.push({
      latitude: lat / 1e5,
      longitude: lng / 1e5,
    });
  }

  return points;
};


const openWhatsApp = () => {

  /*
  función para redireccionar a whatsapp con el número estipulado segun la sede
  */
  if (userData.coverage_city.toLowerCase().includes("armenia")){
    Linking.openURL('whatsapp://send?text=Hola!&phone=+573118665272');
  }else{
    Linking.openURL('whatsapp://send?text=Hola!&phone=+573214411673');
  }
}

   
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
                          <>

                          {currentDate?.datetime_arrival!==null ?
                          <></>
                          :
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,minHeight:50,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{...Globalstyles.text,...Globalstyles.PurpleWhite2,textAlign:'center',...Globalstyles.Semibold,...Globalstyles.BlackPurple}}>{'Tiempo estimado: '+time}</Text>
                          </View>
                          }
                           
                          <MapView
                            style={{ flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,minHeight:500,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-end',justifyContent:'flex-end'}}
                            initialRegion={{
                              latitude: currentPosition?.latitude, // Latitud inicial del mapa
                              longitude: currentPosition?.longitude, // Longitud inicial del mapa
                              latitudeDelta: 0.05,
                              longitudeDelta: 0.05,
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
                            {ViewUrl!== null ?
                             <></>

                            :
                            <></>
                            }
                            {poliLine!==null ?
                              <Polyline
                              coordinates={poliLine}
                              strokeWidth={2}
                              strokeColor="#FF0000"
                            />
                            :
                            <></>
                            }
                            
                          </MapView> 

                          </> 
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
                          <>
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,minHeight:50,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                                <Text style={{...Globalstyles.text,...Globalstyles.PurpleWhite2,textAlign:'center',...Globalstyles.Semibold}}>{Indications !== null ? Indications : ""}</Text>
                          </View> 
                          <TouchableOpacity style={styles.buttonDelete} onPress={UPDATE_DATE}>
                                      <Text style={{...styles.buttonText,...Globalstyles.Medium,color:'#FF0057'}}>Llegada a destino</Text>
                          </TouchableOpacity>  

                          </>
                          
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
