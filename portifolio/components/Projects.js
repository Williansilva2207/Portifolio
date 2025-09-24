import Link from "next/link";
import style from "./projects.module.css"
import Image from "next/image";

export function Projects(){
    return(            
        <div className={style.projects}>
            <h1 className={style.Title}>Projetos</h1>
            <div className={style.section}>
                <div className={style.card}>
                
                    <a href="https://github.com/Williansilva2207/Rede-YOLO-para-detectar-o-Homem-Aranha-e-Deadpool"><Image src="/DS.png" width={350} height={750} alt="Projeto Deadpool vs Homem Aranha" className={style.cardImage}/></a>
                
                    <h2 className={style.cardTitle}>Classificador Deadpool e Homem Aranha</h2>
                    <p className={style.cardText}>Projeto de Machine Learning que classifica imagens do Deadpool e do Homem Aranha com rede YOLO</p>
                    
                
                </div>
                <div className={style.card}>
                
                    <a href="https://github.com/Williansilva2207/Reducao-de-Dimensionalidade-em-Imagens-para-Redes-Neurais"><Image src="/code.png" width={350} height={750} alt="Projeto Redimensionamento de imagens" className={style.cardImage}/></a>
                
                    <h2 className={style.cardTitle}>Redução de Dimensionalidade de Imagem Para Redes Neurais</h2>
                    <p className={style.cardText}>Esse projeto visa utilizar algumas bibliotecas e ferramentas pythons para a redução da Dimensionalidade de imagens, técnica essa que permite um treinamento menos custoso de redes neurais.</p>
                </div>
                <div className={style.card}>
                
                     <Link href="/Forca">
                        <Image
                         src="/paul.png"
                         width={350}
                         height={750}
                         alt="Jogo da Forca"
                         className={style.cardImage}
                        />
                    </Link>
                
                    <h2 className={style.cardTitle}>Jogo da Forca - Tema Duna</h2>
                    <p className={style.cardText}>Esse projeto é um jogo da forca criado totalmente com React e suas ferramentas, onde desafia o jogador a descobrir elementos presentes do universo de Duna.</p>
                </div>                
            </div>
        </div>
        
    );
}