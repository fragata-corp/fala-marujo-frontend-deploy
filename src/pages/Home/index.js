import React from "react";

import "./styles.css";
import "../../assets/font/style.css";

export default function Home() {
  return (
    <div id="container">
      <header>
        <div id="title">
          <h4>Blog e Podcast</h4>
          <h1>FALA MARUJO</h1>
          <h4>by Fragata Corp</h4>
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
    </div>
  );
}
