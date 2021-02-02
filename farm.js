// i replaced numCrops with numPlants because it was confusing

// get yield for plant
const getYieldForPlant = plant => plant.yield;
// get yield for crop
const getYieldForCrop = input => getYieldForPlant(input.crop) * input.numPlants;
// get total yield (in kilos) from all type of plants(crops) and 0 amount plants
const getTotalYield = input => input.crops.reduce((total, item) =>
    total + getYieldForCrop(item), 0);

// 1. get costs for plant
const getCostsForPlant = input => input.costs;
// 1. calculate the costs for crop 
const getCostsForCrop = input => input.numPlants * getCostsForPlant(input.crop);

// 2. calculate revenue for crop 
const getRevenueForCrop = input => input.crop.salePrice * input.crop.yield;

// 3. calculate the gain for crop
const getProfitForCrop = input => getRevenueForCrop(input) - getCostsForCrop(input);

// 4. calculate the profit for all crops
const getTotalProfit = crops => {
    const profitFromAllCrops = crops.map(crop => getProfitForCrop(crop));
    return profitFromAllCrops.reduce((total, item) => total + item);
};

// function to calculate yield with environment factors sun and wind
function getEnvironmentFactor(crop, environmentFactors) {
    let factor = 1;
    switch (environmentFactors.sun) {
        case 'low':
            factor = factor * (100 + crop.factors.sun.low) / 100;
            break;
        case 'medium':
            factor = factor * (100 + crop.factors.sun.medium) / 100;
            break;
        case 'high':
            factor = factor * (100 + crop.factors.sun.high) / 100;
    }
    switch (environmentFactors.wind) {
        case 'low':
            factor = factor * (100 + crop.factors.wind.low) / 100;
            break;
        case 'medium':
            factor = factor * (100 + crop.factors.wind.medium) / 100;
            break;
        case 'high':
            factor = factor * (100 + crop.factors.wind.high) / 100;
    }
    return factor;
};

// ----- onderstaand ipv switch statement -----

// function getEnvironmentFactor(crop, environmentFactors) {
//     // let factor = 1;
//     const wind = crop => crop.factors === wind;
//     const sun = crop => crop.factors === sun;
//     if (crop.factors === wind) return crop.factors.wind.low

// let wind = crop.factors.wind;

// const getEnvironmentFactor = (crop, environmentFactors) {
// let factor = 1;
// let factorSun = 'sun' in crop.factors ? factor * (100 + crop.factor.sun.low) / 100;
// return factorSun;
// let result = condition ? value1 : value2;
// let ternary = condition ? true : false;
// }

// berekening van factor = factor * (100 + crop.factors[factor][level]) / 100;
// bv dit erin verwerken >>> const calc = (crop, type, factor) => crop.factors[type][factor]

// const factorLevel = ['high', 'medium', 'low'];

// berekening van factor
// const calcEnvironmentFactor = factor * (100 + crop.factors[factorSun][factorLevel])
// const factorSun = crop.factors.sun;
// const factorWind = crop.factors.wind;


// 6. + 7. calculate the yield (in kilos) of a plant with environment factors
const getYieldForPlantWithFactors = (crop, environmentFactors) =>
    crop.yield * getEnvironmentFactor(crop, environmentFactors);

// 9. calculate the yield in kilos of a crop with environment factors
const getYieldForCropWithFactors = (input, crop, environmentFactors) =>
    input.numPlants * getYieldForPlantWithFactors(crop, environmentFactors);

// 10. calculate the profit of a crop with environment factors
const getProfitForCropWithFactors = (input, crop, environmentFactors) =>
    getProfitForCrop(input) * getEnvironmentFactor(crop, environmentFactors);

// 11. calculate the profit for total of all crops with environment factors
const getTotalProfitWithFactors = (crops, environmentFactors) => {
    const getProfitForAllCropsWithFactors = crops.reduce(
        (total, input) =>
            total += (getProfitForCropWithFactors(
                input, input.crop, environmentFactors)),
        0);
    return getProfitForAllCropsWithFactors;
};

module.exports = {
    getYieldForPlant,
    getYieldForPlantWithFactors,
    getYieldForCrop,
    getYieldForCropWithFactors,
    getTotalYield,
    getCostsForPlant,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getProfitForCropWithFactors,
    getTotalProfit,
    getTotalProfitWithFactors,
};