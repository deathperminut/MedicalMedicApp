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
    width:'100%',
    height:'100%'
  },
  button: {
    backgroundColor: '#642B80',
    paddingVertical: 10,
    borderRadius: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    flexDirection: 'row', // nuevo
  },
  buttonBack:{
    position: 'relative',
  },
  buttonText: {
    fontSize: 12.59,
    color: '#FFF',
    marginLeft: 5, // nuevo
  },
  MainContainer: { 
    width: '100%',
    height: '100%', 
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    paddingTop:20
  },
  iconContainer:{
    width: 200, 
    height:100,
  },
  navBar:{
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  PointersContainer:{
    position:'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:20,
    marginBottom:20,
  },
  Pointer_1:{
    height: 8,
    marginRight: 10,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#E6B3FF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Pointer_2:{
    height: 8,
    width: 8,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: '#FFC47A',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Pointer_3:{
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: '#92D0FF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  whiteBox: {
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    borderTopLeftRadius:50
  }
});

export default styles;
