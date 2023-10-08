import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-drawer-layout';
import Lobby from '../Lobby/Lobby';
import { Icon } from 'react-native-elements';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import LogoMedicalWhite from '../../../Shared/Icons/LogoMedicalWhite';
import { AppContext } from '../../../AppContext/Context';

export default function DrawerComponent(props) {
  const [open, setOpen] = React.useState(false);
  //const Drawer=createDrawerNavigator();
  
  function DrawerC(props){

    let { Logout }=React.useContext(AppContext); 

    /* NAVIGATION */
    let {navigation}=props.props

    return(
      <View>
              <View style={{alignItems:'center'}}>
                <View style={{backgroundColor:'#6149cd',width:100,height:100,borderRadius:50,marginTop:20}}>
                   <LogoMedicalWhite style={{width:150,height:100}}></LogoMedicalWhite>
                </View>
                
                <View style={{width:'100%',marginTop:70,height:'90%',alignItems:'center',paddingTop:20}}>
                  
                  <TouchableOpacity style={{marginBottom:40,flexDirection:'row'}} onPress={()=>navigation.navigate('EditPerfil')}>
                  <Icon
                      name='user'
                      type='font-awesome'
                      size={20}
                      color='#3E4898'
                      style={{marginRight:13}}

                    />
                    <Text style={{color:'blue',...Globalstyles.white,...Globalstyles.Medium}}>Editar Perfil</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginBottom:40,flexDirection:'row'}} onPress={()=>{
                    Logout()
                    navigation.navigate('Start')
                  }}>
                    <Icon
                      name='arrow-left'
                      type='font-awesome'
                      size={20}
                      color='#3E4898'
                      style={{marginRight:17}}
                    />
                    <Text style={{color:'blue',...Globalstyles.white,...Globalstyles.Medium}}>Cerrar Sesión</Text>
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
      drawerStyle={{backgroundColor:'#090131',width:180}}
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