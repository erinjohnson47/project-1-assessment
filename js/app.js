console.log('This JS file has loaded.')

const num = document.querySelector('.num'); //variable for input box
const add = document.querySelector('.add'); //variable for + button
const sub = document.querySelector('.sub'); //variable for - button
let result = document.querySelector('#result'); //variable for results
let finalResult = 0;

result.innerText = 0;
num.value = 1;

document.addEventListener('click', e => {
    switch (e.target) {
        case add:
            finalResult = parseInt(result.innerText) + parseInt
            (num.value);
            result.innerText = finalResult;
            break;
        case sub: 
            finalResult = parseInt(result.innerText) - parseInt(num.value);
            result.innerText = finalResult;
            break;
    }
});

if (finalResult < 0) {
    result.innerText.style.color = 'red';
}



