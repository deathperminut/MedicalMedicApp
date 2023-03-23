import { View, Text,ImageBackground,ScrollView,TouchableOpacity ,TextInput } from 'react-native'
import React, { useState } from 'react';
import styles from './ReportStyles';
import LogoMedicalComplete from '../../../Shared/Icons/LogoMedicalComplete';
import { Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';



export default function Reports(props) {

  let {navigation}=props;

  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');
  const [texto, setTexto] = useState('');

  const opcionesSelect1 = ['Opción 1', 'Opción 2', 'Opción 3'];
  const opcionesSelect2 = ['Opción A', 'Opción B', 'Opción C'];

  const handleSelect1 = (opcion) => {
    setSelect1(opcion);
  };

  const handleSelect2 = (opcion) => {
    setSelect2(opcion);
  };

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
            <ImageBackground source={require('../../../assets/Home/Foto-Usuario.png')} style={styles.photo}></ImageBackground>
            <LogoMedicalComplete style={{width:160,height:100}}></LogoMedicalComplete>
          </View>
          <Text style={{...Globalstyles.bold,...Globalstyles.white,...Globalstyles.SubTitle_2}}>Alejandro Soto</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>70 años</Text>
          <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.bold}}>Manizales | <Text style={{...Globalstyles.Medium,...Globalstyles.PurpleWhite2,...Globalstyles.text}}>Clle 98 #35-37 la enea</Text></Text>
        </View>
        <LinearGradient colors={['#FFFFFF', '#F6F4FF']} style={styles.FormContainer}>
          <Text style={{...Globalstyles.Semibold,...Globalstyles.Purple,fontSize:20,marginBottom:20}}>Reporta estado del paciente o novedades</Text>
          
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16}}>
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
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16}}>
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
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16}}>
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
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16}}>
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
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16}}>
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
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16}}>
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
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16}}>
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
          <View style={{padding:10,alignItems:'center',flexDirection:'row',width:'100%',height:80,backgroundColor:'#F6F4FF',borderRadius: 10, marginBottom:16}}>
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
                style={{...styles.textArea,...Globalstyles.Medium,marginBottom:100}}
                value={texto}
                onChangeText={handleTexto}
                placeholder="Escribe aquí..."
                placeholderTextColor="#B0A8EA80"
                multiline
           />
           <TouchableOpacity style={styles.buttonIn} onPress={() => navigation.navigate('Beneficient')}>
                      <Text style={{...styles.buttonText,...Globalstyles.Medium}}>Actualizar</Text>
           </TouchableOpacity>
           </LinearGradient>
      </View>
      </ScrollView>
      
      </ImageBackground>
    </View>
  )
}