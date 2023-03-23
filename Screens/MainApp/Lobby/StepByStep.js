import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressSteps,ProgressStep } from 'react-native-progress-steps';
import { Icon } from 'react-native-elements';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';

const VerticalStepIndicator = () => {
  const steps = [
    { label: 'Solicitud del servicio', icon: { name: 'user', type: 'font-awesome' } },
    { label: 'En camino', icon: { name: 'envelope', type: 'font-awesome' } },
    { label: 'Terminado', icon: { name: 'lock', type: 'font-awesome' } },
  ];

  return (
    <View style={styles.container}>
      <ProgressSteps
        activeStepIconBorderColor="#1AE494"
        completedProgressBarColor="#1AE494"
        activeStepNumColor="#1AE494"
        progressBarColor="#E5E5E5"
        completedStepIconColor="#1AE494"
        activeStepIconColor="#FFFFFF"
        activeLabelColor="#1AE494"
        activeStep={0}
        nextBtnDisabled={true}
        previousBtnDisabled={true}
        btnStyle={{ display: 'none' }}
        style={styles.progressSteps}
      >
        {steps.map((step, index) => (
          <ProgressStep
            key={index}
            label={step.label}
            icon={step.icon}
            style={{...Globalstyles.bold}}
          />
        ))}
      </ProgressSteps>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  progressSteps: {
    width: 200,
    height: 400,
  },
});

export default VerticalStepIndicator;