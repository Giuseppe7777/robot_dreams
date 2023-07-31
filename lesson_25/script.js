
// const person = {
//     name: 'Giuseppe',
//     great: function() {
//         console.log('Hallo, mein Name ist ' + this.name);
//     }
// }
// person.great();

// const book = {
//     title: 'Die Kunst der Programmierung',
//     author: {
//         firstName: "Giuseppe",
//         lastName: "Malanka"
//     },
//     pages: 672,
//     edition: 3,
//     printInfo: function() {
//         console.log(`"Die Kunst der Programmierung" vom Autor ${this.author.firstName} ${this.author.lastName} hat ${this.pages} Seiten`);
//     }
// };
// book.printInfo();

// console.log('_______________for ... in ____________________');
// for (const key in book) {
//     console.log(key);
// }
// console.log('_______________for ... in ____________________');

// const scool = {
//     name: 'ZBG Oberwart',
//     students: [
//         {name: 'Dmytro', age: 16, grade: 11},
//         {name: 'Julia', age: 18, grade: 12}
//     ],
//     teachers: {
//         math: "Frau Theresia",
//         sport: "Herr Doran"
//     }
// };

// console.log(scool.students[0].name);
// console.log(scool.teachers.sport);

// const person1 = {
//     name: 'Ivan',
//     age: 25,
//     location: 'Kyiv'
// };

// const xx = person1;
// xx.age = 20;
// console.log(person1.age);

// console.log('_______________for ... in ____________________');

// for (const key in person1) {
//     console.log(key);
// }

// console.log('_______________for ... in ____________________');

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.location);

// console.log('loc' in person1);


// const person2 = { 
//     name: 'Іван', 
//     age: 25, 
// };
    
// console.log(person2.name); 
// console.log(person2.age); 

// const key = 'name';
// console.log(person2[key]);

// console.log('age' in person2);
// console.log('name' in person2);

// for (const x in person2) {
//     console.log(x);
// }

// console.log('__________Копіювання об’єктів та посилання____________');

// const p = person2;
// p.name = 'Петро'
// console.log(person2.name);

// console.log('__________ Порівняння за посиланням ____________');

// const person4 = {
//     name: 'Julia',
//     age: 34,
//     location: 'Oberwart'
// }

// const person5 = {
//     name: 'Julia',
//     age: 34,
//     location: 'Oberwart'
// }

// console.log(person4 === person5);

// console.log('____ Клонування та злиття об’єктів, for..in _____');

// const original = {
//     a: 1,
//     b: 2
// };

// const clone = {...original};

// for (const key in original) {
//     console.log(key);
// }

// for (const key in clone) {
//     console.log(key);
// }

// const clone1 = Object.assign({}, original);
// for (const key in clone1) {
//     console.log(key);
// };

// const original3 = {
//     c: 3,
//     d: 4
// };

// const merged = {...original, ...original3}
// for (const y in merged) {
//     console.log(y);
// };

// const merged1 = Object.assign({}, original, original3);
// for (const yy in merged1) {
//     console.log(yy);
// };

// console.log('-----------------------------------------');


// for (const xxx in merged1) {
//     console.log(xxx, merged1[xxx]);
// };

// console.log('-----------------------------------------');

// const person6 = {
//     name: 'Julia',
//     age: 34, 
//     location: 'Oberwart'
// } 

// console.log(person6);

// const person7 = {};

// for (const key in person6) {
//     person7[key] = person6[key];
// };

// console.log(person7);
// console.log(person6.name === person7.name);

// console.log('-----------------------------------------');

// console.log('____ Збирання сміття _____');




// let giuseppe = {
//     name: 'Giuseppe',
//     sayHi: function() {
//         console.log(this.name);
//     }
// }

// let julia = {
//     name: 'Julia',
//     sayHi: function() {
//         console.log(this.name);
//     }
// }

// giuseppe.sayHi();
// julia.sayHi();

// console.log('____ Створення обєкту _____');

// const person = {
//     name: 'Julia',
//     age: 25,
//     location: 'Oberwart'
// };

// console.log('____ Виведення обєкту _____');

// console.log(person.location);

// console.log('____ Виведення всіх властивостей обєкту _____');

// for (let key in person) {
//     console.log(key, person[key]);
// };

// console.log('____ Виведення значення властивостей обєкту _____');

// for (let key in person) {
//     console.log(person[key]);
// };

// console.log('____ Виведення всіх властивостей обєкту _____');

// let keys = Object.keys(person);
// keys.forEach(key => {
//     console.log(key, person[key]);
// })

// // Object ========================================================================
// let person1 = {
//     name: "Іван",
//     age: 25,
//     occupation: "програміст",
//     greet: function() {
//         console.log("Привіт!");
//     }
// };
// // Object ========================================================================

// console.log(' ____ Квадратні дужки _____');

// const key = 'age';
// console.log(person1[key]);

// console.log(' ____ Перевірка властивості, оператор "in" _____');

// console.log('greet' in person1);

// console.log(' ___________ Цикл "for..in" __________');

// for (const key in person1) {
//     console.log(key);
//     console.log(person1[key]);
// }

// console.log(' ___________ Копіювання об’єктів та посилання __________');

// let person2 = person1;
// person2.name = 'Giuseppe';
// person2.age = 35;
// console.log(person1.name);
// console.log(person1.age);

// for (const key in person1) {
//     console.log(person1[key]);
// }

// for (const key in person2) {
//     console.log(key, person2[key]);
// }

// console.log(' ________Клонування та злиття об’єктів, for..in________');

// const person3 = {};
// for (const key in person1) {
//     person3[key] = person1[key];
// }

// for (const key in person3) {
//     console.log(key, person3[key]);
// }

const person = {
    firrstName: 'Giuseppe',
    lastName: 'Mal',
    id: 7788,
    fullName: function() {
        return this.firrstName + " " + this.lastName;
    }
};
for (let key in person) {
    console.log(key, person[key]);
};

console.log(person.id);
person.lastName = 'Malanka';
person.age = 46;
console.log(person.age);
console.log('----------------------------------------------------');
const person1 = {};
for (let key in person) {
    person1[key] = person[key];
};
for (let key in person1) {
    console.log(key, person1[key]);
};
console.log('----------------------------------------------------');
let ageOutput = person.age;
for (let ageOutput in person1) {
    console.log(person1[ageOutput]);
}

document.getElementById("demo").innerHTML = "Name: " + person1.fullName() + "<br>age: " + person1.age + "<br>ID: " + person1.id;