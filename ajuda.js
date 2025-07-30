const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();
let mensagem = "Olá, Pedro";

if (hora < 12) {
  mensagem = "Bom dia, Pedro";
} else if (hora < 18) {
  mensagem = "Boa tarde, Pedro";
} else {
  mensagem = "Boa noite, Pedro";
}
saudacao.textContent = mensagem;

// Respostas automáticas simples
function responder() {
  const pergunta = document.getElementById("pergunta").value.trim();
  const chat = document.getElementById("chat");

  if (!pergunta) return;

  const userMsg = `<p><strong>Você:</strong> ${pergunta}</p>`;
  chat.innerHTML += userMsg;

  let resposta = "Desculpe, não entendi.";

  if (pergunta.toLowerCase().includes("disciplina"))
    resposta = "Você pode ver suas disciplinas na tela inicial.";
  else if (pergunta.toLowerCase().includes("horário"))
    resposta = "Clique em 'Horários' no menu para ver sua grade.";
  else if (pergunta.toLowerCase().includes("professor"))
    resposta = "Informações sobre professores estão na seção 'Professor'.";
  else if (pergunta.toLowerCase().includes("oi") || pergunta.toLowerCase().includes("olá"))
    resposta = "Olá! Como posso ajudar?";

  chat.innerHTML += `<p><strong>Bot:</strong> ${resposta}</p>`;
  document.getElementById("pergunta").value = "";
  chat.scrollTop = chat.scrollHeight;
}
