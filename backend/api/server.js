import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { db } from './connectDb.js';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Server');
});

app.get('/artists', async (req, res) => {
    res.status(200).json(await db.collection('artists').find({}).toArray());
});

app.get('/songs', async (req, res) => {
    res.status(200).send(await db.collection('songs').find({}).toArray());
});

app.use((req, res) => {
    res.status(404).send('Rota não encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});