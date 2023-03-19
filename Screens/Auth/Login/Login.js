import { View, Text,Switch,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './LoginStyle'
import { Input, Icon } from 'react-native-elements';
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import {LinearGradient} from 'expo-linear-gradient';

export default function Login(props) {

  /* USE STATE */
  let [showPassword,setShowPassword]=React.useState(true);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  /* NAVITATION */
  let {navigation}=props

  return (
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Start')}></Icon>
      </View>
      <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={styles.FormContainer}>
        <Text style={{...Globalstyles.Semibold,...Globalstyles.Title,...Globalstyles.Purple,...{['marginBottom']:40}}}>Hola!</Text>
        <Text style={{...Globalstyles.Medium,...Globalstyles.Purple,...Globalstyles.text,...{['marginBottom']:40}}}>Ingrese con tu usuario y contraseña</Text>
        <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,}}>
          <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Usuario' leftIcon={
                <Icon
                  name='user'
                  type='font-awesome'
                  size={20}
                  color='#7E72D1'
                />}   
          />
        </View>
        <View style={{...styles.InputsDesignContainer,...Globalstyles.Purple,...{['marginTop']:10},...{['marginBottom']:20}}}>
          <Input inputContainerStyle={{ borderBottomColor: '#7E72D1', borderBottomWidth: 0.4 }} secureTextEntry={true} inputStyle={{...Globalstyles.Purple,...Globalstyles.Medium,...{['paddingLeft']:15}}} containerStyle={{ marginVertical: 10 }} placeholder='Contraseña' leftIcon={
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
            <TouchableOpacity style={styles.buttonIn} onPress={() => navigation.navigate('Lobby')}>
                  <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonUp} onPress={() => navigation.navigate('RegisterPatient')}>
                  <Text style={{...styles.buttonText,...Globalstyles.Medium,...Globalstyles.PurpleWhite}}>Registrarse</Text>
            </TouchableOpacity>
        </View>
        
        
      </LinearGradient>
    </View>
  )
}