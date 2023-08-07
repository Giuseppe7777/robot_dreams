

// let userInfo = {
//     name: 'Giuseppe',
//     age: 46,
//     address: {
//         city: 'Oberwart',
//         street: 'Obere Hochstrasse',
//     },
//     showInfo: function() {
//         console.log(`Мене звати ${userInfo.name}, мені ${userInfo.age} років, я живу в місті ${userInfo.address.city} на вулиці ${userInfo.address.city}`);
//     }
// }

// userInfo.showInfo();


// let user = {...userInfo};
// console.log(user.name);

// console.log('-----------------------------------------------------------');


// function UserInfo(name) {
//     this.name = name;
//     this.age = 30;
// }

// console.log(new UserInfo('Giuseppe'));
// console.log(new UserInfo('Cat'));

// function User(name, age, location) {
//     this.name = name;
//     this.age = age;
//     this.location = location;
//     this.isAdmin = false;
// }

// let user = new User('Jack');

// console.log(new User("Giuseppe", 46, "Oberwart"));
// console.log(new User('Alex', 30, 'Prag'));

// User.prototype.sayHi = function() {
//     return `My name is ${this.name}, I'm ${this.age} years old and I live in ${this.location}`;
// };

// let userG = new User('Giuseppe', 46, 'Oberwart');
// console.log(userG.sayHi());

// let userGJ = new User('Giuseppe Juniuor', 16, 'Ternopil');
// console.log(userGJ.sayHi());


let arr = [1, 2, 3];
let arr2 = new Array(1, 2, 3);

let num = new Number(5);
let str = new String('abc');



arr.push(4);
let arr3 = arr.concat(arr2);

console.log('----------------------------------------------------');

console.log(arr3);
console.log(arr2);


console.log('----------------------------------------------------');

let arra = [1, 5];
let arra1 = [8, 10, 13];
let arra2 = [15, 17, 21, 25];
let arra3 = arra.concat(arra1, arra2);
console.log(arra3);
let arra4 = arra3.filter((element) => {
    console.log('-------------------------11---------------------------');
    console.log(element);
    console.log('-------------------------11---------------------------');
    return element < 11 ;
})
console.log('---------------------------1-------------------------');
console.log(arra4);
console.log('----------------------------1------------------------');

// function User(name) {
//     this.name = name;
//     this.isUser = true
// }

// const user = new User('Giuseppe');
// console.log(user.name);

function cityList() {
    return ['Kyiv', 'Wien', 'Berlin'];
}

let cities = cityList();
console.log(cities);

let cities2;
function cityList2() {
    cities2 = ['Kyiv', 'Wien', 'Berlin'];
}
cityList2();
console.log(cities2);

function User(name, admin, age) {
    this.name = name;
    this.isUser = admin;    
    if (age) {
        this.age = age;
    };
    if (age < 18) {
        this.isChild = true;
        this.momName = 'Mom';
        this.callMom = function() {
            console.log(this.momName + ' come here');
        };
    };
    // this.sayHi = function() {
    //     console.log('Hello! I am ' + this.name);
    // };
};

User.prototype.sayHi = function() {
    console.log('My name is: ' + this.name);
};

const user = new User('Harry', false, 46);
const user2 = new User('Bill', false, 25);
const user3 = new User('John', true, 16);

console.log(user);
console.log(user2);
console.log(user3.__proto__);

user.sayHi();
user2.sayHi();
user3.callMom();

console.log('---------- call - apply - bind ------------');

function greet() {
    console.log(this);
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
};

let person = {
    name: 'Tommy',
    age: 25,
};

let person2 = {
    name: 'Joe',
    age: 46,
};


greet.call(person2);
greet.apply(person);

let greetPerson = greet.bind(person);
greetPerson();
console.log(this);

// =================================================================

function Transport(name, wheels) {
    this.name = name;
    this.countOfWheel = wheels;
};

Transport.prototype.drive = function() {
    console.log(`${this.name} is driving`);
};

function Bike(name, wheels, speed) {
    Transport.call(this, name, wheels)
    this.speed = speed;
};

function Car(name, wheels, passangeer) {
    Transport.call(this, name, wheels)
    this.passangeer = passangeer;
};

Bike.prototype = Transport.prototype;
Car.prototype = Transport.prototype;

let bikeUkraine = new Bike('bike', 2, 45);
let fordCar = new Car('Ford', 4, 5);

console.log(bikeUkraine);
console.log(fordCar);

fordCar.drive();