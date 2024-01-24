const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const listItems = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.className = "item";
  listItem.textContent = ingredient;
  return listItem;
});

list.append(...listItems);