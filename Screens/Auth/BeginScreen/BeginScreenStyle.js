import { StyleSheet } from 'react-native';

const Beginstyles = StyleSheet.create({
    conteiner:{
      width:'100%',
      height:'100%',
    },
    MainContainer:{
      width:'100%',
      height:'100%',
      position:'absolute',
      alignItems:'center',
      justifyContent:'center',
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    iconContainer:{
      flexDirection:'column',
      height:300,
      width:300,
    },
    
  });

export default Beginstyles;