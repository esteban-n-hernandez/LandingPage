document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const provincia = document.getElementById("provincia").value.trim();
    const tipo = document.getElementById("tipo").value;
    const mensaje = document.getElementById("mensaje").value.trim();


    const destino = "5492984127965";

    let texto =
        `Nuevo contacto desde la web:%0A%0A` +
        `Nombre: ${nombre}%0A` +
        `Teléfono: ${telefono}%0A` +
        `Email: ${email}%0A` +
        `Ciudad: ${ciudad}%0A` +
        `Provincia: ${provincia}%0A`;

    if (tipo !== "") {
        texto += `Tipo de propiedad: ${tipo}%0A`;
    }

    texto += `Mensaje: ${mensaje}`;

    const url = `https://wa.me/${destino}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});

document.getElementById("btnConsulta").addEventListener("click", () => {
    document.getElementById("contacto").scrollIntoView({behavior: "smooth"});
});
