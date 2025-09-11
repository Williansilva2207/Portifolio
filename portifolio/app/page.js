import Image from "next/image";
import style from "./page.module.css";
export default function Home() {
  return (
    <main className = {style.page}>
      
      <section className = {style.Hero}>

        <div className={style.text1}>
          <h1 className={style.Titulo}>Oi, eu sou Willian Rodrigues</h1>
          <p>Estudante de Ciência da Computação que busca 
            por meio da tecnologia um mundo melhor!</p>
        </div>
        
        <div className={style.Foto}>
          <Image
            src="/will.jpg"
            alt="Foto de will"
            width={400}
            height={400}
            className = {style.picture}
          />
        </div>

      </section>
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
