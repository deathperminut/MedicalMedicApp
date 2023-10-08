import { View, Text, Image , useWindowDimensions,StyleSheet,TouchableOpacity  } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import Globalstyles from '../../../../../Shared/Icons/GlobalStyles';
import LogotipoMedicalColor from '../../../../../Shared/Icons/Logotipo-Medical-Color';

export default function SwiperItem(props) {

  const {width,height}=useWindowDimensions();

  let {navigation}=props.props

  return (
    <View style={[styles.container]}>
      {props.item.id=='1' ? 
      <>
       <Image source={require('../../../../../assets/Home/BG-Medical.png')} style={[styles.image,{width,height,resizeMode:'cover'}]}></Image>
      </>
      :
      <>
       {props.item.id=='2' ?
       <Image source={require('../../../../../assets/Home/BG-EPS.png')} style={[styles.image,{width,height,resizeMode:'cover'}]}></Image>
       :
       <Image source={require('../../../../../assets/Home/BG-Particular.png')} style={[styles.image,{width,height,resizeMode:'cover'}]}></Image>
       }

      </>
      }

      <View style={styles.MainContainer}>
        <View style={{...styles.navBar,marginBottom:200,paddingLeft:40,paddingRight:40}}>
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Drawer')}>
                <Icon name="chevron-left" type="font-awesome" size={20} color="#fff" />
            </TouchableOpacity> 
            <LogotipoMedicalColor style={styles.iconContainer}></LogotipoMedicalColor>
        </View>
        
        <Text style={{...Globalstyles.Medium , ...Globalstyles.white, ...Globalstyles.Title}} >Paciente</Text>
        <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Title,marginBottom:'35%'}}>{props.item.title}</Text>
        <View style={{...styles.whiteBox,alignItems:'center'}}>
            <View style={{...styles.PointersContainer}}>
            </View> 
            <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Title, ...{marginTop:'0%'}, ...{color:'#642B80'}}}>{props.item.title}</Text>
            <Text style={{...Globalstyles.bold, ...Globalstyles.white, ...Globalstyles.Medium, ...{marginTop:'5%'},...{paddingHorizontal:'10%'}, ...{color:'#9D91F4'},textAlign:'center'}}>{props.item.text}</Text>

        </View>
            
      </View>
    
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
       flex:1,
       justifyContent:'center',

    }
    ,
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color:'#493d8a',
        textAlign:'center',
    },
    text:{
        fontWeight:'300',
        color:'#62656b',
        textAlign:'center',
        paddingHorizontal:64,
    },
      imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width:'100%',
        height:'100%'
      },
      button: {
        backgroundColor: '#642B80',
        paddingVertical: 10,
        borderRadius: 50,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        flexDirection: 'row', // nuevo
      },
      buttonBack:{
        position: 'relative',
        // left: 40,
        // aspectRatio: 1,
        // top: 100,
      },
      buttonText: {
        fontSize: 12.59,
        color: '#FFF',
        marginLeft: 5, // nuevo
      },
      MainContainer: { 
        width: '100%',
        height: '100%', 
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        paddingTop:20
      },
      iconContainer:{
        // position: 'absolute', 
        // top: 10, 
        // right: 20, 
        width: 200, 
        height:100,
        // aspectRatio: 1,
        // marginRight: 20,
      },
      navBar:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      PointersContainer:{
        position:'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:20,
        marginBottom:20,
      },
      Pointer_1:{
        height: 8,
        marginRight: 10,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#E6B3FF',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      Pointer_2:{
        height: 8,
        width: 8,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: '#FFC47A',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      Pointer_3:{
        height: 8,
        width: 8,
        borderRadius: 5,
        backgroundColor: '#92D0FF',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      whiteBox: {
        width: '100%',
        height: '80%',
        backgroundColor: 'white',
        borderTopLeftRadius:50
      }
})