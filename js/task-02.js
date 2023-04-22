const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");
const listCreation = content => {
return content.map((ingredient) => {
const liEl = document.createElement('li');
liEl.textContent = ingredient;
liEl.classList.add("item");
return liEl;
});
}
const el = listCreation(ingredients);
list.append(...el);
console.log(list);