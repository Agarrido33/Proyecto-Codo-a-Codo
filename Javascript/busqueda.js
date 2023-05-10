// Obtener los elementos de la barra de búsqueda
var searchBox = document.querySelector('.search-box');
var searchInput = searchBox.querySelector('input[type="text"]');
var searchButton = searchBox.querySelector('#search-btn');

// Obtener el elemento de resultados de búsqueda
var searchResults = document.querySelector('#search-results');

// Función para buscar en la fuente de datos
function search(query) {
	// Aquí puedes agregar tu lógica de búsqueda, por ejemplo:
	// - Realizar una solicitud HTTP a una API
	// - Buscar en una base de datos local
	// - etc.

	// En este ejemplo, simplemente mostraremos un mensaje de búsqueda
	searchResults.textContent = 'Resultados de la búsqueda para: ' + query;
}

// Escuchar el evento de clic en el botón de búsqueda
searchButton.addEventListener('click', function() {
	// Obtener el valor de búsqueda del input
	var query = searchInput.value.trim();

	// Verificar si se ingresó un término de búsqueda
	if (query.length > 0) {
		// Realizar la búsqueda
		search(query);
	} else {
		// Mostrar un mensaje de error si no se ingresó ningún término de búsqueda
		searchResults.textContent = 'Por favor ingrese un término de búsqueda';
	}
});
