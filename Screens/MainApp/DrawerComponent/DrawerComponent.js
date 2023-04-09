import { View, Text ,TouchableOpacity,Button} from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-drawer-layout';
import Lobby from '../Lobby/Lobby';
import { Icon } from 'react-native-elements';
import LogotipoMedicalColor from '../../../Shared/Icons/Logotipo-Medical-Color';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import LogoMedicalWhite from '../../../Shared/Icons/LogoMedicalWhite';
import { AppContext } from '../../../AppContext/Context';

export default function DrawerComponent(props) {
  const [open, setOpen] = React.useState(false);
  //const Drawer=createDrawerNavigator();
  
  function DrawerC(props){

    let { userData, setUserData, token, setToken,Logout }=React.useContext(AppContext); 

    /* NAVIGATION */
    let {navigation}=props.props

    return(
      <View>
              <View style={{alignContent:'center',justifyContent:'center'}}>
                <View style={{backgroundColor:'#3E4898',width:'100%',height:'15%',aligncontent:'center',justifyContent:'center'}}>
                 <LogoMedicalWhite style={{width:110,height:100}}></LogoMedicalWhite>
                </View>
                
                <View style={{width:'100%',marginTop:70,height:'90%',alignItems:'center',paddingTop:20}}>
                  <TouchableOpacity style={{marginBottom:40,flexDirection:'row'}} onPress={()=>navigation.navigate('EditPerfil')}>
                  <Icon
                      name='user'
                      type='font-awesome'
                      size={25}
                      color='#3E4898'
                      style={{marginRight:13,marginLeft:15}}

                    />
                    <Text style={{...Globalstyles.white,...Globalstyles.Medium,color:'#1671B7'}}>Editar Perfil</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginBottom:40,flexDirection:'row'}} onPress={()=>navigation.navigate('Beneficient')}>
                    <Icon
                      name='users'
                      type='font-awesome'
                      size={25}
                      color='#3E4898'
                      style={{marginRight:13,marginLeft:25}}

                    />
                    <Text style={{...Globalstyles.white,...Globalstyles.Medium,color:'#1671B7'}}>Beneficiarios</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginBottom:40,flexDirection:'row'}} onPress={()=>{
                    Logout()
                    navigation.navigate('Login')
                  }}>
                    <Icon
                      name='arrow-left'
                      type='font-awesome'
                      size={25}
                      color='#3E4898'
                      style={{marginRight:13,marginLeft:25}}
                    />
                    <Text style={{...Globalstyles.white,...Globalstyles.Medium,color:'#1671B7'}}>Cerrar Sesión</Text>
                  </TouchableOpacity>
                  </View>
                </View>
                

              </View>
            
    )
  }
    

  return (
    <Drawer
      statusBarAnimation='fade'
      open={open}
      swipeEdgeWidth={50}
      //drawerType={'slide'}
      drawerStyle={{backgroundColor:'#fff',width:'60%'}} //090131
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return (
          <DrawerC props={props}></DrawerC>
        ) ;
      }}
    >
      <Lobby props={props}></Lobby>
    </Drawer>
  )
}