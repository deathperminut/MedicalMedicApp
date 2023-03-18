import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height:'100%',
  },
  //tittle
  tittleContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 16,
    // width: '100%',
    // paddingTop:150,
    // marginVertical:10,
  },
  title: { 
    // fontSize: 30.36,
    // // fontFamily: 'Montserrat-SemiBold',
    // textAlign: 'center',
    // color: '#FFF',
    // paddingLeft:60,
    // paddingRight:60, 
  },
  MainContainer: {
     
    width:'100%',
    height:'100%', 
    flexDirection:'column',
    alignItems:'center',
    position:'absolute',
    paddingTop:'45%'
  },
  iconContainer:{
    marginBottom:'20%'
  },
  //buttons
  buttonContainerWrapper: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
    // width: '100%',
    // paddingBottom:40,

  },
  buttonContainerIn: {
    // flex: 1,
    // justifyContent: 'center',
    // flexDirection:'column',
    // justifyContent:'flex-end',
    // alignItems: 'flex-end',
    // width:'100%',
    // marginBottom:20,
    
  },
  buttonContainerUp: {
    // flex: 1,
    // justifyContent: 'center',
    // flexDirection:'column',
    // justifyContent:'flex-end',
    // alignItems: 'flex-end',
    // width:'100%',
    
  },
  buttonIn: {
    // backgroundColor: '#642B80',
    // borderRadius: 50,
    // borderTopRightRadius: 0,
    // borderBottomRightRadius: 0,
    // width: 200,
  },
  buttonUp: {
    backgroundColor: 'transparent',
    borderColor:'#F19420',
    borderWidth:1,
    paddingVertical: 20,
    borderRadius: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal:30,
    width: '60%',
    
  },
  buttonText: {
    fontSize: 12.59,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft:40,
  },

  //flatlist
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    width: '100%',
  },
  card: {
    padding: 16,
    marginHorizontal: 8,
    width: 270,
  },
  cardDescription: {
    fontSize: 13,
    // fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    marginBottom: 5,
  },
  cardIndicator: {
    backgroundColor: '#CCC',
    width: 20,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 10,
  },  
});
export default styles;