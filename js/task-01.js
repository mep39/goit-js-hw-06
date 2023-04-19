const navEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${navEl.length}`);
navEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.querySelectorAll('li').length}`);
});

