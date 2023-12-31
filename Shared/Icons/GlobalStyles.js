import { StyleSheet } from 'react-native';

export const styles_shadow_global=StyleSheet.create({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 11,
  },
})
const Globalstyles = StyleSheet.create({
  bold:{
    fontFamily:'Montserrat-Bold'
  },
  Semibold:{
    fontFamily:'Montserrat-SemiBold'
  },
  Medium:{
    fontFamily:'Montserrat-Medium'
  },
  white:{
    color:'#FFF'
  },
  green:{
    color:'#BDFC97'
  },
  BlackPurple:{
    color:'#642B80',
  },
  Purple:{
    color:'#7E72D1'
  },PurpleWhite:{
   color:'#9D91F4'
  },
  PurpleWhite2:{
    color:'#C8C1F8',
  },
  blueWhite:{
    color:'#1671B7'
  },
  gray:{
    color:'gray'
  },
  Orange:{
    color:'#F19420',
  },
  Title:{
   fontSize:29
  },
  SubTitle:{
    fontSize:27
  },
  SubTitle_2:{
    fontSize:20
  },
  text:{
    fontSize:13
  },
  text_2:{
    fontSize: 15
  },
  iconInput:{
    position:'absolute'
  }
});
export default Globalstyles;