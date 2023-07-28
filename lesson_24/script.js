
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return 'Error: Both parameters must be numbers';
    }
}

function subtract(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        return 'Error: Both parameters must be numbers';
    }
}

function multiply(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    } else {
        return 'Error: Both parameters must be numbers';
    }
}

function divide(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (b !== 0) {
            return a / b;
        } else {
            return 'Error: Division by zero is not allowed';
        }
    } else {
        return 'Error: Both parameters must be numbers';
    }
}


let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");

alert(`You entered this numbers: ${num1} and ${num2}\nAdd: ${add(num1, num2)}`);
alert(`You entered this numbers: ${num1} and ${num2}\nSubtract: ${subtract(num1, num2)}`);
alert(`You entered this numbers: ${num1} and ${num2}\nMultiply: ${multiply(num1, num2)}`);
alert(`You entered this numbers: ${num1} and ${num2}\nDivide: ${divide(num1, num2)}`);
5

console.log('_______________ find Min and Max _________________');


function findMinNumber(array) {
    if (!Array.isArray(array) || array.length === 0) return null; 

    let minNumber = array[0]; 

    for (let i = 1; i < array.length; i++) { 
        if (array[i] < minNumber) { 
            minNumber = array[i]; 
        }
    }

    return minNumber; 
}

function findMaxNumber(array) {
    if (!Array.isArray(array) || array.length === 0) return null; 

    let maxNumber = array[0]; 

    array.forEach(number => { 
        if (number > maxNumber) { 
            maxNumber = number; 
        }
    });

    return maxNumber; 
}

let numbers = [117, 15, 100000, 1, 55, 7, 578, 1001, 2510, 3512];
console.log(findMinNumber(numbers)); 
console.log(findMaxNumber(numbers)); 
