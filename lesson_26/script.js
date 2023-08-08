
function Accumulator(initialValue) {
    this.value = initialValue;
    this.increment = function() {
        return ++this.value;
    };
    this.decrement = function() {
        return --this.value;
    };
};

function CancelableAccumulator(initialValue) {
    Accumulator.call(this, initialValue); 
    this.initialValue = initialValue; 
    this.clear = function() {
        this.value = this.initialValue;
    };
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

let acc = new CancelableAccumulator(100);
acc.increment();
console.log(acc.value);
acc.increment();
console.log(acc.value);
acc.increment();
console.log(acc.value);
acc.increment();
console.log(acc.value);
acc.increment();
console.log(acc.value);
acc.increment();
console.log(acc.value);
acc.decrement();
console.log(acc.value);
acc.clear();
console.log(acc.value);
acc.increment();
console.log(acc.value);
acc.increment();
console.log(acc.value);