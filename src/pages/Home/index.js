import React from "react";

import "./styles.css";
import "../../assets/font/style.css";
import FragataCorp from "../../assets/img/fragatabranco.png";

export default function Home() {
  return (
    <div id="container">
      <header className="first">
        <div>
          <div id="title">
            <span id="um">Blog e Podcast</span>
            <span id="dois">FALA MARUJO</span>
            <span id="tres">by Fragata Corp</span>
          </div>
          <div id="description">
            <p>
              A melhor opção para uma tripulação que está a caça de informações
              sobre tecnologia
            </p>
          </div>
        </div>
        <aside>
          <ul>
            <li>Novidades</li>
            <li>Sobre o Fala Marujo</li>
            <li>Seija um Apoiador</li>
            <li>Fragata Corp</li>
          </ul>
        </aside>
      </header>
      <main className="first">
        <div id="search">
          <input type="text" onChange={() => {}}></input>
        </div>
        <section id="destaque">
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
          <hr></hr>
        </section>

        <section id="list">
          <div>
            <article>
              <div>Título</div>
            </article>
            <article>
              <div>Título</div>
            </article>
            <article>
              <div>Título</div>
            </article>
          </div>
          <div>
            <a href="##">Ver todos</a>
          </div>
          <hr></hr>
          <a href="##"> Veja quem apoia o Fala Marujo</a>
        </section>
      </main>
      <footer className="first">
        <div>
          <header>Categorias</header>
          <div>
            <span>Programação</span>
            <span>Design</span>
            <span>Games</span>
            <span>Mercado de trabalho</span>
          </div>
          <div>
            <span>Científico</span>
            <span>Universitário</span>
            <span>Tecnologia</span>
          </div>
        </div>
        <div>
          <header>Contatos</header>
          <div>
            <span>/facebook</span>
            <span>(99) 9 9999-9999</span>
            <span>@insta</span>
          </div>
        </div>
        <div>
          <span>Desenvolvido por:</span>
          <img src={FragataCorp} alt="logo do Fragata Corp"></img>
          <span>Fragata Corp</span>
        </div>
      </footer>
    </div>
  );
}
