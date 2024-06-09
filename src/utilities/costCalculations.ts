import { baseCosts, areaPercentages } from '../config/costs';
import { UserSelectedFeatures, BudgetType, PlanCost } from '../types';

export const calculateFeatureCost = (feature: keyof typeof baseCosts, isEnabled: boolean, area: number, budget: BudgetType): number => {
  if (!isEnabled) return 0;
  const cost = baseCosts[feature][budget];
  const areaPercentage = areaPercentages[feature] || 1;

  if (['pizzaOven', 'grill', 'fridge'].includes(feature as string)) {
    return cost * areaPercentage;
  } else {
    return cost * area * areaPercentage;
  }
};

export const calculateTotalCost = (area: number, features: UserSelectedFeatures, budget: BudgetType): number => {
  const additionalCosts = Object.entries(features).reduce((acc, [feature, isEnabled]) => {
    return acc + calculateFeatureCost(feature as keyof typeof baseCosts, isEnabled, area, budget);
  }, 0);

  const bufferPercentage = 0.10;
  const totalCost = additionalCosts * (1 + bufferPercentage);

  return totalCost;
};


export const calculatePlanCosts = (totalCost: number): PlanCost[] => {
  const plans = [
    { tenure: 3, markup: 0.05, downpayment: 0.3, moveIn: 0.1 },
    { tenure: 6, markup: 0.1, downpayment: 0.25, moveIn: 0.1 },
    { tenure: 12, markup: 0.15, downpayment: 0.1, moveIn: 0.1 },
  ];

  return plans.map((plan) => {
    const markedUpCost = totalCost * (1+plan.markup);
    const downpayment = markedUpCost * plan.downpayment;
    const moveInPayment = markedUpCost * plan.moveIn;
    const remainingCost = markedUpCost - downpayment - moveInPayment;
    const installment = remainingCost / plan.tenure;

    return {
      tenure: plan.tenure,
      downpayment,
      moveInPayment,
      installment,
      totalCost: markedUpCost,
    };
  });
};
