const express = require('express');
const cors = require('cors');
const app = express();

// Permitir apenas uma origem específica
const corsOptions = {
  origin: 'https://loja-virtual-plum.vercel.app', // URL do seu frontend
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Exemplo de rota
app.get('/produtos', (req, res) => {
    res.json({ message: "Olá, produtos!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
