import { Router } from "express";
import RepositorioProdutos from "../core/produtos/RepositorioProdutos";

const repo = new RepositorioProdutos();
const router = Router();

router.get('/', (req, res) => {
    const dados = repo.obterTodos();
    res.status(200).send(dados);
});

router.post('/', (req, res) => {
    const { nome, preco } = req.body;
    const produtoCriado = repo.novo(nome, preco);
    res.status(201).json(produtoCriado);
});

router.get('/:codigo',  (req, res) => {
    const codigo = req.params.codigo;
    console.log('Buscando produto com codigo:', codigo);
    const produto = repo.obterPorCodigo(codigo);
    console.log('Produto encontrado:', produto);
    if (produto){
        res.status(200).json(produto);
    }else{
        res.status(404).json({ erro: 'Produto não encontrado', codigoBuscado: codigo });
    }
})

router.put('/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const { nome, preco } = req.body;
    repo.alterarPorcodigo(codigo, nome, preco);
    res.status(200).json();
})

router.delete('/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    repo.deletarPorcodigo(codigo);
    res.status(200).json();
})

export default router;