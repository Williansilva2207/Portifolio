import style from "./projects.module.css"
import Image from "next/image";

export function Projects(){
    return(
        
        <section>
            <h1 className={style.Title}>Projetos</h1>
            <div className={style.card}>
                
                <a href="https://github.com/Williansilva2207/Rede-YOLO-para-detectar-o-Homem-Aranha-e-Deadpool"><Image src="/Dh.jpg" width={200} height={200} alt="Projeto Deadpool vs Homem Aranha" className={style.cardImage}/></a>
                
                <h2 className={style.cardTitle}>Classificador Deadpool e Homem Aranha</h2>
                <p className={style.cardText}>Projeto de Machine Learning que classifica imagens do Deadpool e do Homem Aranha com rede YOLO</p>
                <br></br>
                
            </div>
        </section>
    );
}