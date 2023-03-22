import React, { useState } from 'react';
import { View, Button } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';


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
