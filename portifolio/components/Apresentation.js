import Image from "next/image";
import style from "./apresentation.module.css"
export function Apresentation(){
    return(
        <section className = {style.Hero}>

        <div className={style.text1}>
          <h2 className={style.Titulo}>Oi, eu sou Willian Rodrigues</h2>
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
    );
}