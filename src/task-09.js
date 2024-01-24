// Función para generar un coloradecimal aleatorio
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Selecciona el botón y el span donde se mostrará el color
const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

// Agrega un event listener al botón para cambiar el color de fondo y mostrarlo en el span
button.addEventListener('click', () => {
  // Genera un color hexadecimal aleatorio utilizando la función
  const randomColor = getRandomHexColor();

  // Cambia el color de fondo del body y lo muestra en el span
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});