import style from "./page.module.css";
import { Apresentation } from "@/components/Apresentation";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Cabecalho } from "@/components/Cabecalho";

export default function Home() {
  return (
    <main className = {style.page}>
      <Cabecalho />
      <div id = "apres" className={style.apresentation}>
       <Apresentation  />
      </div>
      
      <div id = "about" className={style.aboutMe}>
        <AboutMe  />
      </div>
      
      
      <div id = "project" className={style.projects}>
        <Projects  />
      </div>
    </main>
    
  );
}
