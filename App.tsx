import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import AreaInputScreen from './src/screens/AreaInput/AreaInputScreen';
import BudgetSelectionScreen from './src/screens/BudgetSelection/BudgetSelectionScreen';
import FeatureSelectionScreen from './src/screens/FeatureSelection/FeatureSelectionScreen';
import TenurePlansScreen from './src/screens/TenurePlans/TenurePlansScreen';
import CustomStepIndicator from './src/components/StepIndicator';
import { calculateTotalCost, calculatePlanCosts } from './src/utilities/costCalculations';
import { UserSelectedFeatures, BudgetType } from './src/types';
import Button from './src/components/Button';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [areaValue, setAreaValue] = useState('0');
  const [selectedBudget, setSelectedBudget] = useState<BudgetType>('Economic');
  const [selectedCurrency, setSelectedCurrency] = useState('AED');
  const [selectedFeatures, setSelectedFeatures] = useState<UserSelectedFeatures>({
    tiles: false,
    pool: false,
    seating: false,
    bar: false,
    pizzaOven: false,
    grill: false,
    fridge: false,
    pergola: false,
    trees: false,
    lighting: false,
    grass: false,
  });

  const conversionRate = 3.67; // 1 USD = 3.67 AED

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const toggleFeature = (feature: keyof UserSelectedFeatures) => {
    setSelectedFeatures((prevFeatures) => ({
      ...prevFeatures,
      [feature]: !prevFeatures[feature],
    }));
  };

  const totalCost = calculateTotalCost(Number(areaValue), selectedFeatures, selectedBudget);
  const plans = calculatePlanCosts(totalCost);

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <AreaInputScreen areaValue={areaValue} setAreaValue={setAreaValue} />;
      case 1:
        return <BudgetSelectionScreen selectedBudget={selectedBudget} setSelectedBudget={setSelectedBudget} />;
      case 2:
        return <FeatureSelectionScreen selectedFeatures={selectedFeatures} toggleFeature={toggleFeature} />;
      case 3:
        return <TenurePlansScreen plans={plans} selectedCurrency={selectedCurrency} conversionRate={conversionRate} />;
      default:
        return null;
    }
  };

  const handleContinue = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <CustomStepIndicator currentStep={currentStep} goToStep={setCurrentStep} />
        <View style={styles.stepContent}>
          {renderStepContent()}
        </View>
        <View style={styles.buttonContainer}>
          {currentStep > 0 && <Button title="Previous" onPress={() => setCurrentStep(currentStep - 1)} />}
          {currentStep < 3 && <Button title="Continue" onPress={handleContinue} />}
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  stepContent: {
    flex: 1,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
