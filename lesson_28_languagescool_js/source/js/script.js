

let imgShadow = document.querySelectorAll('.maingallery__image img');

imgShadow.forEach(element => {
    element.addEventListener('click', (event) => {

        element.classList.toggle('grow');

    });
});
