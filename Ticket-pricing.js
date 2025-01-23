// ITERATIVE

function priceGiving(age) {
    if (age <= 12) {
        return '10$';
    }
    if (age >= 13 && age <= 17) {
        return '15$';
    } else if (age >= 18) {
        return '20$';
    }
}

console.log(priceGiving(7));  
console.log(priceGiving(17));  
console.log(priceGiving(15)); 
console.log(priceGiving(24));  
