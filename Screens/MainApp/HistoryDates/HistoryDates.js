import { View, Text ,ImageBackground,Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import styles from './HistoryDatesStyles'
import { styles_shadow } from '../OurServices/OurServicesStyles';
import { formatearFecha, formatearHora, getAge } from '../../../services/DateManagement/DateManagement';
import { GetName } from '../../../services/Auth/Login/Login';
import { AppContext } from '../../../AppContext/Context';
import LoadingScreen from '../../../Shared/Alerts/Loader';
import CustomModal from '../../../Shared/Alerts/Alert';
import { getCompleteDates } from '../../../services/MainApp/HistoryDates/HistoryDates';

export default function HistoryDates(props) {
    /* NAVIGATE */
  let {navigation}=props

  const DatesArray = [
    {
      Date: '28 de Julio de 2022',
      Doctor: 'Dr Pedro Pablo Ruiz',
      Hour:'8:00 Am - 9:00 Am'
    },
    {
      Date: '28 de Julio de 2022',
      Doctor: 'Dr Pedro Pablo Ruiz',
      Hour:'8:00 Am - 9:00 Am'
    },
    {
      Date: '28 de Julio de 2022',
      Doctor: 'Dr Pedro Pablo Ruiz',
      Hour:'8:00 Am - 9:00 Am'
    },
    {
      Date: '28 de Julio de 2022',
      Doctor: 'Dr Pedro Pablo Ruiz',
      Hour:'8:00 Am - 9:00 Am'
    },
    {
      Date: '28 de Julio de 2022',
      Doctor: 'Dr Pedro Pablo Ruiz',
      Hour:'8:00 Am - 9:00 Am'
    },
    {
      Date: '28 de Julio de 2022',
      Doctor: 'Dr Pedro Pablo Ruiz',
      Hour:'8:00 Am - 9:00 Am'
    },
    {
      Date: '28 de Julio de 2022',
      Doctor: 'Dr Pedro Pablo Ruiz',
      Hour:'8:00 Am - 9:00 Am'
    },
    {
      Date: '28 de Julio de 2022',
      Doctor: 'Dr Pedro Pablo Ruiz',
      Hour:'8:00 Am - 9:00 Am'
    },
    {
      Date: '28 de Julio de 2022',
      Doctor: 'Dr Pedro Pablo Ruiz',
      Hour:'8:00 Am - 9:00 Am'
    },
  ];

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

  const handleSuccess = () => {
    setMessage('Login exitoso');
    setIconName('check-circle');
    setShowModal(true);
  };

  const handleError = () => {
    setMessage('Error al cargar historial de consultas');
    setIconName('error');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  /* APP CONTEXT */
  let {userData, setUserData, token, setToken,currentDate,setCurrentDate,historyDates,setHistoryDates,step,setStep} =React.useContext(AppContext);

   React.useEffect(()=>{
     if(token){
       getData();
     }
   },[])

  // /* FUNCTIONS */

   const getData=async()=>{
    
     setPreloader(true);
     let result=undefined;
     result= await getCompleteDates(userData,token).catch((error)=>{
       console.log(error);
       setPreloader(false);
       handleError();
     })
     if(result!==undefined){
      if(result.data.length!==0){
        console.log("HISTORIA CITA: ",result.data[0].appointments)
        //let ArrayDates=result.data.beneficiaries_appointment.concat(result.data.user_appointment);
        setHistoryDates(result.data[0].appointments);

      }else{
        setHistoryDates(result.data);
      }
      
      setPreloader(false);

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
              <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Drawer')}></Icon>
            </TouchableOpacity>
            <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
          </View>
          <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>{GetName(userData)}</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{getAge(userData?.date_birth)+" Años"}</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>{userData?.coverage_city} | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{userData.address}</Text></Text>
          <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:5}}>
            {currentDate?.status!=='COMPLETADA' ?  
            <>
            <View style={{width:14,height:14,backgroundColor:'#BDFC97', borderRadius:10 ,marginRight:10}}></View>
            <Text style={{...Globalstyles.bold,color:'#BDFC97',marginRight:50}}>Cita activa</Text>
            </>
            :
            <></>
            }
            <Text style={{...Globalstyles.Medium,color:'#FFFFFF'}}>Historial</Text>
            <View style={{minWidth:20,minHeight:20,backgroundColor:'#867BD8', borderRadius:2 ,marginLeft:10,alignItems:'center',justifyContent:'center',padding:5}}>
              <Text style={{...Globalstyles.Medium,fontSize:10,color:'#FFFF'}}>{historyDates.length}</Text>
            </View>
          </View>
        </View>
        <LinearGradient colors={['#FFFFFF', '#B2ACDC91']} style={{...styles.FormContainer,alignItems:'center'}}>
          <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginBottom:20}}>Historial de citas medicas</Text>
          {historyDates.length===0 ?
            <Text style={{...Globalstyles.Medium,...Globalstyles.gray,marginTop:'50%'}}>No se han cargado citas completadas</Text>
          :
          <ScrollView style={{width:'100%',marginBottom:5,maxWidth:470,maxHeight:'100%'}} showsVerticalScrollIndicator={false}>
            <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
              
              {historyDates.map((faq, index) => (
               
              <View style={{width:'100%',flexDirection:'column',alignItems:'center',justifyContent:'center'}} key={index}>
                <View  style={{flexDirection:'column', marginBottom:5,width:'90%',minHeight:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:5,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                  <TouchableOpacity style={{flexDirection:'row',width:'100%',height:90,padding:10,alignItems:'flex-start',justifyContent:'center'}} onPress={() => handleExpand(index)}>
                    <View style={{width:70,height:70,padding:10,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                      <Image source={{uri:faq.doctor_info?.photo_profile}} style={{resizeMode:'cover',width:70,height:70}}></Image>
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
                        <Text style={{...Globalstyles.BlackPurple,...Globalstyles.bold}}>{formatearFecha(faq?.appointment_date)}</Text>
                      </View>
                      <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:13,textAlign:'center'}}>{'Dr Juan Sebastian Mendez Rondon'}</Text>
                      <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text,textAlign:'center'}}>{'DNI. '+faq?.doctor_info.identification}</Text>
                    </View>
                    </View>
                  </TouchableOpacity>
                 
                  {expanded[index] && (
                    <>
                      <TouchableOpacity style={{padding:5,alignItems:'center',flexDirection:'row',width:'50%',maxWidth:500,height:30,backgroundColor:'#1AE494',borderRadius: 10, marginBottom:20,justifyContent:'center',marginTop:20}}>
                        <Text style={{...Globalstyles.Purple,...Globalstyles.bold,fontSize:12}}>{'Terminado ' + formatearHora(faq?.appointment_date)}</Text>  
                      </TouchableOpacity>
                      <TouchableOpacity style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:70,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:10}}>
                          <Icon
                            name="check"
                            type="font-awesome"
                            color="#00000029"
                            size={14}
                            containerStyle={{
                                backgroundColor: "transparent",
                                borderRadius: 50,
                                padding: 8,
                                borderWidth:1,
                                borderColor:'#00000029'
                            }}
                            /> 
                            <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                              <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Recomendaciones</Text>
                              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Encuentra aquí las recomendaciones que te dejo el médico</Text>
                            </View>   
                      </TouchableOpacity>
                      <TouchableOpacity style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:70,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:10}}>
                          <Icon
                            name="check"
                            type="font-awesome"
                            color="#00000029"
                            size={14}
                            containerStyle={{
                                backgroundColor: "transparent",
                                borderRadius: 50,
                                padding: 8,
                                borderWidth:1,
                                borderColor:'#00000029'
                            }}
                            /> 
                            <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                              <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Formula médica</Text>
                              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Descarga la formula en formato PDF</Text>
                            </View>   
                      </TouchableOpacity>
                      <TouchableOpacity style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:70,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:10}}>
                          <Icon
                            name="check"
                            type="font-awesome"
                            color="#00000029"
                            size={14}
                            containerStyle={{
                                backgroundColor: "transparent",
                                borderRadius: 50,
                                padding: 8,
                                borderWidth:1,
                                borderColor:'#00000029'
                            }}
                            /> 
                            <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                              <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Incapacidad</Text>
                              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Si te dieron una incapacidad la puedes descargar aquí</Text>
                            </View>   
                      </TouchableOpacity>
                      <TouchableOpacity style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:70,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:10}}>
                          <Icon
                            name="check"
                            type="font-awesome"
                            color="#00000029"
                            size={14}
                            containerStyle={{
                                backgroundColor: "transparent",
                                borderRadius: 50,
                                padding: 8,
                                borderWidth:1,
                                borderColor:'#00000029'
                            }}
                            /> 
                            <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                              <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Hospitalización</Text>
                              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Si te asignaron una orden de hospitalización descargala aquí</Text>
                            </View>   
                      </TouchableOpacity>
                      <TouchableOpacity style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:70,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:10}}>
                          <Icon
                            name="check"
                            type="font-awesome"
                            color="#00000029"
                            size={14}
                            containerStyle={{
                                backgroundColor: "transparent",
                                borderRadius: 50,
                                padding: 8,
                                borderWidth:1,
                                borderColor:'#00000029'
                            }}
                            /> 
                            <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                              <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Factura</Text>
                              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Descarga tu factura desde aquí</Text>
                            </View>   
                      </TouchableOpacity>
                      <TouchableOpacity style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:70,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:10}}>
                          <Icon
                            name="check"
                            type="font-awesome"
                            color="#00000029"
                            size={14}
                            containerStyle={{
                                backgroundColor: "transparent",
                                borderRadius: 50,
                                padding: 8,
                                borderWidth:1,
                                borderColor:'#00000029'
                            }}
                            /> 
                            <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                              <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Calificar el servicio</Text>
                              <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Califica el servicio del personal que te atendio</Text>
                            </View>   
                      </TouchableOpacity>
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