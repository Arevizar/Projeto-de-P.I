const express = require('express');
const app = express();
const port = 3000;

// Define um diretório para servir os arquivos estáticos (HTML, CSS, JS, etc.)
app.use(express.static('TRAMPO'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/TRAMPO/index.html');
});

// Corrigi o fechamento da função app.get
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

