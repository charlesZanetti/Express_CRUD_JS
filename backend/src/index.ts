import express from "express";
import cors from "cors";
import rotasLogin from './routes/login';
import produtosRouter from './routes/produtos';
import dotenv from 'dotenv';
import autenticacao from "./core/middleware/autenditacao";

dotenv.config();

const app = express();
const porta = 4000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());
app.use('/login', rotasLogin);
app.use('/produtos', autenticacao, produtosRouter);


app.listen(porta, () => {
    console.log(`rodando na porta ${porta}`);
});
