
import Senha from "../shared/Senha";
import Usuario from "./Usuario";

export default class RepositorioUsuario {
    usuarios: Usuario[] = [
        new Usuario('charles@junior', '123456'),
        new Usuario('maria@silva', '123456'),
        new Usuario('joao@pereira', 'abc')
    ];

    encontrarIndice(email: string){
        const i = this.usuarios.findIndex(u => u.email === email);
        return i;
    }


    usuarioExiste(email: string){
        return this.encontrarIndice(email) >= 0;
    }

    loginCorreto(email: string, senha: string){
        const i = this.encontrarIndice(email);
        const senhaCorreta = Senha.comparar(senha, this.usuarios[i]?.senha);
        return senhaCorreta;
    }

}