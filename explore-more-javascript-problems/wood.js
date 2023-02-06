/*
fixed: per items wood requirement
chair---> 3 cft
table----> 10 cft
bed ----> 50 cft
vary: quantity
 */

function woodCalculator(chairQuanty, tableQuanty, bedQuantity){
    const perChairWood = 3;
    const pertableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuanty * perChairWood;
    const tableWood = tableQuanty * pertableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}
const totalQuanty = woodCalculator(1, 1, 1);
console.log(totalQuanty);
