const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
const dataLength = parseInt(input.getAttribute('data-length'), 10);
if (input.value.length === dataLength) {
   input.classList.add('valid');
   input.classList.remove('invalid');
} else {
   input.classList.add('invalid');
   input.classList.remove('valid');
}
});

input.addEventListener('input', () => {
const dataLength = parseInt(input.getAttribute('data-length'), 10);
if (input.value.length === dataLength) {
   input.classList.add('valid');
   input.classList.remove('invalid');
} else {
   input.classList.add('invalid');
   input.classList.remove('valid');
}
});