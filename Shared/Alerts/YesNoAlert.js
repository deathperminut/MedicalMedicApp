import React from 'react';
import { Modal, View, Text, TouchableOpacity ,TextInput} from 'react-native';
import { Icon } from 'react-native-elements';
import Globalstyles from '../Icons/GlobalStyles';

const CustomModalCancel = ({ visible, onClose, message, iconName, cancel ,readInputReason }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          {iconName && (
            <Icon
              name={iconName}
              size={40}
              color={Globalstyles.BlackPurple.color}
              style={styles.modalIcon}
            />
          )}
          <TextInput
                style={{...styles.textArea,...Globalstyles.Medium,marginBottom:40,maxWidth:500}}
                placeholder="Motivo de cancelación"
                placeholderTextColor="#B0A8EA80"
                multiline
                onChangeText={readInputReason}
          />
          <View style={{width:'100%',flexDirection:'row',justifyContent:'center'}}>
            <TouchableOpacity style={{...styles.modalButton,marginRight:10,minWidth:110,alignItems:'center',borderRadius:30}} onPress={onClose}>
              <Text style={{...styles.modalButtonText,...Globalstyles.Medium,color:'#642B80'}}>Volver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.modalButton,minWidth:100,borderRadius:30,backgroundColor:'transparent',borderColor:'#FF0057'}} onPress={cancel}>
              <Text style={{...styles.modalButtonText,...Globalstyles.Medium,color:'#FF0057'}}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </Modal>
  );
};



const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  textArea: {
    width:'100%',
    height:150,
    backgroundColor: '#F6F4FF',
    borderRadius: 10,
    color: '#7E72D1',
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    textAlignVertical:'top'
  },
  modal: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalIcon: {
    marginBottom: 10,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: Globalstyles.BlackPurple.color,
  },
  modalButton: {
    backgroundColor: 'transparent',
    borderColor:'#642B80',
    borderWidth:0.7,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
  },
};

export default CustomModalCancel;
