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

// RECURSION

function leapYearRecursive(year, divisor = 4) {
    if (divisor === 4) {
        return leapYearRecursive(year, 100);
    }
    
    if (divisor === 100) {
        if (year % 100 === 0) {
            return leapYearRecursive(year, 400);
        } else {
            return 'leap year';
        }
    }
    
    if (divisor === 400) {
        if (year % 400 === 0) {
            return 'leap year';
        } else {
            return 'not a leap year';
        }
    }
}

console.log(leapYearRecursive(2020)); 
console.log(leapYearRecursive(1999)); 
console.log(leapYearRecursive(1500)); 
console.log(leapYearRecursive(1212)); 
