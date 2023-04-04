import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import * as imagePicker from 'expo-image-picker';

const ImagePicker = (props) => {


  const [imageUri, setImageUri] = useState('');

  const selectImage = async () => {
    try {
      const result = await imagePicker.launchImageLibraryAsync({
        mediaTypes: imagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      console.log(result.assets[0].uri);

      if (!result.canceled) {
         
         setImageUri(result.assets[0].uri);
         
         let file=await createFile(result.assets[0].uri);
         // Descargar la imagen como un objeto binario
         // const response = await fetch(result.uri);
         //  const File = await response.blob();
         props.ReturnFile(file);
       }
    } catch (error) {
      //console.log('Error selecting image', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={selectImage}>
            {imageUri ? 
              <View style={{...styles.InputsDesignContainer,...styles.PictureContainer}}>
                <Image style={{ width: 80, height: 80, borderRadius:50}} source={{ uri: imageUri }} />
              </View>
              
            :
            <View style={{...styles.InputsDesignContainer,...styles.PictureContainer}}>
                    <Image
                    style={{ width: 70, height: 70, }}
                    source={require("../../assets/Registro/Subir-Foto.png")}
                    />
            </View>

            }
            
        
        </TouchableOpacity>
    </View>
  );
};

export default ImagePicker;

import { StyleSheet } from 'react-native';
import { createFile } from '../../services/Files/files';

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'#F19420',
    alignItems:'center'
  },
  IconContainer: {
    width:'100%',
    height:'15%',
    minHeight:120,
    paddingTop:50,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    paddingLeft:20,
  },
  PictureContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:80,
  },
  CameraIconContainer:{
    width:60,
    height:60,
    backgroundColor:'#642B80',
    borderRadius:40,
    alignItems:'center',
    justifyContent:'center'
  },
  FormContainer:{
    maxWidth:600,
    width:'100%',
    alignItems:'center',
    height:'85%',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    padding:40,
    paddingTop:50,

  },
  InputsDesign:{

    borderBottomColor: '#7E72D1',
    borderBottomWidth: 0.6,

  },
  InputsDesignContainer:{

    width:'100%',
  },
  PositionRe:{
    position:'relative',
    bottom:15

  },
  RememberContainer:{

  },
  buttonIn: {
    backgroundColor: '#642B80',
    paddingVertical: 20,
    borderRadius: 50,
    paddingHorizontal:30,
    width: 300,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:25
  },
  buttonUp: {
    backgroundColor: 'transparent',
    borderColor:'#9D91F4',
    borderWidth:1,
    paddingVertical: 20,
    borderRadius: 50,
    paddingHorizontal:30,
    justifyContent:'center',
    alignItems:'center',
    width: 300,
    
  },
  buttonText: {
    fontSize: 12.59,
    color: '#FFF',
  },

  });