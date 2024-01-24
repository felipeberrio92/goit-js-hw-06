// Seleccionar el formulario
const form = document.querySelector('.login-form');

// Agregar un listener para el evento 'submit'
form.addEventListener('submit', function(event) {
  // Prevenir el comportamiento predeterminado del formulario
  event.preventDefault();

  // Crear un objeto para almacenar los valores del formulario
  const formData = {};

  // Iterar sobre los elementos del formulario
  for (const element of form.elements) {
    // Verificar que el elemento no sea un botón de envío
    if (element.name && !element.disabled) {
      // Asignar el valor del elemento al objeto formData
      formData[element.name] = element.value;
    }
  }

  // Verificar que los campos no estén vacíos
  if (!formData.email || !formData.password) {
    alert('Por favor, complete todos los campos');
    return;
  }

  // Verificar que el email tenga un formato válido
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(formData.email)) {
    alert('Por favor, ingrese un email válido');
    return;
  }

  // Enviar los datos al servidor (simulación)
  console.log(formData);

  // Limpiar los campos del formulario utilizando el método reset
  form.reset();
});