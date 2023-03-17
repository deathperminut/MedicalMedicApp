import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MH_WS from './components/MH_WS';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MH_WS />
    </View>
  );
};
