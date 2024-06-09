import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';

interface CurrencyToggleProps {
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

const CurrencyToggle: React.FC<CurrencyToggleProps> = ({ selectedCurrency, onCurrencyChange }) => {
  const toggleCurrency = () => {
    onCurrencyChange(selectedCurrency === 'AED' ? 'USD' : 'AED');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Currency: {selectedCurrency}</Text>
      <Switch value={selectedCurrency === 'USD'} onValueChange={toggleCurrency} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
});

export default CurrencyToggle;
