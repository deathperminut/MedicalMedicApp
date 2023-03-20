import { View, Text ,TouchableOpacity,Button} from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-drawer-layout';
import Lobby from '../Lobby/Lobby';
import { Icon } from 'react-native-elements';
import LogotipoMedicalColor from '../../../Shared/Icons/Logotipo-Medical-Color';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';

export default function DrawerComponent(props) {
  const [open, setOpen] = React.useState(false);
  //const Drawer=createDrawerNavigator();
  
  function DrawerC(props){

    /* NAVIGATION */
    let {navigation}=props.props

    return(
      <View>
              <View style={{alignItems:'center'}}>
                <LogotipoMedicalColor style={{width:170,height:100,position:'relative',right:10}}></LogotipoMedicalColor>
                <View style={{width:'100%',marginTop:70}}>
                  <TouchableOpacity style={{marginBottom:40,flexDirection:'row'}} onPress={()=>navigation.navigate('EditPerfil')}>
                    <Icon
                      name='user'
                      type='font-awesome'
                      size={20}
                      color='#3E4898'
                      style={{marginRight:23}}

                    />
                    <Text style={{color:'blue',...Globalstyles.blueWhite,...Globalstyles.bold}}>Editar Perfil</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginBottom:40,flexDirection:'row'}} onPress={()=>navigation.navigate('Beneficient')}>
                    <Icon
                      name='users'
                      type='font-awesome'
                      size={20}
                      color='#3E4898'
                      style={{marginRight:13}}

                    />
                    <Text style={{color:'blue',...Globalstyles.blueWhite,...Globalstyles.bold}}>Beneficiarios</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{width:'100%',marginBottom:40,flexDirection:'row'}} onPress={()=>navigation.navigate('Login')}>
                    <Icon
                      name='arrow-left'
                      type='font-awesome'
                      size={20}
                      color='#3E4898'
                      style={{marginRight:17}}
                    />
                    <Text style={{color:'blue',...Globalstyles.blueWhite,...Globalstyles.bold}}>Cerrar Sesión</Text>
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
      //drawerType={'slide'}
      drawerStyle={{paddingTop:70,paddingLeft:10,backgroundColor:'#FAFAFB'}}
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