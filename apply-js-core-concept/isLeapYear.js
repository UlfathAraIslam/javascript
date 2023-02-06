function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    // its ok not to use else
    return false;

}
const isMyYearLeapYear = isLeapYear(1993);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(2024);
console.log('her year:', isHerYearLeapYear);