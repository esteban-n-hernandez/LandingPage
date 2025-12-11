document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const ciudad = document.getElementById("ciudad").value;
    const provincia = document.getElementById("provincia").value;
    const tipo = document.getElementById("tipo").value;
    const mensaje = document.getElementById("mensaje").value;

    const destino = "5491153491265";

    // Mensaje ordenado
    const texto =
        `Nuevo contacto desde la web:%0A%0A` +
        `Nombre: ${nombre}%0A` +
        `Teléfono: ${telefono}%0A` +
        `Email: ${email}%0A` +
        `Ciudad: ${ciudad}%0A` +
        `Provincia: ${provincia}%0A` +
        `Tipo de propiedad: ${tipo}%0A` +
        `Mensaje: ${mensaje}`;

    const url = `https://wa.me/${destino}?text=${texto}`;

    window.open(url, "_blank");
});


document.getElementById("btnConsulta").addEventListener("click", () => {
    document.getElementById("contacto").scrollIntoView({behavior: "smooth"});
});
