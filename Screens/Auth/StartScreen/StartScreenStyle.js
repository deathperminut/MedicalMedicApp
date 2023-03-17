import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  tittleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
  },
  title: { 
    fontSize: 30.36,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    color: '#FFF',
    paddingLeft:60,
    paddingRight:60, 
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default styles;