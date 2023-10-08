import { View, Text,ImageBackground,ScrollView,TouchableOpacity ,Dimensions } from 'react-native'
import React, { useState } from 'react';
import styles from './OurServicesStyles';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import { Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';

import { Calendar } from 'react-native-big-calendar';
import { AppContext } from '../../../AppContext/Context';
import { retrieveMedicalSchedule, DatesDoctors } from '../../../services/MainApp/NewService/NewServiceForm/NewServiceForm';
import LoadingScreen from '../../../Shared/Alerts/Loader';

export default function OurServices(props) {

  /* USE STATE */
  const [preloader,setPreloader] = React.useState(false);

  /* APP CONTEXT */

  let {token,userData}=React.useContext(AppContext);

  /* CALENDAR */

  const events = [
    {
      title: 'Meeting',
      start: new Date(2020, 1, 11, 10, 0),
      end: new Date(2020, 1, 11, 10, 30),
    },
    {
      title: 'Coffee break',
      start: new Date(2020, 1, 11, 15, 45),
      end: new Date(2020, 1, 11, 16, 30),
    },
  ]

  /* PANTALLA */
  const windowHeight = Dimensions.get('window').height;
  const newHeight = windowHeight  - 250;

  /* CALENDARIO ESTILOS*/
  const eventStyle = {
    backgroundColor: '#F19420',
    borderRadius: 5,
    opacity: 0.8,
  };



  /* NAVIGATION */

  let {navigation}=props;

  const [texto, setTexto] = useState('');

  React.useEffect(()=>{

    if(token!==null){
      getSchedule_Medic();
    }

  },[token])

  let [schedule,setSchedule]=React.useState([]);

  const renderEvent = ({ event }) => {
    return (
      <View style={eventStyle}>
        <Text style={{ color: 'red' }}>{moment(event.start).format('LT')}</Text>
        {/* Resto del contenido del evento */}
      </View>
    );
  };

  const getSchedule_Medic=async()=>{
    setPreloader(true);
    let result=undefined;
    result=await retrieveMedicalSchedule(token).catch((error)=>{
      console.log(error);
      setPreloader(false);
    })
    if(result){
      setSchedule(DatesDoctors(result.data).filter((obj)=>obj.resourceId === userData.id));
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
            <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
          </View>
          <Text style={{...Globalstyles.Medium,...Globalstyles.white,...Globalstyles.SubTitle_2,marginTop:40}}>Turnos diarios</Text>
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
