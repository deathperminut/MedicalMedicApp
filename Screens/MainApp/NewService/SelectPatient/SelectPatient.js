import { View, Text ,ImageBackground,Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import LogoMedicalComplete from '../../../../Shared/Icons/LogoMedicalComplete';
import styles from './SelectPatientStyle'
import Globalstyles from '../../../../Shared/Icons/GlobalStyles'

export default function SelectPatient(props) {
  
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
        <ScrollView style={{width:'100%',marginBottom:5,maxWidth:470,maxHeight:'78%'}} showsVerticalScrollIndicator={false}>
          <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('NewServices')}}>
                <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
              </TouchableOpacity>
            </View>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('NewServices')}}>
                <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
              </TouchableOpacity>
            </View>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('NewServices')}}>
                <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
              </TouchableOpacity>
            </View>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('NewServices')}}>
                <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
              </TouchableOpacity>
            </View>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('NewServices')}}>
                <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
              </TouchableOpacity>
            </View>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('NewServices')}}>
                <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
              </TouchableOpacity>
            </View>

            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('NewServices')}}>
                <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
              </TouchableOpacity>
            </View>
            <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('NewServices')}}>
                <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
        
      </LinearGradient>
    </View>
  </View>
  )
}