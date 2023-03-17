import { View, Text,Button } from 'react-native'
import React from 'react'

export default function StartScreen(props) {

 console.log(props);
 let {navigation}=props;

 let [variable,setVariable]=React.useState(0);

 let variable_1=0

 /* USEEFFECT */

 React.useEffect(()=>{
  console.log("HOLA MUNDO")
 },[variable])

 let GoToBegin=()=>{

    navigation.navigate('Begin');

 }

  return (
    <View>
      <Text>{variable}</Text>
      <Text>{variable_1}</Text>
      <Button onPress={GoToBegin} title={'Go To Begin'}></Button>
      <Button onPress={()=>{setVariable(variable+1)}} title={'Count'}></Button>
      <Button onPress={()=>{variable_1=variable_1+1;
        console.log(variable_1)
      }} title={'Count'}></Button>
    </View>
  )
}