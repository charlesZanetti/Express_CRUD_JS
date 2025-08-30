import { Link } from "react-router-dom";
import Botao from "../components/Botao";
import Tabela from "../components/Tabela";
import Requisicao from "../core/Requisicao";
import useNavegar from "../hooks/useNavegar";
export default function Home() {

    const { voltarLogin } = useNavegar();

    function logout(){
        Requisicao.apagaToken();
        voltarLogin();
    }

    return (
        <>
            <div className="flex justify-end">
                <Botao cor="red" className="mb-4 mx-3" onClick={logout}>
                    Logout
                </Botao>
                <Botao cor="green" className="mb-4 mx-3">
                    <Link to="/novo">Novo Produto</Link>
                </Botao>
            </div>
            <Tabela />
        </>
    );
}
