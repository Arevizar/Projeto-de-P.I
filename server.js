const express = require('express');
const app = express();
const port = 3000;

// Middleware para processar os dados do formulário
app.use(express.urlencoded({ extended: true }));

// Define um diretório para servir os arquivos estáticos (HTML, CSS, JS, etc.)
app.use(express.static('TRAMPO'));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/TRAMPO/index.html');
});

// Rota para processar o formulário
app.post('/enviar-mensagem', (req, res) => {
  const { name, email, message } = req.body;

  console.log(`Mensagem recebida de ${name} (${email}): ${message}`);

  // Enviar uma resposta ao usuário com estilos
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mensagem Recebida</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          background-color: #f4f4f9;
          color: #333;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 500px;
        }
        h1 {
          color: #007bff;
        }
        p {
          font-size: 16px;
          line-height: 1.5;
        }
        a {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 20px;
          color: white;
          background-color: #007bff;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }
        a:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Obrigado por entrar em contato!</h1>
        <p>Recebemos sua mensagem e responderemos em breve.</p>
        <a href="/">Voltar para a página inicial</a>
      </div>
    </body>
    </html>
  `);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});