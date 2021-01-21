// i replaced numCrops with numPlants because it was confusing

// get total yield (in kilos) for plant
const getYieldForPlant = plant => plant.yield;

// get yield for crop
const getYieldForCrop = input => getYieldForPlant(input.crop) * input.numPlants;

// get total yield (in kilos) from all type of plants(crops) and with 0 amount plants
const getTotalYield = input => input.crops.reduce((total, item) => total + getYieldForCrop(item), 0);

// get costs for plant
const getCostsForPlant = input => input.costs;

// 1. calculate the cost for a crop 
const getCostsForCrop = input => input.numPlants * getCostsForPlant(input.crop);


// 2. calculate revenue for a crop (without environmental factors): getRevenueForCrop
// 2. bereken inkomsten voor een crop(zonder omgevingsfactoren): getRevenueForCrop

// 3. calculate the gain for a crop (without environmental factors): getProfitForCrop
// 3. bereken de winst voor een crop (zonder omgevingsfactoren): getProfitForCrop

// 4. calculate the profit for multiple crops (without environmental factors): getTotalProfit
// 4. bereken de winst voor meerdere crops(zonder omgevingsfactoren): getTotalProfit

// 5. You can do the following steps (6 to 11) in two ways. Way 1: write completely new functions with your own tests. Way 2: adjust the previously written functions so that they can deal with environmental factors but still always do without environmental factors, so the old tests must continue to fit! This means that you do not write new functions, which means that you have to check in the function whether or not relevant environmental factors have been included. Way 2 is a bit more difficult and therefore also a BONUS assignment.
// 5. Je kan de volgende stappen (6 t/m 11) op twee manieren doen. Manier 1: schrijf volledig nieuwe functies met eigen tests. Manier 2: pas de eerder geschreven functies aan zodat ze kunnen omgaan met omgevingsfactoren maar het nog steeds doen ook zonder omgevingsfactoren. De oude tests moeten dus blijven passen! Je schrijft dan dus geen nieuwe functies. Dit betekent dus dat je in de functie moet checken of er wel/geen relevante omgevingsfactoren zijn meegegeven. Manier 2 is wat moeilijker en dus ook een BONUS-opdracht.

// 6. include environmental factors in calculating the yield (in kilos) of a plant: getYieldForPlant, use the following data structures:
// 6. neem omgevingsfactoren mee in het berekenen van de opbrengst (in kilo's) van een plant: getYieldForPlant, gebruik daarvoor de volgende datastructuren (zie readme)

// 7. do this calculation with several environmental factors
// 7. doe deze berekening met meerdere omgevingsfactoren

// 8. Make sure you ignore irrelevant environmental factors in your calculations
// 8. zorg dat je niet-relevante omgevingsfactoren negeert in je berekeningen

// 9. calculate the yield in kilos of a crop getYieldForCrop, take environmental factors into account in your calculation
// 9. bereken de opbrengst in kilo's van een crop getYieldForCrop, neem omgevingsfactoren mee in je berekening

// 10. calculate the profit of a crop getProfitForCrop, include environmental factors in your calculation
// 10. bereken de winst van een crop getProfitForCrop, neem omgevingsfactoren mee in je berekening

// 11. calculate the profit for multiple crops getTotalProfit, include environmental factors in your calculation
// 11. bereken de winst voor meerdere crops getTotalProfit, neem omgevingsfactoren mee in je berekening

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForPlant,
    getCostsForCrop,
    // getRevenueForCrop,
    // getProfitForCrop,
    // getTotalProfit,
    // arrayWithFruitAndVegetables,
};