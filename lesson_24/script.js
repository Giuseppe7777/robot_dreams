// function sum(a, b) {
//     return a + b;
// }
// sum(5, 6);
// console.log(sum(5, 8));

// function cl() {
//     console.log('Hello World');
// }
// cl();

// function sum(a, b) {
//     let zrr = [1, 2, 3];
//     if ((a === 0 || a) && (b === 0 || b)) {
//         console.log(a + b);
//     } else {
//         console.log('Error');
//     }

//     for (let index = 0; index < zrr.length; index++) {
//         console.log(zrr[index]);
//     }
// }

// sum(7, 8);
// sum(70, 'rthdrthd');
// sum(70, undefined);
// sum(700, 800);

// let zrr = [1, 2, 3];

// let myGlobalVar;

// myGlobalVar = function (a, b) {
//     return a + b;
// }

// console.log(myGlobalVar(5, 6));

// let i = diff(5, 2);
// let ii = diff(null, 20);
// let iii = diff(500, 200);

// console.log(i);
// console.log(ii);
// console.log(iii);

// let varFunc = function() {
//     return 'Hi Giuseppe';
// }

// let result = varFunc();
// console.log(result);

// let variableFunction = function(message) {
//     console.log(`Hi,`, message);
// }

// Julia = 'Julia';

// variableFunction("Giuseppe");
// variableFunction(Julia);

// function add(a, b) {
//     return a + b;
// }

// let x = add(5, 6);
// console.log(x);

// let numSum = function(a, b) {
//     return a + b;
// }

// console.log(numSum(7, 8));

// console.log('___________ function declaration ___________');

// function calculateArea(length, white) {
//     return length * white;
// }

// console.log('result of "calculateArea"');
// console.log(calculateArea(7, 9));
// console.log(calculateArea(11, 11));

// console.log('___________ function expression ___________');

// let calcArea = function(length, whidth) {
//     return length * whidth;
// }

// console.log('result of "calculateArea"');
// console.log(calcArea(11, 11));
// console.log(calcArea(15, 15));

// let calculateArea = (length, width) => length * width;

// console.log(calculateArea(15, 15));

// let arrowFunc = (message) => {
//     console.log('Hi', message);
// };

// arrowFunc();
// arrowFunc('Giuseppe');
// arrowFunc();

// let calcSum = (a, b) => {
//     return a + b};
    
// console.log(calcSum(7, 8));

// function calcSum(a, b) {
//     return a + b;
// }

// let result = calcSum(11, 15);
// console.log(result);

// let calcArea = function(length, width) {
//     return length * width;
// }
// console.log(calcArea(15, 20));

// let calcVol = (length, width, height) => {
//     return length * width * height;
// }
// console.log(calcVol(15, 10, 10));

// let calcSumm = (a, b, c, d) => (a + b + c) * d;
// console.log(calcSumm(5, 5, 5, 10));

// let writeMessage = (message) => `Hi, ${message}`;
// let res = writeMessage('Giuseppe');
// console.log(res);

// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n);
//     }
// }

// let calc = createCalcFunction(42);
// calc();

// function createIncrementor(n) {
//     return function(num) {
//         return n + num;
//     }
// }

// let addOne = createIncrementor(1);
// console.log(addOne(10));
// console.log(addOne(20));

// let addTwo = createIncrementor(100);
// console.log(addTwo(100));
// console.log(addTwo(200));


// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// let comUrl = urlGenerator('com');
// let uaUrl = urlGenerator('ua');
// let atUrl = urlGenerator('at');

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));
// console.log(uaUrl('pravda'));
// console.log(atUrl('oberwart'));



// function bind(name) {
//     return function(age, job) {
//         return `name: ${name}, ${age}, ${job};`
//     }
// }

// let person1 = bind("Josef senior");
// let person2 = bind("Josef junior");

// console.log(person1('46', 'Fullstack'));
// console.log(person2('16', 'C#'));

// console.log("___________ closures ____________");

// function makeCounter() {
//     let count = 0;
//     return function() {
//         return count++;
//     }
// }

// let counter = makeCounter();
// let counter1 = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());


// function multiply(a, b) {
//     console.log(typeof b);
//     b = typeof b !== "undefined" ? b : 1;
//     return a * b;
// }

// console.log(multiply(5, 7)); 

// let x = confirm();

// if (x == true) {
//     console.log("Hi, Giuseppe");
// } else {
//     console.log("Hi, Julia");
// }

// function prepare(boxes) {
//     const boxStorage = [...boxes];
//     return function(item) {
//         return boxStorage.pop() + item + ', boxes left ' + boxStorage.length;
//     }
// }

// const pack = prepare(Array.from('🎁🎁🎁🎁🎁🎁🎁'));

// console.log(pack('🍫'));
// console.log(pack('🍬'));
// console.log(pack('🍭'));

// function pack(item, boxes) {
//     return boxes.pop() + item + ', boxes left ' + boxes.length;
// }

// let boxes = Array.from('🎁🎁🎁🎁🎁🎁🎁');

// console.log(pack('🍫', boxes));
// console.log(pack('🍬', boxes));
// console.log(pack('🍭', boxes));

// let text = 'Outside: ' + typeof carName;
// document.getElementById("demo1").innerHTML = text

// function myFunction() {
//     let carName = "Volvo";
//     let text = 'Inside: ' + typeof carName + " " + carName;
//     document.getElementById("demo2").innerHTML = text
//     console.log(text);
// }

// myFunction();





