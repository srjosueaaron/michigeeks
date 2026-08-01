document.querySelectorAll('.btn-download').forEach(function (btn) {
  btn.addEventListener('click', function () {
    const original = btn.textContent;
    btn.textContent = 'Iniciando descarga…';
    btn.classList.add('disabled');

    setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove('disabled');
    }, 1800);
  });
});