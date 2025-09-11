import style from "./aboutme.module.css"
import { FaPython, FaJava,  FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
export function AboutMe(){
    return(
    <section className = {style.AboutMe}>
        <h1 className = {style.skill}>Skills</h1>
        <br></br>
        
        <ul className = {style.listaSkills}> 
            <li className={style.li}><FaPython />Python </li>
            <li className={style.li}><FaJava /> Java </li>
            <li className={style.li}><FaReact /> React </li>
            <li className={style.li}><FaHtml5 /> HTML5 </li>
            <li className={style.li}><FaCss3Alt /> CSS3 </li>
            <li className={style.li}><FaJsSquare />JavaScript </li>
        </ul>
        
      </section>
    );
}