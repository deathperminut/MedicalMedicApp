import { View, Text,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import styles from './LoginStyle'
import { Input, Icon } from 'react-native-elements';
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { initLogin } from '../../../services/Auth/Login/Login';
import LoadingScreen from '../../../Shared/Alerts/Loader';
import CustomModal from '../../../Shared/Alerts/Alert';
import { AppContext } from '../../../AppContext/Context';
import * as Location from 'expo-location';


export default function Login(props) {

  /*
  LOGIN
  --------------------------
  pestaña de inicio de sesión
  */

  /* APP CONTEXT */
 
  let { userData, setUserData, // VARIABLE PARA ALMACENAR DATOS DEL USUARIO
    setToken,  // VARIABLE PARA ALMACENAR CLAVE DE SEGURIDAD 
    setCurrentPosition, // VARIABLE PARA ALMACENAR LA UBICACIÓN DEL USUARIO
    doctorsList // VARIABLE QUE TIENE LA LISTA DE ROLES QUE PUEDEN INGRESAR A LA PLATAFORMA
  }=React.useContext(AppContext);

  React.useEffect(() => {
  //   // Solicitar permisos de ubicación
     requestLocationPermission(); // VALIDAMOS LOS PERMISOS DE GPS
  }, []);

  const requestLocationPermission = async () => {
    /*
    FUNCIÓN PARA VALIDAR LOS PERMISOS QUE DAN ACCESO A LA UBICACIÓN DEL DISPOSITIVO
    */
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
    } else {
      // EN CASO DE SER VALIDADOS SE OBTIENE LA POSICIÓN ACTUAL 
      getCurrentLocation();
    }
  };

  const getCurrentLocation = async () => {
    //SE OBTIENE LA POSICIÓN ACTUAL DEL DISPOSITIVO
    try {
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setCurrentPosition({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };


  /* MODAL USESTATE*/
  const [showModal, setShowModal] = React.useState(false); //VARIABLE PARA MOSTRAR EL MODAL 
  const [message,setMessage]= React.useState(""); // VARIABLE PARA CONTROLAR EL MENSAJE QUE SE MUESTRA EN EL MODAL
  const [iconName,setIconName]=React.useState("");// VARIABLE PARA DEFINIR EL ICONO QUE APARECE EN EL MODAL

  const handleSuccess = () => {
    /* función para definir los textos, el icono y la aparición del modal*/
    setMessage('Login exitoso');
    setIconName('check-circle');
    setShowModal(true);
  };

  const handleError = () => {
    /* función para definir los textos, el icono y la aparición del modal*/
    setMessage('Error comprueba los campos');
    setIconName('error');
    setShowModal(true);
  };
  const handleError_2 = () => {
    /* función para definir los textos, el icono y la aparición del modal*/
    setMessage('No tiene permisos de médico asignados');
    setIconName('error');
    setShowModal(true);
  };
  const handleInfo = () => {
    /* función para definir los textos, el icono y la aparición del modal*/
    setMessage('Faltan campos por completar');
    setIconName('error');
    setShowModal(true);
  };


  /* USE STATE */
  let [preloader,setPreloader]=React.useState(false);
  let [showPassword,setShowPassword]=React.useState(true); // VARIABLE PARA MOSTRAR LA CONTRASEÑA
  const [isEnabled, setIsEnabled] = React.useState(false); // VARIABLE PARA HABILITAR BOTON DE LOGIN
  //VARIABLE PARA REGISTRAR LA INFORMACIÓN DEL USUARIO
  const [user,setUser]=React.useState({
    identification:"",
    password:"",
  })


  /* REACT USE EFFECT */

  React.useEffect(()=>{
    if(userData!==null){
      navigation.navigate('Drawer');// EN CASO DE QUE YA HAYA UN USUARIO REGISTRADO ENTRAMOS DIRECTAMENTE A LA 
      // APP
    }
  },[])

  const [valid,setValid]=React.useState(false); // VALIDACIÓN DE LAS CREDENCIALES

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  /* NAVITATION */
  let {navigation}=props

  /* FUNCTIONS */
  const ReadInput=(text,type)=>{
    /*
    FUNCIÓN PARA LEER LOS INPUTS DEL LOGIN
    */
    setUser({...user,[type]:text});
    validar({...user,[type]:text});
  }

  const validar=(obj)=>{

    // VALIDAMOS EL REGISTRO DE LA INFORMACIÓN
    if (obj.identification!=="" && obj.password!==""){
      setValid(false);
    }else{
      setValid(true);
    }

  }

  /* Alert */
  
  const logIn=async()=>{

    /*
    FUNCIÓN PARA HACER EL LOGUEO EN LA APP
    */
    if(user.identification!=="" && user.password!==""){
      setPreloader(true);
    let result=undefined;
    result=await initLogin(user).catch((error)=>{
       console.log("ERROR: ",error);
       handleError();
       setPreloader(false);
    })
    if (result!==undefined){
       //handleSuccess();
       // SOLO SE ACEPTAR LOS USUARIOS CON ROL DE MÉDICO
       let{ data } = result;
       if(doctorsList.includes(data.datos.datos_usuarios['roles'][0])){
        setUserData(result.data.datos.datos_usuarios);
        setToken(result.data.datos.token);
        setPreloader(false);
        navigation.navigate('Drawer');
       }else{
        setPreloader(false);
        handleError_2();
       }
       
      }

    }else{
        
      handleInfo();

    }

  }

  /* ALERT */
  


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
      <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={styles.FormContainer}>
        <Image
            style={{ width: 100, height: 100, marginBottom: 15, position:'absolute',top:-50 }}
            source={require("../../../assets/Ingresar/Icono-Mano-Ingresar.png")}
         />
        <Text style={{...Globalstyles.Semibold,...Globalstyles.Title,...Globalstyles.Purple,...{['marginBottom']:40}}}>Hola!</Text>
        <Text style={{...Globalstyles.Medium,...Globalstyles.Purple,...Globalstyles.text,...{['marginBottom']:40}}}>Ingresa con tu usuario y contraseña</Text>
        <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,}}> 
          <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Identificación' onChangeText={(text)=>ReadInput(text,'identification')} leftIcon={
                <Icon
                  name='user'
                  type='font-awesome'
                  size={20}
                  color='#7E72D1'
                />}   
          />
        </View>
        <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:10},...{['marginBottom']:20}}}>
          <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} secureTextEntry={showPassword} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Contraseña' onChangeText={(text)=>ReadInput(text,'password')} leftIcon={
                <Icon
                  name='lock'
                  type='font-awesome'
                  size={20}
                  color='#7E72D1'
                />}  
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
        <View style={{...styles.InputsDesignContainer,...{['flexDirection']:'column',['alignItems']:'center'},...{['marginTop']:'20%'}}}>
            <TouchableOpacity style={styles.buttonIn} onPress={logIn}  disabled={valid}>
                  <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Ingresar</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.buttonUp} onPress={() => navigation.navigate('RegisterPatient')}>
                  <Text style={{...styles.buttonText,...Globalstyles.Medium,...Globalstyles.PurpleWhite}}>Registrarse</Text>
            </TouchableOpacity> */}
        </View>
        
        
      </LinearGradient>
      <CustomModal visible={showModal} onClose={()=>setShowModal(false)} message={message} iconName={iconName}></CustomModal>
    </View>
    </>
    
  )
}