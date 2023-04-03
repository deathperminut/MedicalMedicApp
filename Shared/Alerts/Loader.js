import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/Splash/zK2xt5MiJE.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    position:'absolute',
    width:'100%',
    zIndex:2,
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(41, 50, 65, 0.8)',
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default LoadingScreen;
