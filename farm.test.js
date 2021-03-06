// i replaced numCrops with numPlants because it was confusing

const { getYieldForPlant, getYieldForPlantWithFactors, getYieldForCrop, getYieldForCropWithFactors, getTotalYield, getCostsForPlant, getCostsForCrop, getRevenueForPlant, getRevenueForCrop, getProfitForCrop, getProfitForCropWithFactors, getTotalProfit, getTotalProfitWithFactors } = require('./farm');

// write test to get yield (in kilos) for plant
describe('getYieldForPlant', () => {
    const corn = {
        name: 'corn',
        yield: 30,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 100,
                medium: 0,
                high: -40,
            }
        },
    };
    test('Get yield for plant', () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
    // environment factors
    const environmentFactors = { sun: 'low', wind: 'high' };

    test('Get yield for plant with environment factors', () => {
        expect(getYieldForPlantWithFactors(corn, environmentFactors)).toBe(9);
    });
});

// write test to get yield for crop in kilos
describe('getYieldForCrop', () => {
    const corn = {
        name: 'corn',
        yield: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 100,
                medium: 0,
                high: -40,
            }
        },
    };
    const input = {
        crop: corn,
        numPlants: 10,
    };
    test('Get yield for crop', () => {
        expect(getYieldForCrop(input)).toBe(30);
    });

    const environmentFactors = { sun: 'high', wind: 'low' };

    test('Get yield for crop with environment factors', () => {
        expect(getYieldForCropWithFactors(input, corn, environmentFactors)).toBe(90);
    });
});

// write test to get total yield from all type of plants (crops)
describe('getTotalYield', () => {
    // multiple crops
    test('Calculate total yield with multiple crops', () => {
        const corn = {
            name: 'corn',
            yield: 3,
        };
        const pumpkin = {
            name: 'pumpkin',
            yield: 4,
        };
        const crops = [
            { crop: corn, numPlants: 5 },
            { crop: pumpkin, numPlants: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });
    // 0 plants
    test('Calculate total yield with 0 amount', () => {
        const corn = {
            name: 'corn',
            yield: 3,
        };
        const crops = [{ crop: corn, numPlants: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// write test to get costs for a crop
describe('getCostsForCrop', () => {
    test('Get costs for plant', () => {
        const corn = {
            name: 'corn',
            costs: 5,
        };
        expect(getCostsForPlant(corn)).toBe(5);
    });
    test('Get costs for crop', () => {
        const corn = {
            name: 'corn',
            costs: 1,
        };
        const input = {
            crop: corn,
            numPlants: 5,
        };
        expect(getCostsForCrop(input)).toBe(5);
    });
});

// write test to get revenue for plant
describe('getRevenueForPlant', () => {
    const corn = {
        name: 'corn',
        yield: 3,
        salePrice: 3,
    };
    const input = {
        crop: corn,
    };
    test('Get revenue for plant', () => {
        expect(getRevenueForPlant(input)).toBe(9);
    });
});

// write test to get revenue for a crop
describe('getRevenueForCrop', () => {
    const corn = {
        name: 'corn',
        yield: 30,
        salePrice: 3,
    };
    const input = {
        crop: corn,
        numPlants: 5,
    };
    test('Get revenue for crop', () => {
        expect(getRevenueForCrop(input)).toBe(450);
    });
});

// write test to get profit for crop
describe('getProfitForCrop', () => {
    const corn = {
        name: 'corn',
        yield: 30,
        costs: 1,
        salePrice: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 100,
                medium: 0,
                high: -40,
            }
        },
    };
    const input = {
        crop: corn,
        numPlants: 5,
    };
    test('Get profit for crop', () => {
        expect(getProfitForCrop(input)).toBe(445);
    });

    const environmentFactors = { sun: 'high', wind: 'high' };

    test('Get profit for crop with environment factors', () => {
        expect(getProfitForCropWithFactors(input, corn, environmentFactors)).toBe(400.5);
    });
});

// write test to get profit for multiple crops
describe('getTotalProfit', () => {
    const corn = {
        name: 'corn',
        yield: 30,
        costs: 1,
        salePrice: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 100,
                medium: 0,
                high: -40,
            }
        },
    };
    const pumpkin = {
        name: 'pumpkin',
        yield: 8,
        costs: 1,
        salePrice: 5,
        factors: {
            sun: {
                low: -40,
                medium: 50,
                high: 100,
            },
            wind: {
                low: 100,
                medium: 50,
                high: -40,
            }
        },
    };
    const avocado = {
        name: 'avocado',
        yield: 20,
        costs: 3,
        salePrice: 5,
        factors: {
            sun: {
                low: -80,
                medium: 40,
                high: 80,
            },
            wind: {
                low: 50,
                medium: 0,
                high: -60,
            }
        },
    };
    const apple = {
        name: 'apple',
        yield: 45,
        costs: 1,
        salePrice: 3,
        factors: {
            sun: {
                low: -80,
                medium: 40,
                high: 100,
            },
            wind: {
                low: 80,
                medium: 0,
                high: -30,
            }
        },
    };
    const crops = [
        { crop: corn, numPlants: 5 },
        { crop: pumpkin, numPlants: 2 },
        { crop: avocado, numPlants: 10 },
        { crop: apple, numPlants: 15 },
    ];

    test('Get total profit', () => {
        expect(getTotalProfit(crops)).toBe(3503);
    });

    const environmentFactors = { sun: 'medium', wind: 'low' };

    test('Get total profit with environment factors', () => {
        expect(getTotalProfitWithFactors(crops, environmentFactors)).toBe(8226.2);
    });
});
