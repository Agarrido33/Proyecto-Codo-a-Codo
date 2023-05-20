
//validacion de formulario de contacto
function valida_envia(){
    //valido el nombre
    if (document.fvalida.nombre.value.length==0){
          alert("Tiene que escribir su nombre")
          document.fvalida.nombre.focus()
          return 0;
        }
        //valido el apellido
      if (document.fvalida.apellido.value.length==0){
          alert("Tiene que escribir su apellido")
          document.fvalida.apellido.focus()
          return 0;
        }

         //valido el email
      if (document.fvalida.email.value.length==0){
      alert("Tiene que escribir su e-mail")
      document.fvalida.email.focus()
      return 0;
      }
        //valido su codigo postal
        if (document.fvalida.direccion.value.length==0){
          alert("Tiene que escribir su direccion")
          document.fvalida.codigopostal.focus()
          return 0;
        }
        //valido su direccion
        if (document.fvalida.direccion.value.length==0){
          alert("Tiene que escribir su direccion")
          document.fvalida.direccion.focus()
          return 0;
        }
        //el formulario se envia
        alert("Muchas gracias por enviar el formulario");
        document.fvalida.submit();
    }
