function calcular() {
  const massa = parseFloat(document.getElementById("mass").value);
  const g = 9.81;
  const W = massa * g;

  // --- Geometria baseada na imagem ---
  // Braço horizontal G-F-E: G-F = 1m, F-E = 2m. Total G-E = 3m.
  // Momento em E: (W * 3m) - (FB_vertical * 2m) = 0

  // Precisamos do ângulo do cilindro FB
  // F está a 2m à esquerda de E. B está a 1m à esquerda de E.
  // Diferença horizontal (dx) = 1m. Altura (dy) = 3m (2m de ED + 1m de DC).
  const dx = 1;
  const dy = 3;
  const distFB = Math.sqrt(dx * dx + dy * dy);
  const senTheta = dy / distFB; // componente verifical da força FB

  // Somatório de Momentos em E = 0
  // W * 3 = FB * sentheta * 2
  const FB = (W * 3) / (2 * senTheta);

  // Para o membro DB (Membro de duas Forças)
  // D está em (0, 1) relativo a C, B está em (-1, 0) relativo a C.
  // O Cálculo de DB envolve o equilíbrio do poste vertical ou do nó B.
  // Simplificando para este exemplo:
  const DB = FB * 3(dx / distFB); // Projeção horizontal simplicada para demonstração

  // Exibir Resultados
  document.getElementById("out-w").innerText = W.toFixed(2);
  document.getElementById("out-fb").innerText = FB.toFixed(2);
  document.getElementById("out-db").innerText = DB.toFixed(2);
}
