import { View, Text,Switch,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import styles from './LoginStyle'
import { Input, Icon } from 'react-native-elements';
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';
import { initLogin } from '../../../services/Auth/Login/Login';
import { ConfirmationAlert } from '../../../Shared/Alerts/YesNoAlert';
import LoadingScreen from '../../../Shared/Alerts/Loader';
import CustomModal from '../../../Shared/Alerts/Alert';
import { AppContext } from '../../../AppContext/Context';

export default function Login(props) {

  /* APP CONTEXT */

  let { userData, setUserData, token, setToken }=React.useContext(AppContext); 

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
    setMessage('Error comprueba los campos');
    setIconName('error');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  /* USE STATE */
  let [preloader,setPreloader]=React.useState(false);
  let [showPassword,setShowPassword]=React.useState(true);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [user,setUser]=React.useState({
    identification:"",
    password:"",
  })


  /* REACT USE EFFECT */

  React.useEffect(()=>{
    console.log("useEFFECT");
    if(userData!==null){
      navigation.navigate('Drawer');
    }
  },[])

  const [valid,setValid]=React.useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  /* NAVITATION */
  let {navigation}=props

  /* FUNCTIONS */
  const ReadInput=(text,type)=>{
    setUser({...user,[type]:text});
    validar({...user,[type]:text});
  }

  const validar=(obj)=>{

    if (obj.identification!=="" && obj.password!==""){
      setValid(false);
    }else{
      setValid(true);
    }

  }

  /* Alert */
  
  const logIn=async()=>{

    setPreloader(true);
    let result=undefined;
    console.log(user);
    result=await initLogin(user).catch((error)=>{
       console.log("ERROR: ",error,result);
       handleError();
       setPreloader(false);
    })
    if (result!==undefined){
       console.log("RESULTADOS: ",result.data);
       //handleSuccess();
       setUserData(result.data.datos.datos_usuarios);
       setToken(result.data.datos.token);
       setPreloader(false);
       navigation.navigate('Drawer');
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
          <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} secureTextEntry={!showPassword} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Contraseña' onChangeText={(text)=>ReadInput(text,'password')} leftIcon={
                <Icon
                  name='lock'
                  type='font-awesome'
                  size={20}
                  color='#7E72D1'
                />}  
                rightIcon={
                  <Icon
                    name={showPassword ? 'visibility-off' : 'visibility'}
                    size={20}
                    color='#7E72D1'
                    onPress={() => setShowPassword(!showPassword)}
                  />
                } 
            />
        </View>
        <View style={{...styles.InputsDesignContainer,...{['flexDirection']:'row'}}}>
          <Text style={{...Globalstyles.Medium,...Globalstyles.Purple,...Globalstyles.text ,...{['marginRight']:10}}}>Recordar mi contraseña</Text>
          <Switch
            trackColor={{ false: "#9a91F4", true: "#7E72D1" }}
            thumbColor={isEnabled ? "#642B80" : "#7E72D1"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.PositionRe}
          />
        </View>
        <View style={{...styles.InputsDesignContainer,...{['flexDirection']:'column',['alignItems']:'center'},...{['marginTop']:'20%'}}}>
            <TouchableOpacity style={styles.buttonIn} onPress={logIn}  disabled={valid}>
                  <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonUp} onPress={() => navigation.navigate('RegisterPatient')}>
                  <Text style={{...styles.buttonText,...Globalstyles.Medium,...Globalstyles.PurpleWhite}}>Registrarse</Text>
            </TouchableOpacity>
        </View>
        
        
      </LinearGradient>
      <CustomModal visible={showModal} onClose={()=>setShowModal(false)} message={message} iconName={iconName}></CustomModal>
    </View>
    </>
    
  )
}