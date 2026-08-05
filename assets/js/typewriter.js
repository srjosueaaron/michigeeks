(function () {
  const el = document.getElementById("eslogan");
  if (!el || typeof frasesEslogan === "undefined" || frasesEslogan.length === 0) {
    return;
  }

  // Velocidad "normal"
  const VELOCIDAD_ESCRITURA = 70;   // ms por letra al escribir
  const VELOCIDAD_BORRADO = 35;     // ms por letra al borrar
  const PAUSA_FRASE_COMPLETA = 1800; // ms que se queda la frase completa visible
  const PAUSA_ENTRE_FRASES = 400;    // ms de pausa antes de empezar a escribir la siguiente

  let indiceFrase = 0;
  let indiceLetra = 0;
  let borrando = false;

  function tick() {
    const fraseActual = frasesEslogan[indiceFrase];

    if (!borrando) {
      // Escribiendo
      indiceLetra++;
      el.textContent = fraseActual.substring(0, indiceLetra);

      if (indiceLetra === fraseActual.length) {
        borrando = true;
        setTimeout(tick, PAUSA_FRASE_COMPLETA);
        return;
      }
      setTimeout(tick, VELOCIDAD_ESCRITURA);
    } else {
      // Borrando
      indiceLetra--;
      el.textContent = fraseActual.substring(0, indiceLetra);

      if (indiceLetra === 0) {
        borrando = false;
        indiceFrase = (indiceFrase + 1) % frasesEslogan.length;
        setTimeout(tick, PAUSA_ENTRE_FRASES);
        return;
      }
      setTimeout(tick, VELOCIDAD_BORRADO);
    }
  }

  tick();
})();