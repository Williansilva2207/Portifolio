import style from "./aboutme.module.css"
import { FaPython, FaJava, FaGit, FaGithub } from "react-icons/fa";
export function AboutMe(){
    return(
    <section className = {style.AboutMe}>
        <h1 className = {style.skill}>Skills</h1>
        <br></br>
        
        <ul className = {style.listaSkills}> 
            <li className={style.li}><FaPython />Python </li>
            <li className={style.li}><FaJava /> Java </li>
            <li className={style.li}> Web Developer </li>
            <li className={style.li}> <FaGit /> Git and GitHub</li>
        </ul>
        
      </section>
    );
}