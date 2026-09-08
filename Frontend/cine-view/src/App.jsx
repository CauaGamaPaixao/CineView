import { useState } from "react";

import Navbar from "./componentes/Navbar/Navbar";
import CardCadastro from "./componentes/CardCadastro/CardCadastro";
import ListaFilmes from "./componentes/ListaFilmes/ListaFilmes";

import styles from "./App.module.css";

function App() {

    const [filmes, setFilmes] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");

    async function buscarFilmes() {

        setCarregando(true);
        setErro("");

        try {

            const resposta = await fetch(
                "http://localhost:8080/filmes"
            );

            if (!resposta.ok) {
                throw new Error("Erro ao buscar filmes.");
            }

            const dados = await resposta.json();

            setFilmes(dados);

        } catch (erro) {

            setErro("Não foi possível carregar os filmes.");

        } finally {

            setCarregando(false);

        }
    }

    async function cadastrarFilme(novoFilme) {

        const resposta = await fetch(
            "http://localhost:8080/filmes",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoFilme)
            }
        );

        if (!resposta.ok) {
            throw new Error("Não foi possível cadastrar o filme.");
        }

        await resposta.json();

        buscarFilmes();
    }

    return (
        <div className={styles.app}>

            <Navbar />

            <main className={styles.conteudo}>

                <CardCadastro
                    onCadastrar={cadastrarFilme}
                />

                <ListaFilmes
                    filmes={filmes}
                    carregando={carregando}
                    erro={erro}
                    onBuscarFilmes={buscarFilmes}
                />

            </main>

        </div>
    );
}

export default App;