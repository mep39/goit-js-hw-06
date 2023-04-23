// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// const makeCounter = () => {

    //     let counterValue = 0;
    //     return () => counterValue += 1
    // }
    // const count = makeCounter()
    // console.log(count())
    // console.log(count())
    // console.log(count())
// }

let counterValue = 0;

const plusBtn = document.querySelector('[data-action="increment"]');
const minusBtn = document.querySelector('[data-action="decrement"]');
const showResult = document.querySelector('#value');

const decrementValue = () => {
    counterValue -= 1;
    showResult.textContent = `${counterValue}`;
};

const incrementValue = () => {
    counterValue += 1;
    showResult.textContent = `${counterValue}`;
};

minusBtn.addEventListener('click', decrementValue);
plusBtn.addEventListener('click', incrementValue);

