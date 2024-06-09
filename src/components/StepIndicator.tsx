import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

interface StepIndicatorProps {
  currentStep: number;
  goToStep: (step: number) => void;
}

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: 'black',
  labelSize: 13,
  currentStepLabelColor: 'black',
};

const labels = ["Enter Area", "Enter Budget", "Select Features", "Show Tenure Plans"];

const CustomStepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, goToStep }) => {
  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={stepIndicatorStyles}
        currentPosition={currentStep}
        labels={labels}
        stepCount={4}
        renderStepIndicator={({ position }) => (
          <TouchableOpacity onPress={() => goToStep(position)}>
            <View>
              <Text>{position + 1}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  }
});

export default CustomStepIndicator;
