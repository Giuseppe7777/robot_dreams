// ----------------------- Add, Sub, Mult, Div ----------------

function sum(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    } else {
        alert(`Ви повинні ввести число!`);
        return 'Неправильний ввід числа';
    }
};

function sub(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a - b;
    } else {
        alert(`Ви повинні ввести число!`);
        return 'Неправильний ввід числа';
    }
};

function mult(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        alert(`Ви повинні ввести число!`);
        return 'Неправильний ввід числа';
    }
};

function div(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        if (b > 0) {
            return a / b;
        } else {
            alert('На "0" ділити не можна. Друге число не може бути "0"');
            return 'На "0" ділити не можна.';
        }
    } else {
        alert(`Ви повинні ввести число!`);
        return 'Неправильний ввід числа';
    }
};

function getResult() {
    let num1 = parseFloat(document.getElementById('firstNumber').value)
    let num2 = parseFloat(document.getElementById('secondNumber').value)

    let addition = sum(num1, num2);
    let substruction = sub(num1, num2);
    let multiply = mult(num1, num2);
    let division = div(num1, num2);

    document.getElementById('resultAdd').textContent = addition;
    document.getElementById('resultSub').textContent = substruction;
    document.getElementById('resultMult').textContent = multiply;
    document.getElementById('resultDiv').textContent = division;

    function setColorForResult(elementId, value) {
        const element = document.getElementById(elementId);
        if ( typeof value === 'number' ) {
            element.style.color = value >= 0 ? 'green' : 'red';
        } else {
            element.style.color = black;
        }
        
    };
    
    setColorForResult('resultAdd', addition);
    setColorForResult('resultSub', substruction);
    setColorForResult('resultMult', multiply);
    setColorForResult('resultDiv', division);
};


// ---------------------- Min, Max -------------------



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

function lerp(value, min, max) {
    return (value - min) / (max - min);
}

function numberToColor(value, min, max) {
    const scale = lerp(value, min, max) * 255;
    return `rgb(${scale}, ${scale}, ${scale})`;
}

let numbers = [1, 6.5, 5.8, 4, 5, 6, 7, 8, 9, 10];

const minNumber = findMinNumber(numbers);
const maxNumber = findMaxNumber(numbers);

const container = document.querySelector('.numbers-container');

numbers.forEach(num => {
    const color = numberToColor(num, minNumber, maxNumber);

    const div = document.createElement('div');
    div.style.backgroundColor = color;
    div.textContent = num;
    
    container.appendChild(div);
});







