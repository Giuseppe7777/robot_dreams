
function clickFromHTML() {
    console.log('Hello Giuseppe from HTML');
};

let myButton = document.querySelector('button');
let textColor = document.getElementById('text');

myButton.addEventListener('click', (event) => {
    clickFromHTML();
    console.log('click: Hello Giuseppe from JS');
    // console.log(event);
});

myButton.addEventListener('mousedown', (event) => {
    clickFromHTML();
    console.log('mousemove: Hello Giuseppe from JS');
    textColor.style.color = 'green';
});

myButton.addEventListener('mouseup', (event) => {
    clickFromHTML();
    console.log('mousemove: Hello Giuseppe from JS');
    textColor.style.color = 'red';
});

let element = document.querySelector('#element');
element.addEventListener('keydown', (event) => {
    event.preventDefault();
    console.log('Кнопка натиснута');
    console.log(event);
});

function writeString() {
    const fillString = document.getElementById('emptyString');
    fillString.textContent = 'Мене заповнив JS';
}

