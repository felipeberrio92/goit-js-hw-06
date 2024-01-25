// Escuchar el evento input del elemento input#font-size-control
document.getElementById('font-size-control').addEventListener('input', function() {
    // Actualizar el font-size del elemento span#text usando el valor del deslizador
    document.getElementById('text').style.fontSize = this.value + 'px';
});