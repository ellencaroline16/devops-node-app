const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API rodando com sucesso!',
    author: 'Ellen Caroline',
    status: 'ok',
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.get('/soma/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parâmetros inválidos, envie dois números.' });
  }

  return res.status(200).json({ a, b, resultado: a + b });
});

module.exports = app;
