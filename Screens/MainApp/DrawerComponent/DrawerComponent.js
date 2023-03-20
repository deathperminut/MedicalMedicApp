import { View, Text ,TouchableOpacity,Button} from 'react-native'
import React from 'react'
import { Drawer } from 'react-native-drawer-layout';
import Beneficient from '../Beneficient/Beneficient';
import Lobby from '../Lobby/Lobby';



export default function DrawerComponent(props) {
  const [open, setOpen] = React.useState(false);
    /* NAVIGATION */
  //const Drawer=createDrawerNavigator();
  
  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}
    >
      <Lobby props={props}></Lobby>
    </Drawer>
  )
}