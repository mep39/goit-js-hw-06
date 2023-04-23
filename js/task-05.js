// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//  підставляє його поточне значення в span#name-output. Якщо інпут порожній,
//  у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt 
// та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

// const letMeSeeYourName = (cb) => {
//     const message = prompt("Please enter your name")
//     if(!message) {
//         return "Anonymous";
//     }
//     cb(message)
// }
// function greet(name) {
//     console.log(`Hello, ${name}`)
// }
// letMeSeeYourName(greet);

const inputNameUser = document.querySelector('#name-input');
const greetUser = document.querySelector('#name-output');

inputNameUser.addEventListener('input', event => {
    event.preventDefault();

    const inputValue = inputNameUser.value;

    if (inputValue !== '') {
        greetUser.textContent = `${inputValue}`;
    } else {
        greetUser.textContent = `Anonymous`;
    }
});

