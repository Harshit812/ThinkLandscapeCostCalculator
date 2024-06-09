import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BudgetType } from '../types';
import CheckIcon from '../assets/icons/Check.svg';

interface BudgetPickerProps {
  selectedBudget: BudgetType;
  onBudgetChange: (budget: BudgetType) => void;
}

const budgets: BudgetType[] = ['Economic', 'Standard', 'Premium', 'UltraLuxury'];

const BudgetPicker: React.FC<BudgetPickerProps> = ({ selectedBudget, onBudgetChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Your Budget</Text>
      {budgets.map((budget) => (
        <TouchableOpacity key={budget} onPress={() => onBudgetChange(budget)} style={[styles.optionContainer, selectedBudget === budget && styles.selectedOptionContainer]}>
          <Text style={[styles.optionText, selectedBudget === budget && styles.selectedOptionText]}>{budget}</Text>
          {selectedBudget === budget && <CheckIcon />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 32
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  selectedOptionContainer: {
    borderColor: '#FF6D17',
    backgroundColor: '#FED8B1'
  },
  optionText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500'
  },
  selectedOptionText: {
    fontWeight: '500',
    color: '#FF6D17'
  },
});

export default BudgetPicker;
