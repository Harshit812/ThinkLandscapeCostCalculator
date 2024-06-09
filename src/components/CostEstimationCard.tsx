import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { PlanCost } from '../types';
import CheckIcon from '../assets/icons/Check.svg';

interface CostEstimationCardProps {
  costData: PlanCost;
  selectedCurrency: string;
  conversionRate: number;
  isSelected: boolean;
  onPress: () => void;
}

const CostEstimationCard: React.FC<CostEstimationCardProps> = ({
  costData,
  selectedCurrency,
  conversionRate,
  isSelected,
  onPress,
}) => {
  const displayCost = (amount: number) =>
    selectedCurrency === 'USD' ? (amount / conversionRate).toFixed(2) : amount.toFixed(2);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, isSelected && styles.selectedCard]}>
        {isSelected && <CheckIcon style={styles.checkIcon} />}
        <Text style={styles.title}>{costData.tenure} Month Plan</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.paragraphKey}>Downpayment:</Text> {selectedCurrency}{' '}
          <Text style={styles.paragraphValue}>{displayCost(costData.downpayment)}</Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.paragraphKey}>Move-In Payment:</Text> {selectedCurrency}{' '}
          <Text style={styles.paragraphValue}>{displayCost(costData.moveInPayment)}</Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.paragraphKey}>Installment:</Text> {selectedCurrency}{' '}
          <Text style={styles.paragraphValue}>{displayCost(costData.installment)} / month</Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.paragraphKey}>Total Cost:</Text> {selectedCurrency}{' '}
          <Text style={styles.paragraphValue}>{displayCost(costData.totalCost)}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  selectedCard: {
    borderColor: 'green',
    borderWidth: 2,
  },
  checkIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 5,
  },
  paragraphKey: {
    fontWeight: '700',
  },
  paragraphValue: {
    color: 'black',
    fontWeight: '500'
  },
});

export default CostEstimationCard;
