import styles from "./Navbar.module.css";
import pipoca from "../assets/pipoca.png";
import logo from "../assets/logo.png";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.imagemLogo} src={logo} alt="CineView" />
            <p className={styles.texto}>Sua coleção de filmes</p>
            <img className={styles.imagemPipoca} src={pipoca} alt="Pipoca" />
        </div>
    )
}

export default Navbar;
