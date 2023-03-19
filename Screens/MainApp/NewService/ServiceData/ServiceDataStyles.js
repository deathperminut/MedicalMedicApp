import { StyleSheet } from 'react-native';

const DataServiceStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    card: {
      width: '100%',
      height: '100%',
    },
    cardBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      marginBottom: 16,
      textAlign: 'center',
    },
    cardText: {
      fontSize: 16,
      color: '#000',
      textAlign: 'center',
      marginHorizontal: 32,
    },
  });
  

export default DataServiceStyles;