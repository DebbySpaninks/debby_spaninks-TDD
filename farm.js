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

// 2. calculate revenue for plant
const getRevenueForPlant = input => input.crop.salePrice * input.crop.yield;
// 2. calculate revenue for crop
const getRevenueForCrop = input => input.numPlants * getRevenueForPlant(input);

// 3. calculate the gain for crop
const getProfitForCrop = input => getRevenueForCrop(input) - getCostsForCrop(input);

// 4. calculate the profit for all crops
const getTotalProfit = crops => {
    const profitFromAllCrops = crops.map(crop => getProfitForCrop(crop));
    return profitFromAllCrops.reduce((total, item) => total + item);
};

// // function to calculate yield with environment factors
const getEnvironmentFactor = (crop, environmentFactors) => {
    let result = 1;
    // loop through keys of environmentfactors
    Object.keys(environmentFactors).forEach(factor => {
        if (crop && crop.factors && crop.factors[factor]) {
            const intensity = environmentFactors[factor];
            if (crop.factors[factor][intensity] && (typeof crop.factors[factor][intensity] === 'number')) {
                result *= (100 + crop.factors[factor][intensity]) / 100;
            }
        }
    })
    return result;
}

// 6. + 7. calculate the yield (in kilos) of a plant with environment factors
const getYieldForPlantWithFactors = (crop, environmentFactors) =>
    crop.yield * getEnvironmentFactor(crop, environmentFactors);

// 9. calculate the yield in kilos of a crop with environment factors
const getYieldForCropWithFactors = (input, crop, environmentFactors) =>
    input.numPlants * getYieldForPlantWithFactors(crop, environmentFactors);

// 10. calculate the profit of a crop with environment factors
const getProfitForCropWithFactors = (input, crop, environmentFactors) => {
    const result = getProfitForCrop(input) * getEnvironmentFactor(crop, environmentFactors);
    return Math.round(result * 100) / 100;
}

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
    getRevenueForPlant,
    getRevenueForCrop,
    getProfitForCrop,
    getProfitForCropWithFactors,
    getTotalProfit,
    getTotalProfitWithFactors,
};