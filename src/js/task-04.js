let counterValue = 0;
const decrementButton = document.querySelector("[data-action = 'decrement']");
const incrementButton = document.querySelector("[data-action = 'increment']");
const ValueElement = document.querySelector('#value');

decrementButton.addEventListener('click', function () {
  console.log(decrementButton);
  counterValue -= 1;
  console.log(counterValue);
  ValueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', function () {
    console.log(incrementButton);
    counterValue += 1;
    console.log(counterValue);
    ValueElement.textContent = counterValue;
  });
  