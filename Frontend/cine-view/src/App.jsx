import { useState } from "react";

import "./App.css";
import Navbar from "./componentes/Navbar";
import CardCadastro from "./componentes/CardCadastro";
import ListaFilmes from "./componentes/ListaFilmes";

function App() {
    const [filmes, setFilmes] = useState([]);

    return (
        <>
            <Navbar />

            <main>
                <CardCadastro />

                <ListaFilmes filmes={filmes} />
            </main>
        </>
    );
}

export default App;