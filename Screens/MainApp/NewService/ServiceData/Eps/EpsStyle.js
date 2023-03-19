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
    position: 'absolute',
    left: '10%',
    aspectRatio: 1,
    top: '10%',
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
    paddingTop: '55%',
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  iconContainer:{
    position: 'absolute', 
    top: '5%', 
    right: '5%', 
    width: '35%', 
    aspectRatio: 1,
    marginRight: '10%',
  },
  PointersContainer:{
    marginTop: '100%',
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Pointer_1:{
    height: 8,
    marginRight: 10,
    width: 8,
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
    width: 30,
    borderRadius: 5,
    backgroundColor: '#92D0FF',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
