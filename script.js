function calcular() {
  // 1. Pegando valores dos inputs
  const massa = parseFloat(document.getElementById("mass").value);
  const L_total = parseFloat(document.getElementById("L_total").value);
  const L_cil = parseFloat(document.getElementById("L_cil").value);
  const H = parseFloat(document.getElementById("H_braço").value);

  // Validação: se não for número, para aqui
  if (isNaN(massa) || isNaN(L_total) || isNaN(L_cil) || isNaN(H)) {
    alert("Preencha todos os campos com números válidos.");
    return;
  }

  // 2. Cálculo do Peso (W)
  const g = 9.81;
  const forcaPeso = massa * g; // Usando nome 'forcaPeso' para não confundir

  // 3. Momento em E: W * L_total = Fy_cilindro * L_cil
  const Fy_cilindro = (forcaPeso * L_total) / L_cil;

  // 4. Geometria FB
  const dx = 1;
  const distFB = Math.sqrt(Math.pow(dx, 2) + Math.pow(H, 2));
  const senThetaFB = H / distFB;
  const cosThetaFB = dx / distFB;

  // 5. Forças nos membros
  const FB = Fy_cilindro / senThetaFB;
  const Fx_cilindro = FB * cosThetaFB;
  const DB = Fx_cilindro / Math.cos(Math.PI / 4);

  // 6. EXIBIÇÃO NA TELA (Onde estava o erro)
  // Usamos o toFixed(2) para garantir que o número apareça com 2 casas decimais
  document.getElementById("out-w").innerText = forcaPeso
    .toFixed(2)
    .replace(".", ",");
  document.getElementById("out-fb").innerText = FB.toFixed(2).replace(".", ",");
  document.getElementById("out-db").innerText = DB.toFixed(2).replace(".", ",");

  console.log("Cálculo realizado: Peso =", forcaPeso);
}

document.getElementById("btn-calcular").onclick = calcular;
