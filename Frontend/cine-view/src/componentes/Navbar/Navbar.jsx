import styles from "./Navbar.module.css";

import logo from "../../assets/logo.png";
import pipoca from "../../assets/pipoca.png";

function Navbar() {

    return (
        <header className={styles.navbar}>

            <div className={styles.logoContainer}>

                <h1 className={styles.nome}>
                    Cine<span>View</span>
                </h1>

            </div>

            <div className={styles.centro}>
                <div className={styles.linha}></div>

                <p>Sua coleção de filmes</p>

                <div className={styles.linha}></div>
            </div>

            <img
                src={pipoca}
                alt="Pipoca"
                className={styles.pipoca}
            />

        </header>
    );
}

export default Navbar;