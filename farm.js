// i replaced numCrops with numPlants because it was confusing

// get yield for plant
const getYieldForPlant = plant => plant.yield;
// get yield for crop
const getYieldForCrop = input => getYieldForPlant(input.crop) * input.numPlants;
// get total yield (in kilos) from all type of plants(crops) and with 0 amount plants
const getTotalYield = input => input.crops.reduce((total, item) => total + getYieldForCrop(item), 0);

// 1. get costs for plant
const getCostsForPlant = input => input.costs;
// 1. calculate the costs for crop 
const getCostsForCrop = input => input.numPlants * getCostsForPlant(input.crop);

// 2. calculate revenue for crop 
const getRevenueForCrop = input => input.crop.salePrice * input.crop.yield;

// 3. calculate the gain for crop
const getProfitForCrop = input => getRevenueForCrop(input) - getCostsForCrop(input);

// 4. calculate the profit for all crops
const getTotalProfit = ({ crops }) => {
    const profitFromAllCrops = crops.map(crop => getProfitForCrop(crop));
    return profitFromAllCrops.reduce((total, item) => total + item);
};

// function to calculate yield with environment factors
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
}

// 6. + 7. calculate the yield (in kilos) of a plant with environment factors
const getYieldForPlantWithFactors = (crop, environmentFactors) => crop.yield * getEnvironmentFactor(crop, environmentFactors);

// 9. calculate the yield in kilos of a crop with environment factors
const getYieldForCropWithFactors = (input, crop, environmentFactors) => input.crop.yield * input.numPlants * getEnvironmentFactor(crop, environmentFactors);

// 10. calculate the profit of a crop with environment factors
const getProfitForCropWithFactors = (input, crop, environmentFactors) => (getRevenueForCrop(input) - getCostsForCrop(input)) * getEnvironmentFactor(crop, environmentFactors);

// 11. calculate the profit for total crops with environment factors
const getTotalProfitWithFactors = (crops, environmentFactors) => {
    const profitFromAllCrops = crops.map(crop => getProfitForCrop(crop, environmentFactors));
    return profitFromAllCrops.reduce((total, item) => total + item);
};

module.exports = {
    getYieldForPlant,
    getYieldForPlantWithFactors,
    getYieldForCropWithFactors,
    getYieldForCrop,
    getTotalYield,
    getCostsForPlant,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getProfitForCropWithFactors,
    getTotalProfit,
    getTotalProfitWithFactors,
};