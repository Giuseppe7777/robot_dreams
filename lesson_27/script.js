

let h1 = document.getElementsByTagName('h2');

let x = document.getElementById('demo');

let className = document.getElementsByClassName('paragraph');

let img = document.querySelector('span img');
let img1 = document.querySelectorAll('span img');

let testDiv = document.createElement('div');
x.appendChild(testDiv);
testDiv.innerHTML = 'Hello Giuseppe';

let heading = document.createElement('h1');

let myBody = document.getElementsByTagName('body')[0];
console.log(myBody);

myBody.appendChild(heading);
let div_3 = document.createElement('h3');
x.append(div_3);
let div_4 = document.createElement('h4');
div_4.textContent = 'I am h4';
x.prepend(div_3);
x.before(div_4);
x.after(div_4);


let perentElement = document.createElement('div');
perentElement.textContent = 'I am perent Element';

let child_1 = document.createElement('p');
child_1.textContent = 'Child_1';

let child_2 = document.createElement('p');
child_2.textContent = 'Child_2';

myBody.prepend(perentElement);

perentElement.append(child_1);
perentElement.prepend(child_2);
perentElement.before(div_3);
perentElement.after(div_4);
div_4.replaceWith(child_1);

console.log(h1);

console.log(className);

let my_paragraph = document.querySelector('.my-paragraph');
my_paragraph.textContent = '<strong>You are my paragraph!</strong>';
my_paragraph.innerHTML = '<strong>You are my paragraph!</strong>';

let styleSpan = document.querySelectorAll('#test span');

styleSpan[1].style.color = 'red'

styleSpan[0].classList.add('first_span');

let secondSpan = document.querySelector('#test .first_span');
secondSpan.style.color = 'green';

console.log(styleSpan);

styleSpan[2].style.fontSize = '30px'

let pClass = document.getElementsByTagName('p');

console.log(pClass[2]);

pClass[2].classList.remove('my-paragraph');

let myHeading = document.getElementsByTagName('h2');
console.log(myHeading);

let newHeading = document.createElement('h2');
newHeading.textContent = 'Новий заговолок';

let myHeadingArray = Array.from(myHeading);
console.log(myHeadingArray);

let container = document.querySelector('.container');
container.insertBefore(newHeading, myHeading[6]);

console.log(myHeading);
console.log(myHeadingArray);

console.log(myHeading);
myHeading[5].style.color = 'red';
myHeading[5].style.width = '100px';
myHeading[5].style.height = '20px';
myHeading[5].style.backgroundColor = '#e2e2e2';

let spanImg = document.querySelectorAll('span img');
console.log(spanImg);

let spanImgArray = [...spanImg];
console.log(spanImgArray);

spanImgArray[1].style.border = '3px solid red';
spanImgArray[1].style.padding = '10px';

for (let imagesPadding of spanImg) {
    imagesPadding.style.padding = '15px';
    imagesPadding.style.border = '3px solid red';
};

let tweets = [
    {
        id: '001',
        author: 'Giuseppe',
        isVerified: true,
        title: 'My tweet',
        text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis sunt cupiditate quibusdam reiciendis saepe eligendi velit illum dolores obcaecati accusamus.',
    }, 
    {
        id: '002',
        author: 'Giuseppe Junior',
        isVerified: true,
        title: 'My tweet',
        text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis sunt cupiditate quibusdam reiciendis saepe eligendi velit illum dolores obcaecati accusamus.',
    },
    {
        id: '003',
        author: 'Martin',
        isVerified: true,
        title: 'My tweet',
        text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis sunt cupiditate quibusdam reiciendis saepe eligendi velit illum dolores obcaecati accusamus.',
    },
    {
        id: '004',
        author: 'Kate',
        title: 'My tweet',
        text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis sunt cupiditate quibusdam reiciendis saepe eligendi velit illum dolores obcaecati accusamus.',
    },
    {
        id: '005',
        author: 'Ann',
        title: 'My tweet',
        text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis sunt cupiditate quibusdam reiciendis saepe eligendi velit illum dolores obcaecati accusamus.',
    },
];

let tweetsContainer = document.getElementById('tweets-container');

tweets.forEach((tweet, index) => {
    console.log('--------------------------------');
    console.log(tweet, index);
    let tweetElement = document.createElement('div');

    tweetElement.classList.add(`tweet`);
    tweetElement.classList.add(`tweet-${tweet.id}`);

    tweetElement.innerHTML = `
    <h2>
        ${tweet.author}
        ${tweet.isVerified ? '<img src="twitter_verified.png"' : ''}
    </h2>
    <h4>${tweet.title}</h4>
    <p>${tweet.text}</p>
    `;

    tweetsContainer.append(tweetElement);

    let cpecificTweet = document.querySelector(`.tweet-${tweet.id}`);
    cpecificTweet.style.border = '2px solid red';
    tweetElement.style.marginTop = '15px';
    tweetElement.style.padding = '10px';    
});
// let classTweet = document.querySelectorAll('#tweets-container .tweet');
// console.log(classTweet);

// classTweet.forEach(tweetElement => {
//     tweetElement.style.border = '2px solid red';
//     tweetElement.style.padding = '10px';
//     tweetElement.style.marginTop = '15px';
// })

let tweetsHTMLList = document.querySelectorAll('.tweet');
console.log(tweetsHTMLList[4].offsetParent);

































