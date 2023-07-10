/*let totalCarrito = 0;

const productosEnCarrito = [];

function agregarAlCarrito(nombreProducto, idPrecio) {
  const precioProducto = parseFloat(document.getElementById(idPrecio).textContent);
  totalCarrito += precioProducto;
  productosEnCarrito.push(nombreProducto);
  document.getElementById("total-carrito").textContent = "Total: $" + totalCarrito.toFixed(2);
  alert(nombreProducto + " se ha agregado al carrito.");
}

function borrarDelCarrito(nombreProducto, idPrecio) {
  if (totalCarrito > 0) {
    const precioProducto = parseFloat(document.getElementById(idPrecio).textContent);
    if (productosEnCarrito.includes(nombreProducto)) {
      totalCarrito -= precioProducto;
      productosEnCarrito.splice(productosEnCarrito.indexOf(nombreProducto), 1);
      document.getElementById("total-carrito").textContent = "Total: $" + totalCarrito.toFixed(2);
      alert(nombreProducto + " se ha eliminado del carrito.");
    } else {
      alert("Ud no compró este producto.");
    }
  } else {
    alert("El carrito está vacío");
  }
}

function finalizarCompra() {
  if (totalCarrito > 0) {
    // construir el mensaje de WhatsApp con el total del carrito y los productos
    const mensajeWhatsApp = "Hola, quiero comprar los siguientes productos por un total de $" + totalCarrito.toFixed(2) + ": " + productosEnCarrito.join(", ") + ".";
    // construir el enlace de WhatsApp con el mensaje
    const enlaceWhatsApp = "https://wa.me/542235930949?text=" + encodeURIComponent(mensajeWhatsApp);
    // redirigir al usuario a WhatsApp para finalizar la compra
    window.location.href = enlaceWhatsApp;
  } else {
    alert("El carrito está vacío");
  }
}*/
