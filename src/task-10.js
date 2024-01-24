
const controls = document.getElementById('controls');
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.getElementById('boxes');

function createBoxes(amount) {
  boxes.innerHTML = '';
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `30px`;
    div.style.height = `30px`;
    div.style.backgroundColor = getRandomHexColor();
    if (i !== 0) {
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
    }
    boxes.appendChild(div);
  }
}
function destroyBoxes(){
  boxes.innerHTML = '';
  input.value = '';
}
createBtn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}