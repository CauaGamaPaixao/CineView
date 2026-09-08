CREATE TABLE filme (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       imagem VARCHAR(500) NOT NULL,
                       nome VARCHAR(100) NOT NULL,
                       genero VARCHAR(100) NOT NULL,
                       data_lancamento DATE NOT NULL,
                       descricao VARCHAR(500) NOT NULL
);