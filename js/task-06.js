// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const input = document.querySelector('#validation-input');

const inputValue = +input.dataset.length;

input.addEventListener('blur', onCheckSymbols);

function onCheckSymbols(event) {
    const inputEnterLength = event.target.value.trim().length;

    if (inputEnterLength === inputValue) {
        input.classList.add('valid');
        input.classList.remove('invalid')
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid')
    }
}
// const textInput = document.querySelector(".text-input");
// const focusBtn = document.querySelector('[data-action="Please enter 6 symbols"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// focusBtn.addEventListener("click", (data-length === "6") => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });