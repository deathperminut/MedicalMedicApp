import { View, Text ,ImageBackground,Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import styles from './BeneficientStyles'
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import { styles_shadow } from '../OurServices/OurServicesStyles';
import { AppContext } from '../../../AppContext/Context';
import { GetName } from '../../../services/Auth/Login/Login';
import { getAge } from '../../../services/DateManagement/DateManagement';


export default function Beneficient(props) {

  /* APP CONTEXT */
  let {userData, setUserData, token, setToken,currentDate,setCurrentDate} =React.useContext(AppContext);
  
  /* NAVIGATE */
  let {navigation}=props

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Home/BG-Medical.png')} style={styles.imageBackground}></ImageBackground>
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
        </View>
        <LinearGradient colors={['#FFFFFF', '#695F9766']} style={{...styles.FormContainer,alignItems:'center'}}>
          <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,marginBottom:20}}>Beneficiarios</Text>
          <View style={{width:'100%',alignItems:'center'}}>
            <View>
                <TouchableOpacity style={{width:30,height:30,borderRadius:30,backgroundColor:'#F19420',alignItems:'center',justifyContent:'center',marginBottom:20}} onPress={()=>{navigation.navigate('RegisterBeneficient')}}>
                        <Text style={{textAlign:'center',...Globalstyles.white,textAlignVertical:'center',...Globalstyles.Title,position:'relative',bottom:7}}>+</Text>
                </TouchableOpacity>
            </View>
          </View>
          <ScrollView style={{width:'100%',marginBottom:0,maxWidth:470,maxHeight:'160%',height:'140%'}} showsVerticalScrollIndicator={false}>
            <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <TouchableOpacity onPress={()=>navigation.navigate('EditBeneficient')}  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                          <Image source={require('../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
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
                      <TouchableOpacity onPress={()=>navigation.navigate('EditBeneficient')}  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                          <Image source={require('../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
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
                      <TouchableOpacity onPress={()=>navigation.navigate('EditBeneficient')}  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                          <Image source={require('../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
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
                      <TouchableOpacity onPress={()=>navigation.navigate('EditBeneficient')}  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                          <Image source={require('../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
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
                      <TouchableOpacity onPress={()=>navigation.navigate('EditBeneficient')}  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                          <Image source={require('../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
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
                      <TouchableOpacity onPress={()=>navigation.navigate('EditBeneficient')}  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                          <Image source={require('../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
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
                      <TouchableOpacity onPress={()=>navigation.navigate('EditBeneficient')}  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                          <Image source={require('../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
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
                      <TouchableOpacity onPress={()=>navigation.navigate('EditBeneficient')}  style={{flexDirection:'row', marginBottom:5,width:'90%',height:90,backgroundColor:'#FFFFFF',borderRadius:20,padding:10,alignItems:'flex-start',justifyContent:'center',...styles_shadow}}>
                        <View style={{width:70,height:70,padding:20,alignItems:'center',borderRadius:500,overflow:'hidden',justifyContent:'center',marginRight:10}}>
                          <Image source={require('../../../assets/Home/Foto-Usuario.png')} style={{resizeMode:'cover',width:70,height:70}}></Image>
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