function redirigir(pagina) {
    window.location.href = pagina;
}
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
})
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        // Expande la sección al pasar el cursor (desktop)
        section.addEventListener("mouseover", () => {
            section.classList.add("expanded");
        });

        // Restaura el tamaño original al quitar el cursor
        section.addEventListener("mouseout", () => {
            section.classList.remove("expanded");
        });

        // Expande la sección al tocar (móviles)
        section.addEventListener("touchstart", () => {
            section.classList.add("expanded");
        });

        // Restaura el tamaño original al quitar el toque
        section.addEventListener("touchend", () => {
            section.classList.remove("expanded");
        });
    });
});
