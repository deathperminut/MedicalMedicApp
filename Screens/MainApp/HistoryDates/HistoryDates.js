import { View, Text ,ImageBackground,Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import Globalstyles from '../../../Shared/Icons/GlobalStyles'
import styles from './HistoryDatesStyles'

export default function HistoryDates(props) {
    /* NAVIGATE */
  let {navigation}=props

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Home/BG-Particular.png')} style={styles.imageBackground}></ImageBackground>
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
        <LinearGradient colors={['#FFFFFF', '#1671B7']} style={{...styles.FormContainer,alignItems:'center'}}>
          <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.blueWhite,marginBottom:20}}>Historia de citas</Text>
          <View style={{...styles.PointersContainer}}>
              <View style={styles.Pointer_1}></View>
              <View style={styles.Pointer_2}></View>
              <View style={styles.Pointer_3}></View>
          </View>
          <ScrollView style={{width:'100%',marginBottom:5,maxWidth:470,maxHeight:'78%'}} showsVerticalScrollIndicator={false}>
            <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,width:'90%',height:150,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.blueWhite,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}><Text style={{...Globalstyles.Medium,...Globalstyles.text,textAlign:'center'}}>Visita médica domiciliaria</Text></Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>2020-05-21 <Text style={{...Globalstyles.Medium,...Globalstyles.text,textAlign:'center'}}>7:00 AM / 8:00 AM</Text></Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,width:'90%',height:150,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.blueWhite,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}><Text style={{...Globalstyles.Medium,...Globalstyles.text,textAlign:'center'}}>Visita médica domiciliaria</Text></Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>2020-05-21 <Text style={{...Globalstyles.Medium,...Globalstyles.text,textAlign:'center'}}>7:00 AM / 8:00 AM</Text></Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,width:'90%',height:150,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.blueWhite,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}><Text style={{...Globalstyles.Medium,...Globalstyles.text,textAlign:'center'}}>Visita médica domiciliaria</Text></Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>2020-05-21 <Text style={{...Globalstyles.Medium,...Globalstyles.text,textAlign:'center'}}>7:00 AM / 8:00 AM</Text></Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,width:'90%',height:150,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.blueWhite,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}><Text style={{...Globalstyles.Medium,...Globalstyles.text,textAlign:'center'}}>Visita médica domiciliaria</Text></Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>2020-05-21 <Text style={{...Globalstyles.Medium,...Globalstyles.text,textAlign:'center'}}>7:00 AM / 8:00 AM</Text></Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,width:'90%',height:150,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.SubTitle_2,...Globalstyles.blueWhite,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}><Text style={{...Globalstyles.Medium,...Globalstyles.text,textAlign:'center'}}>Visita médica domiciliaria</Text></Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>2020-05-21 <Text style={{...Globalstyles.Medium,...Globalstyles.text,textAlign:'center'}}>7:00 AM / 8:00 AM</Text></Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          
        </LinearGradient>
      </View>
    </View>
  )
}