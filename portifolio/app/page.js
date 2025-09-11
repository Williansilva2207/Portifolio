import style from "./page.module.css";
import { Apresentation } from "@/components/Apresentation";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
export default function Home() {
  return (
    <main className = {style.page}>
      <div className={style.apresentation}>
       <Apresentation />
      </div>
      <hr></hr>
      <div className={style.aboutMe}>
        <AboutMe />
      </div>
      <hr></hr>
      <div className={style.projects}>
        <Projects />
      </div>
    </main>
    
  );
}
