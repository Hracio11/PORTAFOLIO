// main.js

// Función para aplicar animaciones cuando los elementos entran en pantalla
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active"); // Activa animación
          observer.unobserve(entry.target); // Deja de observar una vez animado
        }
      });
    },
    { threshold: 0.2 } // Se activa cuando el 20% del elemento es visible
  );

  reveals.forEach(reveal => observer.observe(reveal));
});
