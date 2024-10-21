const express = require('express');
const app = express();
const port = 3000;

// Define um diretório para servir os arquivos estáticos (HTML, CSS, JS, etc.)
app.use(express.static('snapshot'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
