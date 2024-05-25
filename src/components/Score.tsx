import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Score as ScoreType, Tablero, Turno } from '../types';

interface ScoreProps {
  tablero: Tablero;
  turno: Turno;
  score: ScoreType;
  setScore: (score: ScoreType) => void;
}

export const Score = ({ tablero, turno, score, setScore }: ScoreProps) => {
  function handleScore() {
    let humano = 0;
    let maquina = 0;
    let vacios = 0;

    tablero.map((row) => {
      row.map((column) => {
        if (column === 1) return (humano += 1);

        if (column === 2) return (maquina += 1);

        if (column === 0) return (vacios += 1);
      });
    });

    setScore({ humano, maquina, vacios });
  }

  useEffect(() => {
    handleScore();
    if (score.vacios === 0) {
      void Swal.fire(
        'Juego Terminado',
        `${
          score.humano > score.maquina
            ? 'El Humano ah conquistado a la maquina'
            : 'La Maquina conquisto al humano'
        }`,
        'success'
      );
    }
  }, [turno]);

  return (
    <div className="w-5/12 [&>div]:font-prosto-one [&>div]:text-sm">
      <div className="stats shadow ">
        <div className="stat place-items-center">
          <div className="stat-title">Mi Punteo</div>
          <div
            className={`stat-value ${
              score.humano > score.maquina && 'text-primary'
            }`}
          >
            {score.humano}
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Maquina</div>
          <div
            className={`stat-value ${
              score.humano < score.maquina && ' text-secondary'
            }`}
          >
            {score.maquina}
          </div>
        </div>
      </div>
    </div>
  );
};
