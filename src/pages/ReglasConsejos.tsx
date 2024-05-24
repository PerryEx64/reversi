import { Header } from '../components/Header';

export const ReglasConsejos = () => {
  return (
    <div>
      <Header
        title="Reglas y Consejos"
        subTitle="¡Presta mucha atencion si quieres ganar!"
      />

      <div className="flex justify-center items-center mt-5"></div>
      <section className="w-9/12 my-5 justify-center items-center ml-auto mr-auto">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic text-info">Regla #1</time>
              <div className="text-xl font-prosto-one">
                Cantidad de Jugadores
              </div>
              <div className="divider w-3/5 m-0 ml-auto"></div>
              <p className="font-caveat">
                Hay unicamente 2 jugadores, la maquina y tu. Tu mision es
                demostrarle a la maquina quien manda.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-secondary">Regla #2</time>
              <div className="text-xl font-prosto-one">Inicio del Juego</div>
              <div className="divider divider-start w-3/5 m-0"></div>
              <p className="font-caveat">
                el juego comienza con 4 fichas, 2 fichas por cada jugador, las
                fichas pueden ser colocadas por medio de un patrón alternado en
                el tablero.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic text-warning">Regla #3</time>
              <div className="text-xl font-prosto-one">
                Movimiento en el tablero
              </div>
              <div className="divider w-3/5 m-0 ml-auto"></div>
              <p className="font-caveat">
                El jugador debe de hacer movimientos a una casilla que está
                vacía, de modo que quede por lo menos una ficha del jugador
                contrario entre la ficha nueva y otra del mismo color. Cuando
                una ficha queda en medio 2 que sean del mismo color, esta pasa a
                ser del mismo color que el oponente.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-accent">Regla #4</time>
              <div className="text-xl font-prosto-one">Movimientos</div>
              <div className="divider divider-start w-3/5 m-0"></div>
              <p className="font-caveat">
                El jugador puede hacer sus movimientos con las fichas de forma,
                Vertical, Diagonal y Horizontal.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic text-neutral-700">
                Regla #5
              </time>
              <div className="text-xl font-prosto-one">
                Inexistencia de Movimientos
              </div>
              <div className="divider divider-start w-3/5 m-0"></div>
              <p className="font-caveat">
                Si el jugador no tiene movimientos válidos, el turno pasa al
                otro jugador, si ni uno de los 2 tiene movimientos, se acaba el
                juego.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-error">Regla #6</time>
              <div className="text-xl font-prosto-one">
                Finalizacion de la partida
              </div>
              <div className="divider ml-auto w-3/5 m-0"></div>
              <p className="font-caveat">
                Se finaliza el juego si el tablero está lleno, o cuando ambos
                jugadores ya no cuenten con movimientos. El jugador que cuente
                con mas fichas del mismo color, ese gana.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};
