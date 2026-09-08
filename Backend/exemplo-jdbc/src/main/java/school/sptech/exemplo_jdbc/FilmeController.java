package school.sptech.exemplo_jdbc;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@RestController
@RequestMapping("/filmes")
@CrossOrigin
public class FilmeController {

    private final JdbcTemplate jdbcTemplate;

    public FilmeController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping
    public ResponseEntity<List<Filme>> listarFilmes() {

        String sql = "SELECT * FROM filme";

        List<Filme> filmes = jdbcTemplate.query(
                sql,
                new BeanPropertyRowMapper<>(Filme.class)
        );

        return ResponseEntity
                .status(200)
                .body(filmes);
    }

    @PostMapping
    public ResponseEntity<Filme> cadastrarFilme(
            @RequestBody Filme filme) {

        if (filme.getImagem() == null ||
                filme.getImagem().isBlank()) {

            return ResponseEntity.status(400).build();
        }

        if (filme.getNome() == null ||
                filme.getNome().isBlank()) {

            return ResponseEntity.status(400).build();
        }

        if (filme.getGenero() == null ||
                filme.getGenero().isBlank()) {

            return ResponseEntity.status(400).build();
        }

        if (filme.getDataLancamento() == null) {

            return ResponseEntity.status(400).build();
        }

        if (filme.getDescricao() == null ||
                filme.getDescricao().isBlank()) {

            return ResponseEntity.status(400).build();
        }

        String sql = """
                INSERT INTO filme
                (imagem, nome, genero, data_lancamento, descricao)
                VALUES (?, ?, ?, ?, ?)
                """;

        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(con -> {

            PreparedStatement ps = con.prepareStatement(
                    sql,
                    Statement.RETURN_GENERATED_KEYS
            );

            ps.setString(1, filme.getImagem());
            ps.setString(2, filme.getNome());
            ps.setString(3, filme.getGenero());
            ps.setObject(4, filme.getDataLancamento());
            ps.setString(5, filme.getDescricao());

            return ps;

        }, keyHolder);

        Integer idInserido =
                keyHolder.getKeyAs(Integer.class);

        filme.setId(idInserido);

        return ResponseEntity
                .status(201)
                .body(filme);
    }
}
