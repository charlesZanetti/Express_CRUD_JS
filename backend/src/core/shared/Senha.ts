import bcrypt from 'bcrypt';

export default class Senha {
    static cryptografar(senha: string){
        const senhaCryptografada = bcrypt.hashSync(senha, 5);
        return senhaCryptografada;
    }

    static  comparar(senha: string, senhaCryptografada: string) {
        const senhasIguais = bcrypt.compareSync(senha, senhaCryptografada);
        return senhasIguais;
    }
}