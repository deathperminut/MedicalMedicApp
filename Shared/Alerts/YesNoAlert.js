import React, { useState } from 'react';
import { View, Button } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import {showMessage,hideMessage} from 'react-native-flash-message';


export const ConfirmationAlert = ({ onCancel, onConfirm }) => {
  return (
    <SweetAlert
      showCancel
      cancelBtnText="Cancelar"
      confirmBtnText="Confirmar"
      confirmBtnColor="#008000"
      cancelBtnColor="#FF0000"
      title="¿Estás seguro?"
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
      Esta acción no se puede deshacer.
    </SweetAlert>
  );
};
export const AlertMessage = (message, description,icon) => {
  showMessage({
    position:'bottom',
    duration:2000,
    color:'#7E72D1',
    message: message,
    description: description,
    icon: {icon},
    backgroundColor:'#fffa',
    type: "info",
  });
}
