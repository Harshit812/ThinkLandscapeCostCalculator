import React from 'react';
import { View, StyleSheet } from 'react-native';
import BudgetPicker from '../../components/BudgetPicker';
import { BudgetType } from '../../types';

interface BudgetSelectionScreenProps {
  selectedBudget: BudgetType;
  setSelectedBudget: (budget: BudgetType) => void;
}

const BudgetSelectionScreen: React.FC<BudgetSelectionScreenProps> = ({ selectedBudget, setSelectedBudget }) => {
  return (
    <View style={styles.container}>
      <BudgetPicker selectedBudget={selectedBudget} onBudgetChange={setSelectedBudget} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default BudgetSelectionScreen;
