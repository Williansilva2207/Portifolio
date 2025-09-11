import style from "./page.module.css";
import { Apresentation } from "@/components/Apresentation";
export default function Home() {
  return (
    <main className = {style.page}>
      <Apresentation />
      <hr></hr>
      
      <section id = "AboutMe">
        <h1>Skills</h1>
        <div><p>Python</p></div>
        <div><p>Java</p></div>
        <div><p>Web Developer</p></div>
        <div><p>Git and GitHub</p></div>
        
      </section>


      
    </main>
    
  );
}
