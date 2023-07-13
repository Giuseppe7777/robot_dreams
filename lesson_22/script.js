
let number1 = prompt('Введіть перше число для додавання, віднімання, множення та ділення');
let number2 = prompt('Введіть друге число для додавання, віднімання, множення та ділення');

if (!number1 || !number2 || (isNaN(number1) || isNaN(number2))) {
    alert('Обидва рядки повинні бути заповненими та введені значення повинні бути числами.');
} else {

    let result;

    if (+number1 < +number2) {
        let confirmation = confirm('Перше число менше другого. Ви впевнені, що хочете продовжити операцію?');
    
        if (confirmation) {
            let sumAdd = (+number1) + (+number2);
            let sumSub = (+number1) - (+number2);
            let sumMult = (+number1) * (+number2);
            let sumDiv = (+number1) / (+number2);
        
            result = `Ви ввели: ${number1} та ${number2}\n\nДодавання: ${sumAdd}\nВіднімання: ${sumSub}\nМноження: ${sumMult}\nДілення: ${sumDiv}`;
        } else {
            result = 'Операцію скасовано.';
        }
    } else {
    let sumAdd = (+number1) + (+number2);
    let sumSub = (+number1) - (+number2);
    let sumMult = (+number1) * (+number2);
    let sumDiv = (+number1) / (+number2);
    
    result = `Ви ввели: ${number1} та ${number2}\n\nДодавання: ${sumAdd}\nВіднімання: ${sumSub}\nМноження: ${sumMult}\nДілення: ${sumDiv}`;
    }

    if ((+number2) === 0) {
        alert('На "0" ділити не можна')
        result = 'Операцію скасовано.';
    }

    alert(result);
}
