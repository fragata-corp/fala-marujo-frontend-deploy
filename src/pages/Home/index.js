import React from "react";

import "./styles.css";
import "../../assets/font/style.css";

export default function Home() {
  return (
    <div id="container">
      <header id="header">
        <div id="title">
          <h4>Blog e Podcast</h4>
          <h1>FALA MARUJO</h1>
          <h5>by Fragata Corp</h5>
        </div>
        <div id="info">
          <p>
            A melhor opção para uma tripulação que está a caça de informações
            sobre tecnologia
          </p>
        </div>
      </header>
      <ul>
        <li>
          <div className="container" onClick={() => {}}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </li>
        <li>Novidades</li>
        <li>Sobre o Fala Marujo</li>
        <li>Seija um Apoiador</li>
        <li>Fragata Corp</li>
      </ul>

      <div id="search">
        <input type="text" onChange={() => {}}></input>
      </div>
      <section>
        <h1>Podcast em destaque</h1>
        <div>
          <article>
            <header>Título</header>
            <span>Data</span>
            <p>
              The way she moves, she's like a belly-dancer. She's shaking that
              ass to the new Nelly jams. I think someone's at the door but I
              don't think I'mma answer. Police saying 'freeze!': do-doing,
              doing...
            </p>
            <a href="##">mais...</a>
          </article>
        </div>
      </section>
    </div>
  );
}
