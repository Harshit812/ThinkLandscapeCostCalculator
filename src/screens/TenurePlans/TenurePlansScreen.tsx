import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Switch } from 'react-native';
import CostEstimationCard from '../../components/CostEstimationCard';
import { PlanCost } from '../../types';

interface TenurePlansScreenProps {
  plans: PlanCost[];
  selectedCurrency: string;
  conversionRate: number;
}

const TenurePlansScreen: React.FC<TenurePlansScreenProps> = ({ plans, selectedCurrency, conversionRate }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isConverted, setIsConverted] = useState(false);

  const toggleConversion = () => {
    setIsConverted((prevIsConverted) => !prevIsConverted);
  };

  const currencyTitle = isConverted ? 'USD' : selectedCurrency;

  const handlePlanSelect = (tenure: string) => {
    setSelectedPlan(tenure === selectedPlan ? null : tenure);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Your Plan</Text>
        <View style={styles.currencyContainer}>
          <Text style={styles.currencyTitle}>{currencyTitle}</Text>
          <Switch value={isConverted} onValueChange={toggleConversion} />
        </View>
      </View>
      <ScrollView>
        {plans.map((plan) => (
          <CostEstimationCard
            key={plan.tenure}
            costData={plan}
            selectedCurrency={isConverted ? 'USD' : selectedCurrency}
            conversionRate={isConverted ? 1 / conversionRate : 1}
            isSelected={selectedPlan === plan.tenure.toString()}
            onPress={() => handlePlanSelect(plan.tenure.toString())}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyTitle: {
    marginRight: 8,
    color: '#fe7013',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default TenurePlansScreen;
