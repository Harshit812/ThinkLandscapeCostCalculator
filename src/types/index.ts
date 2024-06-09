export interface UserSelectedFeatures {
    tiles: boolean;
    pool: boolean;
    seating: boolean;
    bar: boolean;
    pizzaOven: boolean;
    grill: boolean;
    fridge: boolean;
    pergola: boolean;
    trees: boolean;
    lighting: boolean;
    grass: boolean;
  }
  
  export interface PlanCost {
    tenure: number;
    downpayment: number;
    moveInPayment: number;
    installment: number;
    totalCost: number;
  }
  
  export type BudgetType = 'Economic' | 'Standard' | 'Premium' | 'UltraLuxury';

  export interface FeatureCost {
    Economic: number;
    Standard: number;
    Premium: number;
    UltraLuxury: number;
  }

  export interface BaseCosts {
    [key: string]: FeatureCost;
  }