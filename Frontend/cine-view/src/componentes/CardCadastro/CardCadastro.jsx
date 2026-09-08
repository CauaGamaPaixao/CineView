import { useState } from "react";

import styles from "./CardCadastro.module.css";

function CardCadastro({ onCadastrar }) {

    const [imagem, setImagem] = useState("");
    const [nome, setNome] = useState("");
    const [genero, setGenero] = useState("");
    const [dataLancamento, setDataLancamento] = useState("");
    const [descricao, setDescricao] = useState("");

    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");

    async function cadastrarFilme(event) {

        event.preventDefault();

        setCarregando(true);
        setMensagem("");
        setErro("");

        const filme = {
            imagem: imagem,
            nome: nome,
            genero: genero,
            dataLancamento: dataLancamento,
            descricao: descricao
        };

        try {

            await onCadastrar(filme);

            setImagem("");
            setNome("");
            setGenero("");
            setDataLancamento("");
            setDescricao("");

            setMensagem("Filme cadastrado com sucesso!");

        } catch (erro) {

            setErro("Não foi possível cadastrar o filme.");

        } finally {

            setCarregando(false);

        }
    }

    return (
        <section className={styles.card}>

            <h2 className={styles.titulo}>
                🎬 Cadastrar Filme
            </h2>

            <form
                className={styles.formulario}
                onSubmit={cadastrarFilme}
            >

                <div className={styles.campo}>

                    <label htmlFor="imagem">
                        URL da Imagem
                    </label>

                    <input
                        id="imagem"
                        type="url"
                        placeholder="https://exemplo.com/imagem.jpg"
                        value={imagem}
                        onChange={(event) =>
                            setImagem(event.target.value)
                        }
                        required
                    />

                </div>

                <div className={styles.campo}>

                    <label htmlFor="nome">
                        Nome do Filme
                    </label>

                    <input
                        id="nome"
                        type="text"
                        placeholder="Digite o nome do filme"
                        value={nome}
                        onChange={(event) =>
                            setNome(event.target.value)
                        }
                        required
                    />

                </div>

                <div className={styles.campo}>

                    <label htmlFor="genero">
                        Gênero
                    </label>

                    <select
                        id="genero"
                        value={genero}
                        onChange={(event) =>
                            setGenero(event.target.value)
                        }
                        required
                    >

                        <option value="">
                            Selecione um gênero
                        </option>

                        <option value="Ação">
                            Ação
                        </option>

                        <option value="Aventura">
                            Aventura
                        </option>

                        <option value="Comédia">
                            Comédia
                        </option>

                        <option value="Drama">
                            Drama
                        </option>

                        <option value="Ficção Científica">
                            Ficção Científica
                        </option>

                        <option value="Terror">
                            Terror
                        </option>

                        <option value="Suspense">
                            Suspense
                        </option>

                        <option value="Animação">
                            Animação
                        </option>

                    </select>

                </div>

                <div className={styles.campo}>

                    <label htmlFor="dataLancamento">
                        Data de Lançamento
                    </label>

                    <input
                        id="dataLancamento"
                        type="date"
                        value={dataLancamento}
                        onChange={(event) =>
                            setDataLancamento(event.target.value)
                        }
                        required
                    />

                </div>

                <div className={styles.campo}>

                    <label htmlFor="descricao">
                        Descrição
                    </label>

                    <textarea
                        id="descricao"
                        placeholder="Digite uma breve descrição sobre o filme..."
                        value={descricao}
                        onChange={(event) =>
                            setDescricao(event.target.value)
                        }
                        required
                    />

                </div>

                <button
                    type="submit"
                    className={styles.botao}
                    disabled={carregando}
                >

                    {carregando
                        ? "Cadastrando..."
                        : "Cadastrar Filme"
                    }

                </button>

                {mensagem && (
                    <p>
                        {mensagem}
                    </p>
                )}

                {erro && (
                    <p>
                        {erro}
                    </p>
                )}

            </form>

        </section>
    );
}

export default CardCadastro;