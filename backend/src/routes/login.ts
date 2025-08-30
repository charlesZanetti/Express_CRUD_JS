import {Router}  from 'express';
import RepositorioUsuario from '../core/usuarios/RepositorioUsuario';
import  Jwt  from 'jsonwebtoken';

const router = Router();
const repo = new RepositorioUsuario();


router.post ('/', (req, res) => {
    const {email, senha} = req.body;

    if(!repo.usuarioExiste(email)){
         res.status(400).json({erro: 'Usuário não existe'});
    }
    else if (!repo.loginCorreto(email, senha)){
         res.status(400).json({erro: 'Senha incorreta'});
    } else {
        const token = Jwt.sign({email, senha}, process.env.ACCESS_TOKEN_SECRET as 'secret')
        res.status(200).json({token, mensagem: 'Login realizado com sucesso'});
    }
});

export default router;