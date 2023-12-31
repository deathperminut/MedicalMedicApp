import React, {useEffect} from 'react';
import { View, ImageBackground} from 'react-native';
import styles from './BeginScreenStyle';
import LogotipoMedicalColor from '../../../Shared/Icons/Logotipo-Medical-Color';
import { Image } from 'react-native-elements';


export default function BeginScreen(props){
  /*
  Esta pestaña es transitoria para el inicio de la aplicación,
  donde solo se muestra una imagen, luego con un timeOut pasado un tiempo
  nos desplazamos a la pestaña de inicio de la aplicación
  */
  let {navigation}=props

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Start' }],
      });
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <View style={styles.conteiner}>
      <ImageBackground
        source={require('../../../assets/Splash/Splash-BG.png')}
        style={styles.imageBackground}>
      </ImageBackground>
      <View style={styles.MainContainer}>
        <View style={{
          width: 300,
          height: 97,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center'
        }}>
          <Image
            style={{   
              width: 280,
              height: 90             
            }}
            source={require("../../../assets/Ingresar/logo_medical.png")}
          />
        </View>
      </View>
    </View>
  )
}



