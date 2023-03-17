import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './Routes/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
    
  );
};
