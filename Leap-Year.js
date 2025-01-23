// ITERATIVE

function leapYear(year) {
    let isLeapYear = 'leap year';
    if (year % 4 == 0) {
        if (year % 100 != 0 || year % 400 == 0) {
            return isLeapYear;
        }
    }
    return 'not a leap year'; 
}

console.log(leapYear(2020)); 
console.log(leapYear(1999)); 
console.log(leapYear(1500)); 
console.log(leapYear(1212)); 
