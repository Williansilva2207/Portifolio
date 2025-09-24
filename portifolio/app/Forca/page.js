"use client";

import { useState, useEffect } from "react";
import styles from "./forca.module.css";
import Image from "next/image";

export default function ForcaPage() {
  const wordsList = [
    "Arrakis", "Duna", "Caladan", "Salusa Secundus", "Kaitain", "Corrino",
    "Harkonnen", "Atreides", "Fremen", "Bene Gesserit", "Mentat", "Sardaukar",
    "Muad'Dib", "Kwisatz Haderach", "Shai-Hulud", "Especiaria", "Melange",
    "Stilgar", "Chani", "Alia", "Paul Atreides", "Irulan", "Gurney Halleck",
    "Duncan Idaho", "Thufir Hawat", "Liet-Kynes", "Sietch", "Crysknife",
    "Gom Jabbar", "Água da Vida", "Choam"
  ];
  const imagens = [
      "/Shai Hulud 1.png",
      "/Shai Hulud 2.png",
      "/Shai Hulud 3.png",
      "/Shai Hulud 4.png",
      "/Shai Hulud 5.png",
      "/Shai Hulud 6_1.png",
      "/Shai Hulud 7.png",
      "/Shai Hulud and Fremen.png",
    ];
  const [word, setWord] = useState("");
  const [inputLetter, setInputLetter] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [maxWrongGuesses, setMaxWrongGuesses] = useState(6);

  useEffect(() => {
    startGame();
  }, []);

  function startGame() {
    const newWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    setWord(newWord.toUpperCase());
    setGuessedLetters([]);
    setMaxWrongGuesses(6);
    setInputLetter("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const letter = inputLetter.toUpperCase();

    if (!letter.match(/^[A-ZÇÁÉÍÓÚÂÊÔÃÕÜ]$/i)) {
      alert("Digite apenas letras.");
      setInputLetter("");
      return;
    }

    if (guessedLetters.includes(letter)) {
      alert(`A letra "${letter}" já foi usada!`);
      setInputLetter("");
      return;
    }

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setMaxWrongGuesses((t) => t - 1);
    }

    setInputLetter("");
  }

 

  function displayPalavra() {
    return word.split("").map((l, i) => (
      <span key={i} className={styles.letra}>
        {l === " " || l === "-" || l === "'" ? l : guessedLetters.includes(l) || maxWrongGuesses <= 0 ? l : "_"}
      </span>
    ));
  }
  function getImagem() {
    const venceu = word.split("").every(l => l === " " || l === "-" || guessedLetters.includes(l));
    const perdeu = maxWrongGuesses <= 0;

    if (venceu) return imagens[7];  
    if (perdeu) return imagens[6];  

    const index = 6 - maxWrongGuesses; 
    return imagens[index];
  }

  return (
    <section className={styles.forcaSection}>
      <h1 className={styles.title}>Jogo da Forca - Tema Duna</h1>
      <div className={styles.forcaImages}>
          <Image
            src={getImagem()}
            alt="Imagem do jogo"
            width={400}
            height={400}
            className={styles.imagem}
          />
        </div>
      <div className={styles.palavra}>{displayPalavra()}</div>

      {!(maxWrongGuesses <= 0 || word.split("").every(l => l === " " || l === "-" || l === "'"|| guessedLetters.includes(l))) && (
        <form onSubmit={handleSubmit} className={styles.letraForm}>
          <input
           type="text"
            maxLength={1}
            value={inputLetter}
            onChange={(e) => setInputLetter(e.target.value)}
            placeholder="Digite uma letra"
            className={styles.letraInput}
          />
          <button type="submit" className={styles.submitBtn}>
            Enviar
          </button>
        </form>
  )}

      <div className={styles.letrasUsadas}>
        <div>
          <strong>Letras corretas:</strong>{" "}
          {guessedLetters
            .filter((l) => word.includes(l))
            .map((l, i) => (
              <span key={i} className={styles.correta}>
                {l}
              </span>
            ))}
        </div>
        <div>
          <strong>Letras erradas:</strong>{" "}
          {guessedLetters
            .filter((l) => !word.includes(l))
            .map((l, i) => (
              <span key={i} className={styles.errada}>
                {l}
              </span>
            ))}
        </div>
      </div>

      {(maxWrongGuesses <= 0 ||
        word.split("").every((l) => l === " " || l === "-" || l === "'" || guessedLetters.includes(l))) && (
        <div className={styles.status}>
          {maxWrongGuesses <= 0
            ? `Você perdeu! Palavra: ${word}`
            : "Parabéns! Você ganhou!"}
          <button onClick={startGame} className={styles.restartBtn}>
            Reiniciar
          </button>
        </div>
      )}

      <div className={styles.tentativas}>
        Tentativas restantes: {maxWrongGuesses}
      </div>
    </section>
  );
}
