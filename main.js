// Inicialização da API Key. Substitua 'YOUR_API_KEY' pela sua chave real.
const apiKey = 'Chave API OPENAI';

// Função para enviar uma mensagem para a API OpenAI e receber uma resposta
async function sendMessage(message) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", 
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao enviar a mensagem:", error);
    throw error;
  }
}


window.sendMessage = sendMessage;


// Certifique-se de que a função sendMessage está acessível globalmente
window.sendMessage = sendMessage;
