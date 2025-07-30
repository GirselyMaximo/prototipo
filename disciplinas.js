const disciplinas = [
  { nome: "Banco de dados", progresso: 87 },
  { nome: "Lógica de programação", progresso: 100 },
  { nome: "Teste de sistemas", progresso: 100 },
  { nome: "Internet das coisas", progresso: 100 },
  { nome: "Manutenção de sistemas", progresso: 100 },
  { nome: "Fundamentos de eletroeletrônica", progresso: 100 },
];

const container = document.getElementById("lista-disciplinas");

disciplinas.forEach(d => {
  const p = document.createElement("p");
  p.textContent = d.nome;

  const barra = document.createElement("div");
  barra.className = "barra";

  const span = document.createElement("span");
  span.style.width = `${d.progresso}%`;
  span.textContent = `${d.progresso}%`;

  barra.appendChild(span);
  container.appendChild(p);
  container.appendChild(barra);
});
