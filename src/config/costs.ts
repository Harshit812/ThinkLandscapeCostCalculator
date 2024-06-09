import { BaseCosts, FeatureCost } from '../types';

export const baseCosts: BaseCosts = {
  tiles: { Economic: 200, Standard: 300, Premium: 450, UltraLuxury: 675 },
  pool: { Economic: 3500, Standard: 5250, Premium: 7875, UltraLuxury: 11813 },
  seating: { Economic: 400, Standard: 600, Premium: 900, UltraLuxury: 1350 },
  bar: { Economic: 400, Standard: 600, Premium: 900, UltraLuxury: 1350 },
  pizzaOven: { Economic: 6000, Standard: 9000, Premium: 13500, UltraLuxury: 20250 },
  grill: { Economic: 5000, Standard: 7500, Premium: 11250, UltraLuxury: 16875 },
  fridge: { Economic: 1500, Standard: 2250, Premium: 3375, UltraLuxury: 5063 },
  pergola: { Economic: 500, Standard: 750, Premium: 1125, UltraLuxury: 1687.5 },
  trees: { Economic: 130, Standard: 195, Premium: 293, UltraLuxury: 439 },
  lighting: { Economic: 30, Standard: 45, Premium: 68, UltraLuxury: 101 },
  grass: { Economic: 50, Standard: 75, Premium: 113, UltraLuxury: 169 }
};

export const areaPercentages: { [key: string]: number } = {
  tiles: 0.3,
  pool: 0.1,
  seating: 0.15,
  bar: 0.1,
  pergola: 0.15,
  trees: 0.25,
  lighting: 1,
  grass: 0.7
};
