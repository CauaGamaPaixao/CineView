import styles from "./CardFilme.module.css";

function CardFilme({ filme }) {

    function formatarData(data) {

        if (!data) {
            return "";
        }

        const partes = data.split("-");

        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }

    return (
        <article className={styles.card}>

            <img
                src={filme.imagem}
                alt={`Capa do filme ${filme.nome}`}
                className={styles.imagem}
            />

            <div className={styles.conteudo}>

                <h3 className={styles.nome}>
                    {filme.nome}
                </h3>

                <span className={styles.genero}>
                    {filme.genero}
                </span>

                <p className={styles.data}>
                    🗓 {formatarData(filme.dataLancamento)}
                </p>

                <p className={styles.descricao}>
                    {filme.descricao}
                </p>

            </div>

        </article>
    );
}

export default CardFilme;