 // Función para mostrar/ocultar descripciones
 function mostrarDescripcion(boton) {
    var descripcion = boton.previousElementSibling;
    if (descripcion.style.display === 'none') {
      descripcion.style.display = 'block';
      boton.innerHTML = 'Ocultar Descripción';
    } else {
      descripcion.style.display = 'none';
      boton.innerHTML = 'Mostrar Descripción';
    }
  }

  // Ejecutar este código después de que el DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los elementos de descripción
    var descripciones = document.querySelectorAll('.descripcion');

    // Agregar un evento "click" al elemento document
    document.addEventListener('click', function(event) {
      // Verificar si el elemento que se hizo clic es una descripción o un botón de mostrar descripción
      if (!event.target.closest('.producto') && !event.target.matches('.boton-descripcion')) {
        // Ocultar todas las descripciones
        descripciones.forEach(function(descripcion) {
          descripcion.style.display = 'none';
          descripcion.nextElementSibling.innerHTML = 'Mostrar Descripción';
        });
      }
    });
  });