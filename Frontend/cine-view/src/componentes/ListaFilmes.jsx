import CardFilme from "./CardFilme";

function ListaFilmes({ filmes }) {

    return (
        <section>

            <h2>🍿 Filmes Cadastrados</h2>

            <p>
                Total de filmes: {filmes.length}
            </p>

            <div>
                {filmes.map((filme) => (
                    <CardFilme
                        key={filme.id}
                        filme={filme}
                    />
                ))}
            </div>

        </section>
    );
}

export default ListaFilmes;