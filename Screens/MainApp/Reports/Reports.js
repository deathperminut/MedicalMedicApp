import { View, Text,ImageBackground,ScrollView,TouchableOpacity ,TextInput,StyleSheet } from 'react-native'
import React, { useState } from 'react';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import { Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import RNPickerSelect from "react-native-picker-select";
import styles from './ReportStyles';
import { styles_shadow } from '../OurServices/OurServicesStyles';

export default function Reports(props) {


  /* NAVIGATION */

  let {navigation}=props;

  /* SELECTS */
  const placeholder = {
    label: 'Seleccione una novedad',
    value: null,
    color: '#9EA0A4',
    fontFamily:'Montserrat-SemiBold'
  };

  const [texto, setTexto] = useState('');

  const handleTexto = (texto) => {
    setTexto(texto);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/Bienvenida-Ingreso/BG-Menú-Ingresar.png')} style={styles.imageBackground}>
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
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
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={{...styles.FormContainer,alignItems:'center'}}>
          <Text style={{...Globalstyles.Semibold,...Globalstyles.Purple,fontSize:20,marginBottom:20}}>Reporta estado del paciente o novedades</Text>
          <View style={{width:'100%',maxWidth:500,marginBottom:20}}>
            <RNPickerSelect
                    style={pickerSelectStyles}
                    placeholder={placeholder }
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "JavaScript", value: "JavaScript" },
                        { label: "TypeScript", value: "TypeScript" },
                        { label: "Python", value: "Python" },
                        { label: "Java", value: "Java" },
                        { label: "C++", value: "C++" },
                        { label: "C", value: "C" },
                    ]}
                />
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16,...styles_shadow}}>
               <Icon
                name="check"
                type="font-awesome"
                color="#00000029"
                size={14}
                containerStyle={{
                    backgroundColor: "transparent",
                    borderRadius: 50,
                    padding: 8,
                    borderWidth:1,
                    borderColor:'#00000029'
                }}
                /> 
                <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                  <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Flevitis</Text>
                  <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Encuentra aquí las recomendaciones que te dejo el médico</Text>
                </View>   
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16,...styles_shadow}}>
               <Icon
                name="check"
                type="font-awesome"
                color="#00000029"
                size={14}
                containerStyle={{
                    backgroundColor: "transparent",
                    borderRadius: 50,
                    padding: 8,
                    borderWidth:1,
                    borderColor:'#00000029'
                }}
                /> 
                <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                  <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Flevitis</Text>
                  <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Encuentra aquí las recomendaciones que te dejo el médico</Text>
                </View>   
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16,...styles_shadow}}>
               <Icon
                name="check"
                type="font-awesome"
                color="#00000029"
                size={14}
                containerStyle={{
                    backgroundColor: "transparent",
                    borderRadius: 50,
                    padding: 8,
                    borderWidth:1,
                    borderColor:'#00000029'
                }}
                /> 
                <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                  <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Flevitis</Text>
                  <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Encuentra aquí las recomendaciones que te dejo el médico</Text>
                </View>   
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16,...styles_shadow}}>
               <Icon
                name="check"
                type="font-awesome"
                color="#00000029"
                size={14}
                containerStyle={{
                    backgroundColor: "transparent",
                    borderRadius: 50,
                    padding: 8,
                    borderWidth:1,
                    borderColor:'#00000029'
                }}
                /> 
                <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                  <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Flevitis</Text>
                  <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Encuentra aquí las recomendaciones que te dejo el médico</Text>
                </View>   
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16,...styles_shadow}}>
               <Icon
                name="check"
                type="font-awesome"
                color="#00000029"
                size={14}
                containerStyle={{
                    backgroundColor: "transparent",
                    borderRadius: 50,
                    padding: 8,
                    borderWidth:1,
                    borderColor:'#00000029'
                }}
                /> 
                <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                  <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Flevitis</Text>
                  <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Encuentra aquí las recomendaciones que te dejo el médico</Text>
                </View>   
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16,...styles_shadow}}>
               <Icon
                name="check"
                type="font-awesome"
                color="#00000029"
                size={14}
                containerStyle={{
                    backgroundColor: "transparent",
                    borderRadius: 50,
                    padding: 8,
                    borderWidth:1,
                    borderColor:'#00000029'
                }}
                /> 
                <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                  <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Flevitis</Text>
                  <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Encuentra aquí las recomendaciones que te dejo el médico</Text>
                </View>   
          </View>
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',maxWidth:500,height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16,...styles_shadow}}>
               <Icon
                name="check"
                type="font-awesome"
                color="#00000029"
                size={14}
                containerStyle={{
                    backgroundColor: "transparent",
                    borderRadius: 50,
                    padding: 8,
                    borderWidth:1,
                    borderColor:'#00000029'
                }}
                /> 
                <View style={{width:'70%',height:'100%',justifyContent:'center',alignItems:'flex-start',marginLeft:10,}}>
                  <Text style={{...Globalstyles.Purple,...Globalstyles.Semibold,fontSize:15}}>Flevitis</Text>
                  <Text style={{...Globalstyles.gray,...Globalstyles.Medium,fontSize:10}}>Encuentra aquí las recomendaciones que te dejo el médico</Text>
                </View>   
          </View>

  
          <TextInput
                style={{...styles.textArea,...Globalstyles.Medium,marginBottom:100,maxWidth:500}}
                value={texto}
                onChangeText={handleTexto}
                placeholder="Escribe aquí..."
                placeholderTextColor="#B0A8EA80"
                multiline
           />
           <TouchableOpacity style={styles.buttonIn} onPress={() => navigation.navigate('Drawer')}>
                      <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Actualizar</Text>
           </TouchableOpacity>
           </LinearGradient>
      </View>
      </ScrollView>
      
      </ImageBackground>
    </View>
  )
}


/* STILOS SELECT */
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        fontFamily:'Montserrat-SemiBold',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#9D91F4',
        borderRadius: 4,
        color: '#9D91F4',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        fontFamily:'Montserrat-SemiBold',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: '#9D91F4',
        borderRadius: 8,
        color: '#9D91F4',
        width:'100%',
        maxWidth:500,
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});