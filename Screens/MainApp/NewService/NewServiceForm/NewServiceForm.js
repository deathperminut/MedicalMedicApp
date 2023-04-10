import { View, Text,ImageBackground,ScrollView,TouchableOpacity ,TextInput,StyleSheet,Dimensions,SectionList, Platform } from 'react-native'
import React, { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import { Linking } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './NewServiceFormStyle';
import Globalstyles from '../../../../Shared/Icons/GlobalStyles';
import LogoMedicalComplete from '../../../../Shared/Icons/LogoMedicalComplete';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AppContext } from '../../../../AppContext/Context';
import { GetName } from '../../../../services/Auth/Login/Login';
import { getAge, getDateByHourDate } from '../../../../services/DateManagement/DateManagement';
import LoadingScreen from '../../../../Shared/Alerts/Loader';
import CustomModal from '../../../../Shared/Alerts/Alert';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { generateService, getActivities } from '../../../../services/MainApp/NewService/NewServiceForm/NewServiceForm';


export default function NewServiceForm(props) {

  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  /* PANTALLA */
  const windowHeight = Dimensions.get('window').height;
  const newHeight = windowHeight  - 200;

  /* NAVIGATION */

  let {navigation}=props

  /* SELECTS */
  const placeholder = {
    label: 'Seleccione el tipo de servicio',
    value: null,
    color: '#9EA0A4',
    fontFamily:'Montserrat-SemiBold'
  };

  const placeholder_type = {
    label: 'Seleccione el tipo de cliente',
    value: null,
    color: '#9EA0A4',
    fontFamily:'Montserrat-SemiBold'
  };

  const [texto, setTexto] = useState('');

  const handleTexto = (texto) => {
    setTexto(texto);
  };


  const [selectedValue, setSelectedValue] = React.useState('');

  /* APP CONTEXT */
  let {userData, setUserData, token, setToken,currentDate,setCurrentDate,listBeneficient,setListBeneficient,selectBeneficient,setSelectBeneficient,patient,setPatient} =React.useContext(AppContext);

  /* DATE PICKER */
 const [date, setDate] = React.useState(new Date())
 const [mode, setMode] = React.useState('time');
 const [show,setShow]  = React.useState(false);
 const [show_time,setShow_time]  = React.useState(false);

 const showMode_date= (currentMode)=>{
  console.log("DATOS");
  setShow(true);
 }
 const showMode_time= (currentMode)=>{ 
  console.log("DATOS2");
  setShow_time(true);
 }
 const onChangeDate=(event,selectedDate)=>{
  const currentDate=selectedDate || date;
  setShow(false);
  let tempDate=new Date(currentDate);
  let fDate=tempDate.getFullYear() + "-" + (tempDate.getMonth()) + '-' +tempDate.getDate();
  setService({...service,['desired_date']:fDate});
 }
 const onChangeTime=(event,selectedDate)=>{
  console.log("VALOR OBTENIDO: ",selectedDate)
  setShow_time(false);
  const currentDate=selectedDate || date;
  let hora = currentDate.getHours();
  let minutos = currentDate.getMinutes();

  let horaConMinutos = hora.toString().padStart(2, "0") + ":" + minutos.toString().padStart(2, "0");
  console.log("HORA OBTENIDA: ",horaConMinutos);
  setService({...service,['desired_hour']:horaConMinutos});

}

 let [preloader,setPreloader]=React.useState(false);
 /* MODAL */
 const [showModal, setShowModal] = React.useState(false);
 const [message,setMessage]= React.useState("");
 const [iconName,setIconName]=React.useState("");

 const handleSuccess = () => {
   setMessage('Acción completada con exito');
   setIconName('check-circle');
   setShowModal(true);
 };

 const handleError = () => {
   setMessage('Error al completar la acción');
   setIconName('error');
   setShowModal(true);
 };

 const handleInfo = () => {
   setMessage('Faltan campos por completar');
   setIconName('error');
   setShowModal(true);
 };

 const handleCloseModal = () => {
   setShowModal(false);
 };


 /* FUNCTIONS */

 const InputTextRead=(text,type)=>{

   setService({...service,[type]:text});

 }

 const InputSelectRead=(value,type)=>{
  console.log("SELECT: ",value);
  if(value === null){
      setService({...service,[type]:""});
    }else{
     setService({...service,[type]:value});
    }
   
 }

 const stylesDate = StyleSheet.create({
  datePicker: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
});
let [activities,setActivities]=React.useState([]);
let [service,setService]=React.useState({
  identification:patient.identification,
  activity:'',
  type_user:"",
  description:"",
  desired_date:"",
  desired_hour:"",
  status:"INGRESADA",
});


React.useEffect(()=>{
  if(token){
    GetActivities();
  }
  
},[])


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
  console.log("ACTIVIDADES: ",ACTIVITIES);

  setPreloader(false);


  }
}



 /* BUTTON FUNCTIONS */
 const submit=async()=>{
  if(service.activity!=="" && service.description!=="" && service.desired_date!=="" && service.identification && service.type_user!=="" && service.desired_hour!==""){
    
    setPreloader(true);
    let result=undefined;
    result=await generateService({...service,['desired_date']:getDateByHourDate(service.desired_date,service.desired_hour)},token).catch((error)=>{
      setPreloader(false);
      handleError();
    })
    if(result!==undefined){
      console.log("CITA GENERADA: ",result.data);
      setPreloader(false);
      handleSuccess();
      setCurrentDate(result.data);
      navigation.navigate('Drawer');
    }
    
  }else{
    handleInfo();
  }
 }


  return (
    <View style={styles.container}>
    {preloader ? 
      <LoadingScreen/>
      :
      <></>
    }
    <ScrollView showsVerticalScrollIndicator={false} style={{}}>
    <ImageBackground source={require('../../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')} style={styles.imageBackground}>
    <View style={styles.LobbyContainer}>
      <View style={styles.iconContainer}>
        <View style={styles.navBar}>
        {patient?.genre.toLowerCase()==="masculino" ? 
                  <View style={{borderRadius:60,maxWidth:70,maxHeight:70,overflow:'hidden'}}>
                   <ImageBackground source={require('../../../../assets/Male-User.png')} style={styles.photo}></ImageBackground>
                  </View>
                  
                  :
                  <View style={{borderRadius:60,maxWidth:70,maxHeight:70,overflow:'hidden'}}>
                   <ImageBackground source={require('../../../../assets/Female-User.png')} style={styles.photo}></ImageBackground>
                  </View>
        }
          <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
        </View>
        <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>{GetName(patient)}</Text>
        <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{getAge(patient?.date_birth)+" Años"}</Text>
        <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>{patient?.coverage_city} | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>{patient.address}</Text></Text>
      </View>
      <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,alignItems:'center',minHeight:newHeight}}>
        <Text style={{...Globalstyles.Semibold,...Globalstyles.Purple,fontSize:20,marginBottom:20}}>Solicitud del servicio</Text>
        <Text style={{...Globalstyles.Semibold,...Globalstyles.Purple,fontSize:10,marginBottom:20,textAlign:'center',color:'#B0A8EA80'}}>La dirección asociada al servicio, sera la dirección registrada de residencia, en caso de que sea distinta actualiza tu dirección.</Text>
        <View style={{width:'100%',maxWidth:500,marginBottom:20}}>
          <RNPickerSelect
                  placeholder={placeholder }
                  onValueChange={(value) => InputSelectRead(value,"activity")}
                  items={activities}
              />
        </View>
        <View style={{width:'100%',maxWidth:500,marginBottom:20}}>
          <RNPickerSelect
                  placeholder={placeholder_type }
                  onValueChange={(value) => InputSelectRead(value,"type_user")}
                  items={[
                      { label: "Medical Home Care", value: "Medical Home Care" },
                      { label: "Eps", value: "Eps" },
                      { label: "Particular", value: "Particular" },
                  ]}
              />
        </View>
        <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2},width:'100%'}}>
       <Input onTouchStart={() => {console.log("entramos");showMode_date('date')} } inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} placeholderTextColor="#B0A8EA80" containerStyle={{ marginVertical: 10 }} placeholder='Fecha deseada' editable={true} value={service.desired_date} leftIcon={
             <Icon
               name='calendar'
               type='font-awesome'
               size={20}
               color='#7E72D1'
             />}  
       />

       {show && (
         <DateTimePicker
         testID='dateTimePicker2'
         locale="es-ES"
         value={date}
         mode={'date'}
         style={stylesDate.datePicker}
         is24Hour={true}
         display='default'
         onChange={onChangeDate}
         />
       )}
        </View>
        <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2},width:'100%'}}>
       <Input onTouchStart={() => {console.log("entramos 2");showMode_time('time')} } inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} placeholderTextColor="#B0A8EA80" containerStyle={{ marginVertical: 10 }} placeholder='Hora deseada' editable={true} value={service.desired_hour} leftIcon={
             <Icon
               name='calendar'
               type='font-awesome'
               size={20}
               color='#7E72D1'
             />}  
       />

       {show_time && (
         <DateTimePicker
         testID='dateTimePicker'
         locale="es-ES"
         value={date}
         mode={'time'}
         style={stylesDate.datePicker}
         is24Hour={true}
         display='default'
         onChange={onChangeTime}
         />
       )}
        </View>
        <TextInput
              style={{...styles.textArea,...Globalstyles.Medium,marginBottom:100,maxWidth:500}}
              value={service.description}
              onChangeText={(value)=>InputTextRead(value,'description')}
              placeholder="Realize una descripción para el servicio"
              placeholderTextColor="#B0A8EA80"
              multiline
         />
         <TouchableOpacity style={styles.buttonIn} onPress={submit}>
                    <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Generar</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.buttonDelete} onPress={() => navigation.navigate('Drawer')}>
                    <Text style={{...styles.buttonText,...Globalstyles.Medium,color:'#FF0057'}}>Cancelar</Text>
         </TouchableOpacity>
      </LinearGradient>
      
    </View>
    </ImageBackground>
    </ScrollView>
    <CustomModal visible={showModal} onClose={()=>setShowModal(false)} message={message} iconName={iconName}></CustomModal>
  </View>
  )
}

