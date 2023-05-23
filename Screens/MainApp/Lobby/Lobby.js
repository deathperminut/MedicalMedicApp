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
import { cancelService, getActiveService } from '../../../services/MainApp/NewService/NewServiceForm/NewServiceForm';
import { environment } from '../../../environments/environments';
import AlertComponent from '../../../Shared/Icons/AlertComponent';

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
    navigate:'Swiper'
  },

]





export default function Lobby(props) {

  /* APP CONTEXT */
  var {userData, setUserData, token, setToken,currentDate,setCurrentDate,step,setStep} =React.useContext(AppContext);

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

 const handleInfo = () => {
   setMessage('Solo es posible cancelar mientras no haya sido agendada, en caso distinto comuniquese con la central, en el apartado de contacto.');
   setIconName('error');
   setShowModal(true);
 };

 const handleCloseModal = () => {
   setShowModal(false);
 };
 

  /* NEW SERVICE LOGIC */

  const cancelDate=async()=>{

    setShowModalCancel(false);
    
    if(currentDate.status==="INGRESADA"){

      setPreloader(true);
      let result=undefined;
      result=await cancelService(currentDate,reason,token).catch((error)=>{

        console.log(error);
        setPreloader(false);
        handleError();

      })

      if (result !== undefined){
        setPreloader(false);
        setCurrentDate(null);
      }

    }else{
      handleInfo();
    }
  }

  React.useEffect(()=>{
    if(token && currentDate===null){
      getData();
    }
  },[userData])

  const getData=async()=>{
    setPreloader(true);
    let result=undefined
    result= await getActiveService(userData,token).catch((error)=>{
      console.log(error);
      handleError();
      setPreloader(false);
    })
    if (result!==undefined){
      let ArrayDates=result.data;
      if(ArrayDates.length!==0){
         setCurrentDate(ArrayDates[0]);
         if(ArrayDates[0].status==="INGRESADA"){
          setStep(0)
         }else if(ArrayDates[0].status==="ACEPTADA"){
          setStep(1)
         }else if(ArrayDates[0].status==="AGENDADA"){
          setStep(2)
         }else{
          setStep(3)
         }
         //handleCita()
       }
       setPreloader(false);
       // NOS SUSCRIBIMOS AL SOCKET
       //getNotificationPermission();
       registerForPushNotificationsAsync(userData).then((token) => {

        console.log(userData,token);
        // NOS SUSCRIBIMOS AL SOCKET
        socket_control(userData,token);
        
      });
      

    }


    
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

  const socket_control=async(User,Token)=>{
    console.log("SOCKER RECIBIDO: ",User,Token);
    const socket = new WebSocket(environment.socket_date+User.identification+'/?token='+token);
    socket.onopen = () => {
        console.log('WebSocket connected');
    };
    socket.onmessage = (event) => {
      console.log('Received message: ' ,JSON.parse(event.data));
      let data=JSON.parse(event.data);
        if (data.type==="appointment_state"){
          if(data.state==="CANCELADA"){
            setCurrentDate(null);
            showNotification('CITA CANCELADA',Token)
            handleCancelWeb(data);
          }else if(data.state==="ACEPTADA"){
            setCurrentDate({ ...data, status: 'ACEPTADA',user_info:data.user_info,appointment_date:data.appointment_date,doctor_info:data.doctor_info });
            setStep(1);
          }else if(data.state==="AGENDADA"){
            setCurrentDate({ ...data, status: 'AGENDADA',user_info:data.user_info,appointment_date:data.appointment_date,doctor_info:data.doctor_info });
            setStep(2);
          }else if(data.state==="COMPLETADA"){
            setCurrentDate({ ...data, status: 'COMPLETADA',user_info:data.user_info,appointment_date:data.appointment_date,doctor_info:data.doctor_info });
            setStep(3);
          }
        }

    };

    socket.onerror = (error) => {
      console.log('WebSocket error: ' + error.message);
    };

    socket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      socket.close();
    };
  }

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



  let [reason,setReason]=React.useState("");

  const readInputReason=(Text)=>{

    setReason(Text);

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
                  {/* {userData?.genre?.toLowerCase()==="masculino" ? 
                  <View style={{borderRadius:60,maxWidth:70,maxHeight:70,overflow:'hidden'}}>
                    <ImageBackground source={require('../../../assets/Male-User.png')} style={styles.photo}></ImageBackground>
                  </View>
                  
                  :
                  <View style={{borderRadius:60,maxWidth:70,maxHeight:70,overflow:'hidden'}}>
                   <ImageBackground source={require('../../../assets/Female-User.png')} style={styles.photo}></ImageBackground>
                  </View>
                  } */}
                  <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
                </View>
                <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>{GetName(userData)}</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{getAge(userData?.date_birth)+" Años"}</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>{userData?.coverage_city} | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{userData.address}</Text></Text>
              </View>
              <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={[styles.FormContainer, { minHeight: windowHeight - 200 }]}>
                {currentDate!== null ? 
                <>
                {currentDate.status==="COMPLETADA" ? 
                <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginLeft:30,marginBottom:10}}>Ultima cita</Text>
                :
                <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginLeft:30,marginBottom:10}}>Cita</Text>
                }
                <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
                  <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <View  style={{flexDirection:'column', marginBottom:5,width:'100%',height:393,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                          {currentDate?.status==="INGRESADA" || currentDate?.status==="ACEPTADA" || currentDate?.state==="INGRESADA" || currentDate?.state==="ACEPTADA"   ?
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                            <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10,backgroundColor:'#C8C1F8'}}>
                              <Image source={require('../../../assets/user-warning.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                            </View>
                            <View style={{maxWidth:250,alignItems:'flex-start',justifyContent:'flex-start',backgroundColor:'#FFFFFF'}}>
                              <View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                  <Icon
                                    name='calendar'
                                    type='font-awesome'
                                    color='#FFA500'
                                    size={14}
                                    style={{marginRight:10}}
                                  />
                                  <Text style={{...Globalstyles.BlackPurple,...Globalstyles.bold}}>Esperando asignación...</Text>
                                </View>
                                <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:13,textAlign:'center'}}>{GetName(currentDate?.user_info)}</Text>
                                <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text,textAlign:'center'}}>{currentDate?.user_info.identification_type+" "+currentDate?.user_info.identification}</Text>
                              </View>
                            </View>
                          </View>
                          :
                          <View style={{flexDirection:'row', marginBottom:5,width:'90%',maxWidth:450,height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'center',justifyContent:'center'}}>
                            <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                              <Image source={{uri:currentDate?.doctor_info?.photo_profile}} style={{resizeMode:'cover',width:70,height:70}}></Image>
                            </View>
                            <View style={{maxWidth:250,alignItems:'flex-start',justifyContent:'flex-start',backgroundColor:'#FFFFFF'}}>
                              <View>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                  <Icon
                                    name='calendar'
                                    type='font-awesome'
                                    color='#FFA500'
                                    size={14}
                                    style={{marginRight:10}}
                                  />
                                  <Text style={{...Globalstyles.BlackPurple,...Globalstyles.bold}}>{formatearFecha(currentDate?.appointment_date)}</Text>
                                </View>
                                <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:13,textAlign:'center'}}>{GetName(currentDate?.doctor_info)}</Text>
                                <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text,textAlign:'center'}}>{formatearHora(currentDate?.appointment_date)}</Text>
                              </View>
                            </View>
                          </View>
                          }
                          
                          <VerticalStepIndicator></VerticalStepIndicator>
                          {currentDate.status ==='COMPLETADA' ?
                          <></>
                          :
                          <TouchableOpacity style={styles.buttonDelete} onPress={handleCancel}>
                                      <Text style={{...styles.buttonText,...Globalstyles.Medium,color:'#FF0057'}}>Cancelar</Text>
                          </TouchableOpacity>
                          }
                        </View>
                  </View>
                </View>
                </>
                :
                <>
                  
                </>
                }
                
                <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginLeft:30}}>Módulos</Text>
                <Carusel data={ServicesData}  props={props.props}></Carusel>
                <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginLeft:30}}>Eventos</Text>
                <ScrollView horizontal={true} style={{width:'100%',height:220,paddingTop:30}} showsHorizontalScrollIndicator={false}>
                  <View style={{width:"100%",flexDirection:'row'}}>
                    <View style={{maxHeight:100,flexDirection:'row'}}>
                      <TouchableOpacity style={{...styles.options,...styles_shadow,width:150}} onPress={()=>openWhatsApp()}>
                        <View style={{width:30,height:30,borderRadius:30,backgroundColor:'#00000029',alignItems:'center',justifyContent:'center'}}>
                            <QuestionIcon style={{width:15,height:15}}></QuestionIcon>
                        </View>
                        <Text style={{...Globalstyles.bold,...Globalstyles.SubTitle_2,...Globalstyles.Purple}}>Chat</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{...styles.options,...styles_shadow,width:150}} onPress={()=>{navigation.navigate('FrecuentQuestions')}}>
                        <View style={{width:30,height:30,borderRadius:30,backgroundColor:'#00000029',alignItems:'center',justifyContent:'center'}}>
                            <ContactIcon style={{width:15,height:15}}></ContactIcon>
                        </View>
                        <Text style={{...Globalstyles.bold,...Globalstyles.SubTitle_2,...Globalstyles.Purple}}>Reunión</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{...styles.options,...styles_shadow,width:150}} onPress={()=>{navigation.navigate('Beneficient')}}>
                        <View style={{width:30,height:30,borderRadius:30,backgroundColor:'#00000029',alignItems:'center',justifyContent:'center'}}>
                           
                           <AlertComponent style={{width:15,height:15}}></AlertComponent>
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
          <CustomModalCancel readInputReason={readInputReason} visible={showModalCancel} cancel={cancelDate} onClose={()=>setShowModalCancel(false)} message={message} iconName={iconName}></CustomModalCancel>
        </View>

      
    
  )
}
