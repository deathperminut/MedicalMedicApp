
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'#7E72D1',
    alignItems:'center'
  },
  IconContainer: {
    width:'100%',
    height:'15%',
    minHeight:120,
    paddingTop:50,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    paddingLeft:20,
  },
  FormContainer:{
    maxWidth:600,
    width:'100%',
    alignItems:'center',
    height:'85%',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    padding:40,
    paddingTop:50,

  },
  InputsDesign:{

    borderBottomColor: '#7E72D1',
    borderBottomWidth: 0.6,

  },
  InputsDesignContainer:{

    width:'100%',
  },
  PositionRe:{
    position:'relative',
    bottom:15

  },
  RememberContainer:{

  },
  buttonIn: {
    backgroundColor: '#642B80',
    paddingVertical: 20,
    borderRadius: 50,
    paddingHorizontal:30,
    width: 300,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:25
  },
  buttonUp: {
    backgroundColor: 'transparent',
    borderColor:'#9D91F4',
    borderWidth:1,
    paddingVertical: 20,
    borderRadius: 50,
    paddingHorizontal:30,
    justifyContent:'center',
    alignItems:'center',
    width: 300,
    
  },
  buttonText: {
    fontSize: 12.59,
    color: '#FFF',
  },


  });
export default styles;