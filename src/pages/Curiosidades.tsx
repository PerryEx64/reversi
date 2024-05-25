import { Header } from '../components/Header';

export const Curiosidades = () => {
  return (
    <>
      <Header title="Curiosidades" subTitle="¡Aprende mas sobre reversi!" />

      <div className="flex justify-center items-center mt-5"></div>

      <section className="flex flex-col justify-center items-center mt-16 mb-5">
        <h2 className="text-2xl text-center text-secondary mb-8">Tablero</h2>
        <div className="stats shadow [&>div]:font-prosto-one">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Partida mas corta</div>
            <div className="stat-value">9</div>
            <div className="stat-desc">movimientos</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Partida mas larga</div>
            <div className="stat-value">58</div>
            <div className="stat-desc">movimientos (en un tablero de 8*8)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Quien puede ganar mas rapido</div>
            <div className="stat-value">Blancas</div>
            <div className="stat-desc">
              Determinado por quien inicia la partida
            </div>
          </div>
        </div>
      </section>
      <div className="divider ml-auto mr-auto w-4/5 m-0"></div>
      <section className="flex flex-col justify-center items-center mb-8 mt-5">
        <h2 className="text-2xl text-center text-primary mb-8">Historia</h2>
        <ul className="timeline">
          <li>
            <div className="timeline-start font-prosto-one">1880</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-start timeline-box font-prosto-one">
              Inicio en Inglaterra
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start font-prosto-one">1971</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-end timeline-box font-prosto-one">
              Version en tablero
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start font-prosto-one">1977</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-start timeline-box font-prosto-one">
              Campeonato Nacional de Othello
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start font-prosto-one">1981</div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-end timeline-box font-prosto-one">
              Programas vs Humanos
            </div>
            <hr />
          </li>
        </ul>
      </section>
    </>
  );
};
