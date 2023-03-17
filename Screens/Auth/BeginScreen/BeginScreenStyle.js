import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(126, 114, 209, 0.8)', // El último número es la opacidad (0-1)
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      width: '100%',
      maxWidth: 500, // Ajusta este valor según tu preferencia
    },
    title: { 
      fontSize: 30.36,
      textAlign: 'center',
      color: '#FFF',
      paddingLeft:60,
      paddingRight:60, 
    },
    iconContainer: {
      marginRight: 10,
    },
  });

export default styles;