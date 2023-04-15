import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ProgressSteps,ProgressStep } from 'react-native-progress-steps';
import { Icon } from 'react-native-elements';
import Globalstyles from '../../../Shared/Icons/GlobalStyles';
import { AppContext } from '../../../AppContext/Context';

const VerticalStepIndicator = () => {

  let {step,setStep} =React.useContext(AppContext);
  const steps = [
    { label: 'Solicitud del servicio', icon: { name: 'user', type: 'font-awesome' } },
    { label: 'En proceso de agendamiento', icon: { name: 'envelope', type: 'font-awesome' } },
    { label: 'Agendada', icon: { name: 'envelope', type: 'font-awesome' } },
    { label: 'Terminado', icon: { name: 'lock', type: 'font-awesome' } },
  ];

  return (
    <View style={styles.container}>
      <ProgressSteps
        activeStepIconBorderColor="#1671B7"
        completedProgressBarColor="#1671B7"
        activeStepNumColor="#1671B7"
        progressBarColor="#E5E5E5"
        completedStepIconColor="#1671B7"
        activeStepIconColor="#FFFFFF"
        activeLabelColor="#1671B7"
        activeStep={step}
        style={styles.progressSteps}
      >
        {steps.map((step, index) => {
         
         console.log(step)

        return (
          <ProgressStep
            key={index}
            label={step.label}
            icon={step.icon}
            style={{...Globalstyles.bold}}
            removeBtnRow={true}
          />
        )
        })}
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
    width: 250,
    height: 200,
  },
});

export default VerticalStepIndicator;