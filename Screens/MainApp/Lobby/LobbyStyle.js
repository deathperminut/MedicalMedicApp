import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center'
  },
  LobbyContainer:{
    width:'100%',
    height:'150%',
    // alignItems:'center',
  },
  imageBackground: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems:'center',
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
    paddingTop:'45%',
    paddingLeft:'10%',
    paddingRight:'10%'
  },
  PointersContainer:{
    height:'10%',
    flexDirection:'row',
    justifyContent:'center',
  },
  Pointer_1:{
    height:8,
    marginRight:10,
    width:8,
    borderRadius:5,
    borderWidth:0,
    backgroundColor:'#7E72D1',
    flexDirection:'row',
    justifyContent:'center',
  },
  options:{
    width:250,
    height:140,
    borderRadius:20,
    backgroundColor:'#FFFFFF',
    marginRight:10,
    alignItems:'center',
    justifyContent:'center',
  },
  Pointer_2:{
    height:8,
    width:8,
    marginRight:10,
    borderRadius:5,
    borderWidth:0,
    backgroundColor:'#F19420',
    flexDirection:'row',
    justifyContent:'center',
  },

  Pointer_3:{
    height:8,
    width:8,
    borderRadius:5,
    borderWidth:0,
    backgroundColor:'#3A9EE9',
    flexDirection:'row',
    justifyContent:'center',
  },
  iconContainer:{
    flexDirection:'column',
    height:250,
    minHeight:80,
    width:'100%',
    padding:20,
    maxWidth:700,
  },
  navBar:{
    width:'100%',
    padding:10,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  photo:{
    width:70,
    height:70,
  },
  FormContainer:{
    width:'100%',
    padding:5,
    maxWidth:700,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingTop:30,

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

     justifyContent: 'center',
     flexDirection:'column',
     justifyContent:'flex-end',
     alignItems: 'flex-end',
     width:'100%',
     marginBottom:20,
    
  },
  buttonContainerUp: {
    flex: 1,
    justifyContent: 'center',
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems: 'flex-end',
    width:'100%',
    
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
    borderColor:'#FFF',
    borderWidth:1,
    paddingVertical: 20,
    borderRadius: 50,
    paddingHorizontal:30,
    justifyContent:'center',
    alignItems:'center',
    width: 300,
    
  },
  buttonText: {
    fontSize: 10,
    color: '#FFF',
  },
  buttonDelete:{

    backgroundColor: 'transparent',
    borderWidth:1,
    borderColor:'#FF0057',
    borderRadius: 50,
    paddingHorizontal:20,
    width: 140,
    height:40,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:25

  },

  ServicesContainer:{
    maxWidth:600,
    width:'100%',

    height:'85%',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    padding:40,
    paddingTop:50,
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