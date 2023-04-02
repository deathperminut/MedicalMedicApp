import { View, Text ,ImageBackground,ScrollView,Dimensions,TouchableOpacity,Modal, StyleSheet,Image} from 'react-native'
import React, { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import LogoMedicalComplete from '../../../../Shared/Icons/LogoMedicalComplete';
import styles from './SelectPatientStyle'
import Globalstyles from '../../../../Shared/Icons/GlobalStyles'
import RNPickerSelect from "react-native-picker-select";
import { styles_shadow } from '../../OurServices/OurServicesStyles';

export default function SelectPatient(props) {

   /* PANTALLA */
   const windowHeight = Dimensions.get('window').height;
   const newHeight = windowHeight  - 100;

  /* FOR SELECT */
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  /* NAVIGATION */
  
  let {navigation}=props;

  return (
    <View style={styles.container}>
    <ImageBackground source={require('../../../../assets/Home/BG-Medical.png')} style={styles.imageBackground}></ImageBackground>
    <View style={styles.LobbyContainer}>
      <View style={styles.iconContainer}>
        <View style={styles.navBar}>
          <TouchableOpacity>
            <Icon name="chevron-left" color={'#FFF'} size={40} onPress={()=>navigation.navigate('Drawer')}></Icon>
          </TouchableOpacity>
          <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
        </View>
        <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>Alejandro Soto</Text>
        <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>70 años</Text>
        <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>Manizales | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>Clle 98 #35-37 la enea</Text></Text>
      </View>
      <LinearGradient colors={['#FFFFFF', '#695F9766']} style={{...styles.FormContainer,alignItems:'center'}}>
        <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginBottom:7}}>Paciente</Text>
        <Text style={{...Globalstyles.Semibold,...Globalstyles.text,...Globalstyles.gray,marginBottom:20}}>Selecciona si la cita es propia o para un beneficiario</Text>
        <ScrollView style={{width:'100%',marginBottom:5,maxWidth:470,maxHeight:'72.5%'}} showsVerticalScrollIndicator={false}>
          <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#F1EEFE',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                      <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                        <Image source={require('../../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                      </View>
                      <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <View style={{alignItems:'center'}}>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:20,textAlign:'center'}}>Juan Sebastian Méndez Rondón</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>CC. 1005691633</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                      <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                        <Image source={require('../../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                      </View>
                      <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <View style={{alignItems:'center'}}>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:20,textAlign:'center'}}>Juan Sebastian Méndez Rondón</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>CC. 1005691633</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                      <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                        <Image source={require('../../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                      </View>
                      <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <View style={{alignItems:'center'}}>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:20,textAlign:'center'}}>Juan Sebastian Méndez Rondón</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>CC. 1005691633</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                      <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                        <Image source={require('../../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                      </View>
                      <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <View style={{alignItems:'center'}}>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:20,textAlign:'center'}}>Juan Sebastian Méndez Rondón</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>CC. 1005691633</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                      <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                        <Image source={require('../../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                      </View>
                      <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <View style={{alignItems:'center'}}>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:20,textAlign:'center'}}>Juan Sebastian Méndez Rondón</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>CC. 1005691633</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                      <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                        <Image source={require('../../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                      </View>
                      <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <View style={{alignItems:'center'}}>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:20,textAlign:'center'}}>Juan Sebastian Méndez Rondón</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>CC. 1005691633</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                      <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                        <Image source={require('../../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                      </View>
                      <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <View style={{alignItems:'center'}}>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:20,textAlign:'center'}}>Juan Sebastian Méndez Rondón</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>CC. 1005691633</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                      <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                        <Image source={require('../../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                      </View>
                      <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <View style={{alignItems:'center'}}>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:20,textAlign:'center'}}>Juan Sebastian Méndez Rondón</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>CC. 1005691633</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                      <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                        <Image source={require('../../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
                      </View>
                      <View style={{width:'70%',alignItems:'flex-start',justifyContent:'flex-start'}}>
                      <View style={{alignItems:'center'}}>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.BlackPurple,fontSize:20,textAlign:'center'}}>Juan Sebastian Méndez Rondón</Text>
                        <Text style={{...Globalstyles.Medium,...Globalstyles.gray,...Globalstyles.text}}>CC. 1005691633</Text>
                      </View>
                      </View>
                    </TouchableOpacity>
              </View>
         </View>
        </ScrollView>
        
      </LinearGradient>
    </View>
  </View>
  )
}