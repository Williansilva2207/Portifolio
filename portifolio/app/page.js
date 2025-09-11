import style from "./page.module.css";
import { Apresentation } from "@/components/Apresentation";
import { AboutMe } from "@/components/AboutMe";
export default function Home() {
  return (
    <main className = {style.page}>
      <Apresentation />
      <hr></hr>
      <AboutMe />
      <hr></hr>
      
    </main>
    
  );
}
