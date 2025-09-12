import style from "./projects.module.css"
import Image from "next/image";

export function Projects(){
    return(
        
        <section>
            <h1>Projetos</h1>
            <div className={style.card}>
                <h2>Classificador Deadpool e Homem Aranha</h2>
                <a href="https://github.com/Williansilva2207/Rede-YOLO-para-detectar-o-Homem-Aranha-e-Deadpool"><Image src="/Dh.jpg" width={400} height={300} alt="Projeto Deadpool vs Homem Aranha"/></a>
                <p>Projeto de Machine Learning que classifica imagens do Deadpool e do Homem Aranha com rede YOLO</p>
                <br></br>
                
            </div>
        </section>
    );
}