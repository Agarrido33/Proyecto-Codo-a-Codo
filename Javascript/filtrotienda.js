// Obtener el input de filtro de categoría
const filtroCategoria = document.getElementsByName('filtroCategoria');

// Escuchar los eventos de cambio en el filtro de categoría
for (let i = 0; i < filtroCategoria.length; i++) {
  filtroCategoria[i].addEventListener('change', filtrar);
}

function filtrar() {
  // Obtener el valor del filtro de categoría seleccionado
  let valorCategoria = '';
  for (let i = 0; i < filtroCategoria.length; i++) {
    if (filtroCategoria[i].checked) {
      valorCategoria = filtroCategoria[i].value;
      break;
    }
  }

  // Obtener los elementos a filtrar
  const productos = document.getElementsByClassName('producto');

  // Recorrer los elementos y mostrar u ocultar según el filtro
  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const categoria = producto.getAttribute('data-categoria');

    // Mostrar u ocultar el elemento según el filtro
    if (valorCategoria === 'todos' || valorCategoria === categoria) {
      producto.style.display = 'block';
    } else {
      producto.style.display = 'none';
    }
  }
}

