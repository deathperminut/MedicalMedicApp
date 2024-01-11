import { View, Text,ImageBackground,ScrollView,TouchableOpacity ,Dimensions } from 'react-native'
import React, { useState } from 'react';
import styles from './OurServicesStyles';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import { Icon, Image } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';

import { Calendar } from 'react-native-big-calendar';
import { AppContext } from '../../../AppContext/Context';
import { retrieveMedicalSchedule, DatesDoctors } from '../../../services/MainApp/NewService/NewServiceForm/NewServiceForm';
import LoadingScreen from '../../../Shared/Alerts/Loader';

export default function OurServices(props) {
  /* PANTALLA DEL CALENDARIO PERSONAL DEL MÉDICO */

  /* USE STATE */
  // VARIABLE PARA MANEJAR EL COMPONENTE DE LOADIN
  const [preloader,setPreloader] = React.useState(false);

  /* APP CONTEXT */
  
  let {token, // TOKEN DE ACCESO CON LOS SERVICIOS
    userData // VARIABLE CON LA INFORMACIÓN DEL USUARIO
    }=React.useContext(AppContext);

  /* CALENDAR */

  /* PANTALLA DIMENSIONES DEL CALENDARIO */
  const windowHeight = Dimensions.get('window').height;
  const newHeight = windowHeight  - 250;

  /* CALENDARIO ESTILOS*/
  /* ESTILOS PARA LOS EVENTOS QUE SE MUESTRAN EN EL CALENDARIO */
  const eventStyle = {
    backgroundColor: '#F19420',
    borderRadius: 5,
    opacity: 0.8,
  };



  /* NAVIGATION */

  let {navigation}=props;


  React.useEffect(()=>{

    if(token!==null){
      getSchedule_Medic(); // OBTENEMOS EL HORARIO PERSONAL DEL MÉDICO
    }

  },[token])

  let [schedule,setSchedule]=React.useState([]);



  const getSchedule_Medic=async()=>{
    /* función para obtener el calendario personal del médico 
      es decir su horario de trabajo
    */
    setPreloader(true);
    let result=undefined;
    result=await retrieveMedicalSchedule(token).catch((error)=>{
      console.log(error);
      setPreloader(false);
    })
    if(result){
      // guardamos los turnos de trabajo
      setSchedule(DatesDoctors(result.data).filter((obj)=>obj.resourceId === userData.id));
      // cancelamos el preloader.
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
      <ImageBackground source={require('../../../assets/Home/BG-EPS.png')} style={styles.imageBackground}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
      <View style={styles.LobbyContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.navBar}>
            <TouchableOpacity>
              <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Drawer')}></Icon>
            </TouchableOpacity>
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
          <Text style={{...Globalstyles.Medium,...Globalstyles.white,...Globalstyles.SubTitle_2,marginTop:50}}>Turnos diarios</Text>
        </View>
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,alignItems:'center',minHeight:newHeight}}>
          <View style={{ width:'100%',height:'100%'}}>
           <Calendar mode='3days' activeDate={new Date()} weekDayHeaderHighlightColor='#0496F9' dayHeaderHighlightColor='white' events={schedule} height={50} width={100} eventCellStyle={eventStyle}/>
          </View>
        </LinearGradient>
      </View>
      </ScrollView>
      
      </ImageBackground>
    </View>

    </>
    
  )
}
