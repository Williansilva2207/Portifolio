import style from './cabecalho.module.css';
export function Cabecalho() {
  return (
    <header className = {style.header}>
      <h1 className={style.logo}>Willian Silva</h1>
      <nav>
      <ul className={style.cabecalho}>
        <li><a href="#apres">Apresentação</a></li>
        <li><a href="#about">Skills</a></li>
        <li><a href="#project">Projetos</a></li>
      </ul>
      </nav>
    </header>
  );
}