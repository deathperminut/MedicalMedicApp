import { View, Text,StyleSheet,TouchableOpacity,Image,Platform ,SectionList} from 'react-native'
import React from 'react'
import { Input, Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import Globalstyles from '../../../../Shared/Icons/GlobalStyles';
import styles from './RegisterPatientStyle';
import CustomModal from '../../../../Shared/Alerts/Alert';
import { initRegister } from '../../../../services/Auth/Register/RegisterPatient/RegisterPatient';
import DateTimePicker from '@react-native-community/datetimepicker';
import LoadingScreen from '../../../../Shared/Alerts/Loader';
import DropDownPicker from 'react-native-dropdown-picker';
import { getBarrios, getWareLocation } from '../../../../services/Auth/Register/EditBeneficient/EditBeneficient';
import RNPickerSelect from 'react-native-picker-select';


export default function RegisterPatient(props) {


  /* REACT USESTATE */

  let [barrios,setBarrios]=React.useState([]);
  let [barriosSublist,setBarriosSublist]=React.useState([]);
  let [cities,setCities]=React.useState([]);
  let [citiesComplete,setCitiesComplete]=React.useState([]);

  React.useEffect(()=>{
    
    getData()

  },[])


  const getData=()=>{
     getlocations();
  }

  const getlocations=async()=>{
   setPreloader(true);
   let result=undefined;
   result=await getWareLocation().catch((error)=>{
    console.log(error);
    setPreloader(false);
    handleError_();
   })
   if (result){
      //setPreloader(false);
      setCities(result.data.map(
        obj => ({
          value: obj.location_name,
          label: obj.location_name,
        })
      ))
      setCitiesComplete(result.data.map(
        obj => ({
          value: obj.id,
          label: obj.location_name,
        })
      )) 
      GetBarrios()    
   }
  }

  

  const findLocation=(location_name)=>{

    for (var i=0;i<citiesComplete.length;i++){
      if(citiesComplete[i].label === location_name){
        return citiesComplete[i].value
      }
    }

  }

  const GetBarrios=async()=>{
    setPreloader(true);
    let result = undefined;
    result = await getBarrios().catch((error)=>{
      console.log(error);
      setPreloader(false);
      handleError_();
    }) 

    if (result){
      setPreloader(false);
      setBarrios(result.data.map(
        obj => ({
          value: obj.neighbourhood,
          label: obj.neighbourhood,
          location:obj.location_id,
        })
      ))
      setBarriosSublist(result.data.map(
        obj => ({
          value: obj.neighbourhood,
          label: obj.neighbourhood,
          location:obj.location_id,
        })
      ))

    }
  }

  
  /* DATE PICKER */
  const [date, setDate] = React.useState(new Date())
  const [mode, setMode] = React.useState('date');
  const [show,setShow]  = React.useState(false);

  const showMode= (currentMode)=>{
    setShow(true);
    setMode(currentMode);
  }
  const onChangeDate=(event,selectedDate)=>{
    const currentDate=selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate=new Date(currentDate);
    let fDate=tempDate.getFullYear() + "-" + (tempDate.getMonth()) + '-' +tempDate.getDate();
    setUserData({...userData,['date_birth']:fDate});
  }

  let [preloader,setPreloader]=React.useState(false);
  /* MODAL */
  const [showModal, setShowModal] = React.useState(false);
  const [message,setMessage]= React.useState("");
  const [iconName,setIconName]=React.useState("");

  const handleSuccess = () => {
    setMessage('Registro exitoso');
    setIconName('check-circle');
    setShowModal(true);
  };

  const handleError = () => {

    setMessage('Cédula o correo ya en uso');
    setIconName('error');
    setShowModal(true);
    
  };

  const handleError_ = () => {
    setMessage('Error al cargar datos');
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
  
  /* USE STATE */
  let [showPassword,setShowPassword]=React.useState(true);

  /* NAVITATION */
  let {navigation}=props

  /* USESTATE */

  let [userData,setUserData]=React.useState({
    "first_name":"",
    "second_name":"",
    "last_name":"",
    "second_last_name":"",
    "date_joined":"",
    "email":"",
    "password":"",
    "phone":"",
    "identification":"",
    "identification_type":"",
    "department":"",
    "city":"",
    "coverage_city":"",
    "date_birth":"",
    "photo_profile":null,
    "neighbourhood":"",
    "address":"",
    "genre":"",
    "eps":"",
    "regime_type":"",
  })

  const placeholder_type = {
    label: 'Barrio',
    value: null,
    color: '#7E72D1',
    fontFamily:'Montserrat-SemiBold'
  };

  React.useEffect(()=>{
    
    if(userData.coverage_city !== ""){
      let ArrayFilter=barriosSublist.filter((obj)=> obj.location.toString() === findLocation(userData.coverage_city).toString());
      setBarrios(ArrayFilter);
    }

  },[userData])
  





  /* FUNCTIONS */

  const InputTextRead=(text,type)=>{

    setUserData({...userData,[type]:text});

  }

  const InputSelectRead=(value,type)=>{

    if(type!=='coverage_city'){
      if(value === null){
        setUserData({...userData,[type]:""});
      }else{
        setUserData({...userData,[type]:value});
      }
    }else{
      if(value === null){
        setUserData({...userData,[type]:"",['city']:""});
      }else{
        setUserData({...userData,[type]:value,['city']:value});
      }
    }

  }

  const register =async()=>{

     if(userData.address!=="" && userData.city!=="" && userData.coverage_city!=="" && userData.date_birth!=="" && userData.department!=="" && userData.email && userData.eps!=="" && userData.first_name!=="" && userData.genre!=="" && userData.identification!=="" && userData.identification_type!=="" && userData.last_name && userData.neighbourhood && userData.password!=="" && userData.phone!=="" && userData.regime_type!=="" && userData.second_last_name!=="" && userData.second_name!==""){
         setPreloader(true);
          let result=await initRegister(userData).catch((error)=>{
            console.log(error);
            setPreloader(false);
            handleError();
          })

          if(result !== undefined){
            setPreloader(false);
            handleSuccess();
          }
     }else{
       handleInfo();
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


  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  /* LIST FORM DATA */

  let FormInputs=[
    
    {title:"1",data:[{id:1,type:'email',placeholder:'Email' ,icon:'email' ,typeIcon:'',typeForm:'input',data:[]}]},
    {title:"2",data:[{id:2,type:'password',placeholder:'Contraseña' ,icon:'lock' ,typeIcon:'font-awesome',typeForm:'password',data:[]}]},
    {title:"3",data:[{id:3,type:'first_name',placeholder:'Primer nombre' ,icon:'user' ,typeIcon:'font-awesome',typeForm:'input',data:[]}]},
    {title:"4",data:[{id:4,type:'second_name',placeholder:'Segundo nombre' ,icon:'user' ,typeIcon:'font-awesome',typeForm:'input',data:[]}]},
    {title:"5",data:[{id:5,type:'last_name',placeholder:'Primer apellido' ,icon:'user' ,typeIcon:'font-awesome',typeForm:'input',data:[]}]},
    {title:"6",data:[{id:6,type:'second_last_name',placeholder:'Segundo apellido' ,icon:'user' ,typeIcon:'font-awesome',typeForm:'input',data:[]}]},
    {title:"7",data:[{id:7,type:"identification_type",placeholder:"Tipo de identificación" ,data:[
      { value: "CC", label: "CC" },
      { value: "DI", label: "DI" },
      { value: "CE", label: "CE" },
      { value: "NIE", label: "NIE" }
    ],open:open2,setOpen:setOpen2,typeForm:'dropdown'}]},

     {title:"8",data:[{id:8,type:'identification',placeholder:'Documento Ident.' ,icon:'id-card' ,typeIcon:'font-awesome',typeForm:'input',data:[]}]},
     {title:"9",data:[{id:22,typeForm:'date',data:[]}]},
     {title:"10",data:[{id:9,type:'phone',placeholder:'Número celular' ,icon:'phone',typeIcon:'font-awesome' ,typeForm:'input',data:[]}]},
     {title:"11",data:[{id:10,type:'department',placeholder:'Departamento' ,icon:'location-city' ,typeIcon:'',typeForm:'input',data:[]}]},
     {title:"14",data:[{id:13,type:"coverage_city",placeholder:"Ciudad cobertura" ,data:cities,open:open3,setOpen:setOpen3,typeForm:'dropdown'} ]},
     {title:"13",data:[{id:12,type:"neighbourhood",placeholder:"Barrio" ,data:cities,open:open5,setOpen:setOpen5,typeForm:'select'} ]},
     {title:"15",data:[{id:14,type:"genre",placeholder:"Género" ,data:[
       { value: "Masculino", label: "Masculino" },
       { value: "Femenino", label: "Femenino" }
     ],open:open4,setOpen:setOpen4 ,typeForm:'dropdown'}]},
    
     {title:"16",data:[{id:15,type:'address',placeholder:'Dirección' ,icon:'directions' ,typeIcon:'',typeForm:'input',data:[]}]},

     {title:"17",data:[{id:16,type:'eps',placeholder:'eps' ,icon:'hospital' ,typeIcon:'font-awesome-5',typeForm:'input',data:[]}]},

     {title:"18",data:[{id:17,type:'regime_type',placeholder:"Seleccione Régimen" ,data:[
       { value: "contributivo", label: "Contributivo" },
       { value: "subsidiado", label: "Subsidiado" }
     ],open:open,setOpen:setOpen,typeForm:'dropdown'}]},
     {title:'19',data:[{typeForm:'submit'}]},
]


  const renderFormItem = ({ item }) => {
   
    switch (item.typeForm) {
      case 'password':
        return(
          <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,position:'relative',zIndex:10}}>
                  <Input secureTextEntry={showPassword} inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder={item.placeholder} onChangeText={(text)=>InputTextRead(text,item.type)} leftIcon={
                       <>
                        {item.typeIcon==="" ? 
                        <Icon
                          name={item.icon}
                          size={20}
                          color='#7E72D1'
                        />
                        :
                        <Icon
                          name={item.icon}
                          type={item.typeIcon}
                          size={20}
                          color='#7E72D1'
                        />
                        }
                       </> 
                        } 
                        rightIcon={
                        <Icon
                          name={showPassword ? 'visibility' : 'visibility-off'}
                          size={20}
                          color='#7E72D1'
                          onPress={() => setShowPassword(!showPassword)}
                        />
                } 
                          
                  />
          </View>
        );

      case 'input':
        return (
          <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,position:'relative',zIndex:10}}>
                  <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder={item.placeholder} onChangeText={(text)=>InputTextRead(text,item.type)} leftIcon={
                       <>
                        {item.typeIcon==="" ? 
                        <Icon
                          name={item.icon}
                          size={20}
                          color='#7E72D1'
                        />
                        :
                        <Icon
                          name={item.icon}
                          type={item.typeIcon}
                          size={20}
                          color='#7E72D1'
                        />
                        }
                       </> 
                        } 
                          
                  />
          </View>
        );
      case 'dropdown':
        return (
          <View style={{width:'100%',position:'relative',maxWidth:500,marginBottom:20,zIndex:99}}>
                  <DropDownPicker
                      dropDownDirection='TOP'
                      onSelectItem={(value) => InputSelectRead(value.value,item.type)}
                      value={userData[item.type]}
                      placeholder={item.placeholder}
                      items={item.data}
                      open={item.open}
                      setOpen={item.setOpen}
                      style={{
                        zIndex:999,
                        borderWidth: 0,
                        borderBottomWidth: 0.4,
                        borderBottomColor: '#7E72D1',
                        backgroundColor:'transparent',
                        borderRadius:0,
                        marginBottom:30,
                      }}
                      textStyle={{
                        ...Globalstyles.Purple,
                        ...Globalstyles.Medium,
                      }}
                    />
                </View>
        );
      case 'date': 
        return(
          <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:2},...{['marginBottom']:2}}}>
          <Input onTouchStart={() => {showMode('date')} } inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Fecha de nacimiento' editable={true} value={userData.date_birth} leftIcon={
                <Icon
                  name='calendar'
                  type='font-awesome'
                  size={20}
                  color='#7E72D1'
                />}  
          />

          {show && (
            <DateTimePicker
            testID='dateTimePicker'
            locale="es-ES"
            value={date}
            mode={mode}
            style={stylesDate.datePicker}
            is24Hour={true}
            display='default'
            onChange={onChangeDate}
            ></DateTimePicker>
          )}
          </View>

      );

      case 'submit':
        return(
          <View style={{...styles.InputsDesignContainer,...{['flexDirection']:'column',['alignItems']:'center'},...{['marginTop']:5}}}>
              <TouchableOpacity style={styles.buttonIn} onPress={register}>
                <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Registrar</Text>
              </TouchableOpacity>
              <CustomModal visible={showModal} onClose={()=>setShowModal(false)} message={message} iconName={iconName}></CustomModal>
          </View>
        );
      
      case 'select':
        return(
          <View style={{width:'100%',maxWidth:500,marginBottom:20}}>
            <RNPickerSelect
                    placeholder={placeholder_type}
                    onValueChange={(value) => InputSelectRead(value,"neighbourhood")}
                    items={barrios}
            />
          </View>
        )
       

      default:
        return null
    }
  };

  return (
    <>
    {preloader ? 
     <LoadingScreen/>
     :
     <></>
    }
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Start')}></Icon>
      </View>
      <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,...{['width']:'100%'},position: 'relative'}}>
         <Image
                style={{ width: 100, height: 100, marginBottom: 15, position:'absolute',top:-50 }}
                source={require("../../../../assets/Registro/Icono-Mano-Registro.png")}
         />
         <Text style={{...Globalstyles.Semibold,...Globalstyles.Title,...Globalstyles.Orange,...{['marginBottom']:40}}}>Registro</Text>
         <Text style={{...Globalstyles.Semibold,...Globalstyles.Purple,...Globalstyles.text,...{['marginBottom']:10,textAlign:'center'}}}>Llena todos los campos y dale registrar para completar el registro</Text>
        <SectionList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{['width']:'100%',position: 'relative'}}
          sections={FormInputs}
          renderItem={renderFormItem}
          keyExtractor={(item,index) => index.toString()}
        />
        
      </LinearGradient>
    </View>
    </>
    
  )
}
