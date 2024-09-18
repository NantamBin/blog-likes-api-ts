import express from 'express';
import { createTables } from './db/database';
import postRouter from './domain/posts/routes/posts';
import commentRouter from './domain/comments/routes/comments';

const app = express();
const port = 3000;
// Middleware para tratar JSON
app.use(express.json());
// Iniciar o banco de dados e criar tabelas
createTables();

app.use('/api', postRouter);
app.use('/api', commentRouter);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}
`);

});