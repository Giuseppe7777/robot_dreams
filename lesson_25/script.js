console.log('__ Домашнє завдання №1 __');

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const emptyObject = {};
const nonEmptyObject = { name: "Giuseppe" };

console.log(isEmpty(emptyObject)); 
console.log(isEmpty(nonEmptyObject)); 

// =========================================================================================================

console.log('__ Домашнє завдання №2 __');

let user = {
    name: 'Йосип',
    age: 46,
    sayHello: function() {
        return 'Привіт, я ' + this.name + ' мені ' + this.age + ' років';
    }
};

console.log(user.sayHello());
document.getElementById("demo").innerHTML = user.sayHello()

// =========================================================================================================

console.log('__ Домашнє завдання №3 __');

const calculator = {
    firstNumber: 0,
    secondNumber: 0,
    
    ask: function() {
        this.firstNumber = +prompt("Введіть перше число:", 0);
        this.secondNumber = +prompt("Введіть друге число:", 0);
    },
    
    sum: function() {
        return this.firstNumber + this.secondNumber;
    },

    mul: function() {
      return this.firstNumber * this.secondNumber;
    }
};

calculator.ask();
alert("Сума чисел: " + calculator.sum());
alert("Добуток чисел: " + calculator.mul());



