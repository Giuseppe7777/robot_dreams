let num = [117, 15, 100000, 1, 55, "0", 7, false, 578, "5896777", 1001, "якесь число", 2510, true, 3512];

// Сума елементів масиву з перевіркою на число =======================

console.log("_______Сума елементів масиву________");

let sum = 0;

for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === "number") {
        sum += num[i];
    }        
}
console.log(`Сума елементів масиву = ${sum}`);

// Мінімальне та максимальне значення з перевіркою на число =========
console.log("_______Мінімальне та максимальне значення________");

let min = num[0];
let max = num[0]; 

for (let i = 1; i < num.length; i++) {
    if ((typeof num[i] === "number") && (num[i] < min)) {
        min = num[i];
    }

    if ((typeof num[i] === "number") && (num[i] > max)) {
        max = num[i];
    }
}
console.log(`Мінімальним є число: ${min}`);
console.log(`Максимальним є число: ${max}`);

// скрипт із ##### у рядках ============================
console.log("____________ скрипт із #### у рядках ____________");


let lines = [];
for (let i = 0; i <= 4; i++) {
    lines.push('#'.repeat(i+1));
}
let line = lines.join("\n");
console.log(line);










