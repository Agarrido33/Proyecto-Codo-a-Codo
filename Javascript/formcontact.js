// Validación de email
function valida_envia() {
  const form = document.getElementsByTagName('form')[0];
  const email = document.getElementById('mail');
  const emailError = document.querySelector('#mail + span.error');

  email.addEventListener('input', function (event) {
    // Cada vez que el usuario escribe algo, verificamos si
    // los campos del formulario son válidos.
    if (email.validity.valid) {
      // En caso de que haya un mensaje de error visible y el campo
      // sea válido, eliminamos el mensaje de error.
      emailError.innerHTML = ''; // Restablece el contenido del mensaje
      emailError.className = 'error'; // Restablece el estado visual del mensaje
    } else {
      // Si todavía hay un error, muestra el error exacto
      showError();
    }
  });

  form.addEventListener('submit', function (event) {
    // Si el campo de correo electrónico no es válido, mostramos un mensaje de error apropiado
    if (!email.validity.valid) {
      showError();
      // Evitamos que se envíe el formulario cancelando el evento
      event.preventDefault();
    }
  });

  function showError() {
    if (email.validity.valueMissing) {
      // Si el campo está vacío, muestra el mensaje de error siguiente.
      emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
    } else if (email.validity.typeMismatch) {
      // Si el campo no contiene una dirección de correo electrónico, muestra el mensaje de error siguiente.
      emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
    } else if (email.validity.tooShort) {
      // Si los datos son demasiado cortos, muestra el mensaje de error siguiente.
      emailError.textContent = `El correo electrónico debe tener al menos ${email.minLength} caracteres; ha introducido ${email.value.length}.`;
    }

    // Establece el estilo apropiado
    emailError.className = 'error activo';
  }
}

// Para que no se abra la página de Formspree
const $form = document.querySelector('#form');

$form.addEventListener('submit', handlesubmit);

async function handlesubmit(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    this.reset();
    alert("¡Muchas gracias por consultar! Le responderemos a la brevedad :)");
  }
}

// Llamamos a la función de validación cuando se carga la página
valida_envia();
