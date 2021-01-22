// i replaced numCrops with numPlants because it was confusing

const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForPlant, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require('./farm');

// get yield (in kilos) for plant
describe('getYieldForPlant', () => {
    const corn = {
        name: 'corn',
        yield: 30,                                                       // 30 kilo opbrengst voor 10 maïsplanten
    };
    //  without environment factors
    test('Get yield for plant with no environment factors', () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
    // with environment factors
    // test('Get yield for plant with environment factors', () => {
    //     expect(getYieldForPlant(corn)).toBe(??);                                        nog aanpassen!!
    // });
});

// get yield for crop in kilos
describe('getYieldForCrop', () => {
    // without environment factors
    test('Get yield for crop, simple', () => {
        const corn = {
            name: 'corn',
            yield: 3,                                                       // 3 kilo opbrengst per plant
        };
        const input = {
            crop: corn,
            numPlants: 10,                                                   // ik stop 10 plantjes in de grond
        };
        expect(getYieldForCrop(input)).toBe(30);                             // 30 kilo opbrengst crop
    });
    //     // with environment factors
    //     // hier moet nog een test uitgeschreven worden
});

// get total yield (in kilos) from all type of plants (crops)
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
        expect(getTotalYield({ crops })).toBe(23);                           // samen 23 plantjes
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

// get costs for a crop                                                              kosten per gewas
describe('getCostsForCrop', () => {
    test('Get costs for plant', () => {
        const corn = {
            name: 'corn',
            costs: 10,
        };
        expect(getCostsForPlant(corn)).toBe(10);
    });
    test('Get costs for crop', () => {
        const corn = {
            name: 'corn',
            costs: 1,
        };
        const input = {
            crop: corn,
            numPlants: 10,
        };
        expect(getCostsForCrop(input)).toBe(10);
    });
});

// get revenue for a crop                                           inkomsten per gewas
describe('getRevenueForCrop', () => {
    const corn = {
        name: 'corn',
        yield: 30,
        salePrice: 3,
    };
    const input = {
        crop: corn,
        numPlants: 10,
    };
    test('Get revenue for crop', () => {
        expect(getRevenueForCrop(input)).toBe(900);
    });
});

// get profit for crop                                           winst per gewas
// without environment factors
describe('getProfitForCrop', () => {
    const corn = {
        name: 'corn',
        yield: 30,
        costs: 1,
        salePrice: 3,
    };
    const input = {
        crop: corn,
        numPlants: 10,
    };
    test('Get profit for crop', () => {
        expect(getProfitForCrop(input)).toBe(890);
    });
});

    // get profit for multiple crops (without environmental factors): getTotalProfit            winst van meerdere gewassen
    // 4. bereken de winst voor meerdere gewassen (zonder omgevingsfactoren): getTotalProfit

    // 5. You can do the following steps (6 to 11) in two ways. Way 1: write completely new functions with your own tests. Way 2: adjust the previously written functions so that they can deal with environmental factors but still always do without environmental factors, so the old tests must continue to fit! This means that you do not write new functions, which means that you have to check in the function whether or not relevant environmental factors have been included. Way 2 is a bit more difficult and therefore also a BONUS assignment.
    // 5. Je kan de volgende stappen (6 t/m 11) op twee manieren doen. Manier 1: schrijf volledig nieuwe functies met eigen tests. Manier 2: pas de eerder geschreven functies aan zodat ze kunnen omgaan met omgevingsfactoren maar het nog steeds doen ook zonder omgevingsfactoren. De oude tests moeten dus blijven passen! Je schrijft dan dus geen nieuwe functies. Dit betekent dus dat je in de functie moet checken of er wel/geen relevante omgevingsfactoren zijn meegegeven. Manier 2 is wat moeilijker en dus ook een BONUS-opdracht.

    // 6. writing test to include environmental factors in calculating the yield (in kilos) of a plant: getYieldForPlant, use the following data structures:
    // 6. neem omgevingsfactoren mee in het berekenen van de opbrengst (in kilo's) van een plant: getYieldForPlant, gebruik daarvoor de volgende datastructuren:

    // 7. writing test to do this calculation with several environmental factors
    // 7. doe deze berekening met meerdere omgevingsfactoren

    // 8. writing test to Make sure you ignore irrelevant environmental factors in your calculations
    // 8. zorg dat je niet-relevante omgevingsfactoren negeert in je berekeningen

    // 9. writing test to calculate the yield in kilos of a crop getYieldForCrop, take environmental factors into account in your calculation
    // 9. bereken de opbrengst in kilo's van een crop getYieldForCrop, neem omgevingsfactoren mee in je berekening

    // 10. writing test to calculate the profit of a crop getProfitForCrop, include environmental factors in your calculation
    // 10. schrijf tests om de winst van een crop getProfitForCrop te berekenen, neem omgevingsfactoren mee in je berekening

    // 11. writing test to calculate the profit for multiple crops getTotalProfit, include environmental factors in your calculation
    // 11. schrijf tests om de winst voor meerdere crops getTotalProfit te berekenen, neem omgevingsfactoren mee in je berekening

    // // array with fruit and vegetables
    // const arrayWithFruitAndVegetables = [
    //     { name: 'corn', yield: 3, numPlants: 10, costs: 2 },
    //     { name: 'pumpkin', yield: 4, numPlants: 2, costs: 1 },
    //     { name: 'avocado', yield: 2, numPlants: 10, costs: 3 },
    //     { name: 'apple', yield: 3, numPlants: 15, costs: 1 }
    // ];
