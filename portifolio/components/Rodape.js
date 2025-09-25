import styles from "./rodape.module.css";
import { FaGithub, FaLinkedin} from "react-icons/fa";

export function Rodape() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.lista}> 
        <li><a href = "https://github.com/Williansilva2207"> <FaGithub className={styles.socialsFooter} /></a></li>
        <li><a href = "www.linkedin.com/in/willian-rodrigues-295575297"><FaLinkedin className={styles.socialsFooter} /></a></li>
        </ul>
     
      <p>Recife, PE</p>
      <p>&copy; {new Date().getFullYear()} Willian Silva</p>
    </footer>
  );
}