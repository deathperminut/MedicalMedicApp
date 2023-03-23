import { View, Text ,ImageBackground,Image,FlatList,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import styles from './BeneficientStyles'
import Globalstyles from '../../../Shared/Icons/GlobalStyles'


export default function Beneficient(props) {
  
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
          <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>Alejandro Soto</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>70 años</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>Manizales | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>Clle 98 #35-37 la enea</Text></Text>
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
          <View style={{...styles.PointersContainer}}>
              <View style={styles.Pointer_1}></View>
              <View style={styles.Pointer_2}></View>
              <View style={styles.Pointer_3}></View>
          </View>
          <ScrollView style={{width:'100%',marginBottom:0,maxWidth:470,maxHeight:'160%',height:'140%'}} showsVerticalScrollIndicator={false}>
            <View style={{width:"100%",flexDirection:'column',alignItems:'center'}}>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('EditBeneficient')}}>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('EditBeneficient')}}>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('EditBeneficient')}}>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('EditBeneficient')}}>
                  <Text style={{...Globalstyles.Semibold,...Globalstyles.SubTitle_2,...Globalstyles.Purple,textAlign:'center'}}>Juan Sebastian Mendez Rondon</Text>
                  <Text style={{...Globalstyles.Medium,...Globalstyles.text,...Globalstyles.gray,textAlign:'center'}}>C.C 1005691633</Text>
                </TouchableOpacity>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity  style={{flexDirection:'column', marginBottom:5,maxHeight:200,width:'90%',height:100,backgroundColor:'#FFFFFF',borderRadius:20,padding:20,alignItems:'center',justifyContent:'center'}} onPress={()=>{navigation.navigate('EditBeneficient')}}>
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