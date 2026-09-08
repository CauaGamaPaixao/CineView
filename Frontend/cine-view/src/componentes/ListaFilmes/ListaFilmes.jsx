import CardFilme from "../CardFilme/CardFilme";

import styles from "./ListaFilmes.module.css";

function ListaFilmes({
    filmes,
    carregando,
    erro,
    onBuscarFilmes
}) {

    return (
        <section className={styles.container}>

            <div className={styles.cabecalho}>

                <h2>
                    🍿 Filmes Cadastrados
                </h2>

                <p>
                    Total de filmes:
                    <span> {filmes.length}</span>
                </p>

            </div>

            <button className={styles.botao}
                type="button"
                onClick={onBuscarFilmes}
            >
                Atualizar filmes
            </button>

            {carregando && (
                <p>
                    Carregando filmes...
                </p>
            )}

            {erro && (
                <p>
                    {erro}
                </p>
            )}

            {!carregando && !erro && filmes.length === 0 && (

                <div className={styles.vazio}>

                    <p>
                        Nenhum filme cadastrado.
                    </p>

                </div>

            )}

            {!carregando && filmes.length > 0 && (

                <div className={styles.lista}>

                    {filmes.map((filme) => (

                        <CardFilme
                            key={filme.id}
                            filme={filme}
                        />

                    ))}

                </div>

            )}

        </section>
    );
}

export default ListaFilmes;