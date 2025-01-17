const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');


//Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); //Habilita cors para todas as origens

//Midleware para analisar JSON
app.use(express.json());

//Rotas
app.use('/users', require('./routes/userRoutes'));

//Inicia o servidor
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ${PORT');
});
