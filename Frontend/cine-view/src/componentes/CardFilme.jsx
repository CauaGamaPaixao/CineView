function CardFilme({ filme }) {
    return (
        <div>
            <img src={filme.imagem} alt={filme.nome} />

            <h3>{filme.nome}</h3>

            <span>{filme.genero}</span>

            <p>{filme.dataLancamento}</p>

            <p>{filme.descricao}</p>
        </div>
    );
}

export default CardFilme;