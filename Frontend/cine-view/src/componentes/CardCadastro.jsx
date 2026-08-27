import { useState } from "react";
import styles from "./CardCadastro.module.css"

function CardCadastro () {

    const [imagem, setImagem] = useState("");
    const [nome, setNome] = useState("");
    const [genero, setGenero] = useState("");
    const [dataLancamento, setDataLancamento] = useState("");
    const [descricao, setDescricao] = useState("");

    function cadastrarFilme(e) {
        e.preventDefault();

        const filme = {
            imagem: imagem,
            nome: nome,
            genero: genero,
            dataLancamento: dataLancamento,
            descricao: descricao
        };

        console.log (filme);
    }

    return (
        <div className={styles.card}>
            <h2 className={styles.titulo}>Cadastrar Filme</h2>
            <form className={styles.formulario} onSubmit={cadastrarFilme}>
                
                <div className={styles.campo}>
                    <label className={styles.label}>URL da Imagem</label>
                    <input className={styles.input} type="text" 
                        placeholder="https://exemplo.com/imagem.jpg"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    />
                </div>

                <div className={styles.campo}>
                <label className={styles.label}>Nome do Filme</label>
                <input className={styles.input} type="text" 
                    placeholder="Digite o nome do filme"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                </div>
                
                <div className={styles.campo}>
                <label className={styles.label}>Gênero</label>
                <input className={styles.input} type="text" 
                    placeholder="Ex: Ação, Comédia, Drama..."
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                />
                </div>
                
                <div className={styles.campo}>
                <label className={styles.label}>Data de Lançamento</label>
                <input className={styles.input} type="date" 
                    value={dataLancamento}
                    onChange={(e) => setDataLancamento(e.target.value)}
                />
                </div>

                <div className={styles.campo}>
                <label className={styles.label}>Descrição</label>
                <textarea className={styles.textarea}
                    placeholder="Digite uma breve descrição sobre o filme"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                </div>

                <br />
                
                <button className={styles.botao} type="submit">Cadastrar Filme</button>
            </form>
        </div>
    )
}

export default CardCadastro;