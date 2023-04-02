import React from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import LottieView from 'lottie-react-native';


export const Loader = (props) => {
    const {loading} = props;

    return(
        <Modal transparent = {true} animationType={'none'} visible ={loading}>
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator animating = {loading} size='small' color ={'green'}>
                    <LottieView
                        source={require('../../assets/Splash/zK2xt5MiJE.json')}
                        autoPlay
                        loop
                    />
                    </ActivityIndicator>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    activityIndicatorWrapper:{
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-around'
    },
})