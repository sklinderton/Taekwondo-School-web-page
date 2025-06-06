document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();
    let mensajeValidacion = document.getElementById("mensaje-validacion");

    if (!nombre || !correo || !mensaje) {
        mensajeValidacion.textContent = "Por favor, complete todos los campos.";
        mensajeValidacion.style.color = "#ff6b6b";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        mensajeValidacion.textContent = "Por favor, ingrese un correo válido.";
        mensajeValidacion.style.color = "#ff6b6b";
    } else {
        mensajeValidacion.textContent = "✓ Mensaje enviado correctamente. ¡Gracias!";
        mensajeValidacion.style.color = "#51cf66";
        document.getElementById("formulario-contacto").reset();
        
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
            mensajeValidacion.textContent = "";
        }, 5000);
    }
});