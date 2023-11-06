import { View, Text,Switch,TouchableOpacity,ScrollView,Image,StyleSheet,SectionList} from 'react-native'
import React from 'react'
import { Input, Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import styles from './EditRegisterStyles';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import { AppContext } from '../../../AppContext/Context';
import CustomModal from '../../../Shared/Alerts/Alert';
import DateTimePicker from '@react-native-community/datetimepicker';
import LoadingScreen from '../../../Shared/Alerts/Loader';
import DropDownPicker from 'react-native-dropdown-picker';
import { deleteBeneficient, editUser, getBarrios, getWareLocation } from '../../../services/Auth/Register/EditBeneficient/EditBeneficient';
import RNPickerSelect from 'react-native-picker-select';

export default function EditRegister(props) {

  /*
  PESTAÑA DE EDICIÓN DE USUARIOS
  ----------------------------------------
  */


  
  /* REACT USESTATE */

  // VARIABLE PARA CARGAR LOS BARRIOS REGISTRADOS EN BASE DE DATOS
  let [barrios,setBarrios]=React.useState([]);

  // VARIABLE PARA NAVEGAR POR LAS DIFERENTES PESTAÑAS
  let {navigation}=props

  /* APP CONTEXT */
 let {token,  //TOKEN DE SEGURIDAD DEL BACKEND
  userData,setUserData, // DATOS DEL USUARIO
  setSelectBeneficient // USUARIO SELECCIONADO PARA EDITAR INFORMACIÓN
  }=React.useContext(AppContext); 
  

  
 /* DATE PICKER */
 // VARIABLES PARA CONTROLAR LA VISUALIZACIÓN DEL DATE PICKER
 const [date, setDate] = React.useState(new Date()) // FECHA ACTUAL DEL CALENDARIO
 const [mode, setMode] = React.useState('date'); // MODO DEL CALENDARIO EN ESTE CASO ESTMOAS CON FECHA COMPLETA
 const [show,setShow]  = React.useState(false); // VARIABLE PARA MOSTRAR EL DATEPICKER


 const showMode= (currentMode)=>{
  /*
  función para mostrar el calendar picker en este caso para seleccionar fechas y horas 
  */
   setShow(true); 
   setMode(currentMode);
 }
 const onChangeDate=(event,selectedDate)=>{
  /*
  función para registrar el valor de la fecha seleccionada
  y actualizarla en el objeto del userData_
  */
   const currentDate=selectedDate || date;
   setShow(Platform.OS === "ios");
   setDate(currentDate);

   let tempDate=new Date(currentDate);
   let fDate=tempDate.getFullYear() + "-" + (tempDate.getMonth()) + '-' +tempDate.getDate();
   setUserData_({...userData_,['date_birth']:fDate});
 }

 // variable para controlar el loading screen
 let [preloader,setPreloader]=React.useState(false);
 /* MODAL */
 // variable para controlar los modals
 const [showModal, setShowModal] = React.useState(false); // mostrar el modal
 const [message,setMessage]= React.useState("");// mensaje del modal
 const [iconName,setIconName]=React.useState(""); // icono del modal

 const handleSuccess = () => {
  /* función para definir los textos, el icono y la aparición del modal*/
   setMessage('Acción completada con exito');
   setIconName('check-circle');
   setShowModal(true);
 };

 const handleError = () => {
  /* función para definir los textos, el icono y la aparición del modal*/
   setMessage('Error al completar la acción');
   setIconName('error');
   setShowModal(true);
 };


 
 // variables para definir los placeholders de los formulario 
 const placeholder_type = {
  label: userData.neighbourhood!==null || undefined ? userData.neighbourhood:"Barrio",
  value: userData.neighbourhood!==null || undefined ? userData.neighbourhood:"Barrio",
  color: '#7E72D1',
  fontFamily:'Montserrat-SemiBold'
};


 /* USESTATE */

 let [userData_,setUserData_]=React.useState({...userData}) // variable para editar la información del usuario

 /* FUNCTIONS */

 const InputTextRead=(text,type)=>{
  // función para leer los inputs text del formulario de edición de perfil
   setUserData_({...userData_,[type]:text});
 }

 const InputSelectRead=(value,type)=>{
   // función para leer los inputs select del formulario de edición de perfil 
   if(value === null){
     setUserData_({...userData,[type]:""});
   }else{
     setUserData_({...userData_,[type]:value});

   }
   
 }



 // estilos del datetime picker
 const stylesDate = StyleSheet.create({
   datePicker: {
     backgroundColor: '#fff',
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
     overflow: 'hidden',
   },
 });


 // variables para controlar la apertura de los selects
 const [open, setOpen] = React.useState(false);
 const [open2, setOpen2] = React.useState(false);
 const [open4, setOpen4] = React.useState(false);

 /* LIST FORM DATA */

 // en este arreglo construimos el formulario donde definimos 
 // los placeholders, tipo de campo, opciones de los selects y el estilos de los formularios
 let FormInputs=[
   
   {title:"1",data:[{id:1,type:'email',placeholder:'Email' ,icon:'email' ,typeIcon:'',typeForm:'input',data:[]}]},
   {title:"3",data:[{id:3,type:'name',placeholder:'Primer nombre' ,icon:'user' ,typeIcon:'font-awesome',typeForm:'input',data:[]}]},
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
    {title:"11",data:[{id:12,type:'neighbourhood',placeholder:'Barrio' ,icon:'location-city' ,typeIcon:'',typeForm:'input',data:[]}]},
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

  /*
  metodo para renderizar el formulario generado
  */
 
  switch (item.typeForm) {
    case 'input':
      return (
        <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,position:'relative',zIndex:10}}>
                <Input value={userData_[item.type]?.toString()} inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder={item.placeholder} onChangeText={(text)=>InputTextRead(text,item.type)} leftIcon={
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
                    value={userData_[item.type]}
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
        <Input onTouchStart={() => {showMode('date')} } inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Fecha de nacimiento' editable={true} value={userData_.date_birth} leftIcon={
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
            <TouchableOpacity style={styles.buttonIn} onPress={UPDATEBeneficient}>
              <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Actualizar</Text>
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


const UPDATEBeneficient=async()=>{
  /*
  función para actualizar la información del usuario
  */
  setPreloader(true);
  let result=undefined;
  result=await editUser(userData_,token).catch((error)=>{
    console.log(error);
    setPreloader(false);
    handleError();
  })
  if(result){
    setSelectBeneficient(null);
    handleSuccess();
    setUserData({...result.data,['photo']:result.data['photo_profile'],['name']:result.data.first_name})
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
      <View style={styles.IconContainer}>
        <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Drawer')}></Icon>
      </View>
      <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={styles.FormContainer}>
        <Image
            style={{ width: 100, height: 100, marginBottom: 15, position:'absolute',top:-50 }}
            source={require("../../../assets/Registro/Icono-Mano-Registro.png")}
         />
        <Text style={{...Globalstyles.Semibold,...Globalstyles.Title,...Globalstyles.Orange,...{['marginBottom']:40}}}>Editar Perfil</Text>
        <Text style={{...Globalstyles.Medium,...Globalstyles.Purple,...Globalstyles.text,...{['marginBottom']:10},textAlign:'center'}}>La ciudad de cobertura se debe solicitar con el administrador de la plataforma</Text>
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