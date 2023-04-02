import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Globalstyles from '../Icons/GlobalStyles';

const CustomModal = ({ visible, onClose, message, iconName }) => {
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
          <Text style={styles.modalText}>{message}</Text>
          <TouchableOpacity style={styles.modalButton} onPress={onClose}>
            <Text style={styles.modalButtonText}>Cerrar</Text>
          </TouchableOpacity>
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
    backgroundColor: '#642B80',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
  },
};

export default CustomModal;
