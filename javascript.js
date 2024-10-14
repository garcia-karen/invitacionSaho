function crearEnlace() {
    var nombre = document.getElementById("nombre").value;
    var asistencia = document.getElementById("asistencia").value;

    var mensaje = "";

    if (asistencia === "si") {
      mensaje = "Hola, mi nombre es " + nombre + " y asistiré al evento. ¡Nos vemos allí!";
    } else if (asistencia === "no") {
      mensaje = "Hola, mi nombre es " + nombre + " y no podré asistir al evento. ¡Espero verlos la próxima vez!";
    } else if (asistencia === "no estoy seguro") {
      mensaje = "Hola, mi nombre es " + nombre + " y todavía no estoy seguro si podré asistir o no. ¡Hablemos pronto!";
    }
else if (asistencia === "ninguna") {
      mensaje = "Hola, mi nombre es " + nombre + "...";
    }

    var telefono = "525644404853";
    var url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

    var boton = document.createElement("button");
    boton.innerHTML = "Enviar mensaje a WhatsApp";
    boton.addEventListener("click", function() {
      window.open(url, "_blank");
    });

    var divBoton = document.getElementById("boton-whatsapp");
    divBoton.innerHTML = "";
    divBoton.appendChild(boton);
  }

  document.getElementById("asistencia").addEventListener("change", crearEnlace);
