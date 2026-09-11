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
            <a class="nav-link" href="${ROOT}manuales.html" data-page="manuales.html">Manuales</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${ROOT}office2024.html" data-page="office2024.html">Office 2024 LTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="${ROOT}office365.html" data-page="office365.html">Office 365 Anual</a>
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