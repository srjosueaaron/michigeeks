// header.js
// Inyecta el <header> completo (navbar + banner de eslogan) en cualquier página.
// Uso: coloca <script src="assets/js/header.js"></script> justo donde
// antes tenías el bloque <header>...</header>.
//
// Nota: usamos document.write() a propósito, porque se ejecuta en el
// momento exacto en que el navegador está parseando el HTML, así que
// funciona igual abriendo el archivo directo (file://) o en GitHub Pages,
// sin necesidad de fetch() ni de un servidor local.

// SITE_ROOT permite reusar este mismo header.js desde subcarpetas
// (por ejemplo tickets/generador.html). Antes de llamar a header.js,
// en páginas dentro de una subcarpeta agrega:
//   <script>window.SITE_ROOT = "../";</script>
// En páginas de la raíz (index.html, manuales.html, etc.) no hace falta
// definir nada: se usa "" por defecto y todo funciona como hasta ahora.
const ROOT = window.SITE_ROOT || "";

document.write(`
<header>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="${ROOT}index.html">
        <img src="${ROOT}assets/img/michi-corazon.png" alt="Michigeeks" height="50" class="me-2">
        Michigeeks
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav me-auto" id="navMenu">
          <li class="nav-item">
            <a class="nav-link" href="${ROOT}index.html" data-page="index.html">Inicio
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.facebook.com/share/p/1Bh8rgMhAi/" data-page="https://www.facebook.com/share/p/1Bh8rgMhAi/">
              Referencias
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://wa.me/525568942312?text=Hola!" data-page="office2024.html">
              WhatsApp

              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.36 2 11.75c0 2.02.65 3.9 1.76 5.46L2.5 21.5l4.5-1.18a10.3 10.3 0 0 0 5 1.28c5.52 0 10-4.36 10-9.75S17.52 2 12 2Zm0 17.7c-1.6 0-3.1-.44-4.38-1.2l-.31-.18-2.68.7.72-2.55-.2-.32A7.9 7.9 0 0 1 4.1 11.75C4.1 7.47 7.66 4 12 4s7.9 3.47 7.9 7.75-3.56 7.95-7.9 7.95Zm4.3-5.9c-.24-.12-1.4-.68-1.62-.76-.22-.08-.38-.12-.54.12-.16.24-.62.76-.76.92-.14.16-.28.18-.52.06-.24-.12-1-.36-1.9-1.15-.7-.6-1.18-1.35-1.32-1.58-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.28-.74-1.76-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.8-.84 1.96 0 1.16.86 2.28.98 2.44.12.16 1.7 2.56 4.12 3.6.58.24 1.03.39 1.38.5.58.18 1.1.15 1.52.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z"/>
              </svg>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://m.me/michi.geeks.2025"" data-page="office365.html">
            FB Messenger
            
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.24 2 11.5c0 2.98 1.44 5.63 3.7 7.37V22l3.38-1.86c.9.25 1.87.38 2.92.38 5.52 0 10-4.24 10-9.5S17.52 2 12 2Zm1.02 12.79-2.55-2.72-4.98 2.72 5.48-5.82 2.6 2.72 4.93-2.72-5.48 5.82Z"/>
            </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="bg-dark text-center text-lg-start pt-0 pb-2 border-secondary-subtle">
    <div class="container-fluid px-lg-4">
      <p class="fs-6 mb-0 text-cyan">
        <span id="eslogan"></span><span class="cursor"></span>
      </p>
    </div>
  </div>
</header>
`);

// Marca automáticamente como "activo" el link que corresponde a la página actual.
// Así no tienes que editar manualmente cuál lleva la clase "active" en cada archivo.
document.addEventListener("DOMContentLoaded", function () {
  const paginaActual = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#navMenu .nav-link").forEach(function (link) {
    if (link.dataset.page === paginaActual) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
});