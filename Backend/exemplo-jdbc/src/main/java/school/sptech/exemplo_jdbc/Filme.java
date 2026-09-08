package school.sptech.exemplo_jdbc;


import java.time.LocalDate;

public class Filme {

    private Integer id;
    private String imagem;
    private String nome;
    private String genero;
    private LocalDate dataLancamento;
    private String descricao;

    public Filme() {
    }

    public Filme(
            Integer id,
            String imagem,
            String nome,
            String genero,
            LocalDate dataLancamento,
            String descricao) {

        this.id = id;
        this.imagem = imagem;
        this.nome = nome;
        this.genero = genero;
        this.dataLancamento = dataLancamento;
        this.descricao = descricao;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public LocalDate getDataLancamento() {
        return dataLancamento;
    }

    public void setDataLancamento(LocalDate dataLancamento) {
        this.dataLancamento = dataLancamento;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
}