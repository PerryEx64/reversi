import { useContext, useEffect, useState } from 'react';
import type { Score, Spot, Turno } from '../types';
import { initScore } from '../init';
import Swal from 'sweetalert2';
import { Score as ScoreView } from './Score';
import {
  calculateAffectedLeft,
  calculateAffectUpRight,
  calculateAffectedAbove,
  calculateAffectedBelow,
  calculateAffectedDownLeft,
  calculateAffectedDownRight,
  calculateAffectedRight,
  calculateAffectedUpLeft
} from '../scripts/Movimientos';
import { useMaquina } from '../hook/useMaquina';
import { MainContext } from '../context';
import { useTablero } from '../hook/useTablero';

export const TableroScreen = () => {
  const [turno, setTurno] = useState<Turno>('jugador');
  const { sizeTablero } = useContext(MainContext);
  const [score, setScore] = useState<Score>(initScore);
  const { tablero, setTablero } = useTablero(sizeTablero);
  useMaquina(turno, tablero, score, Turno);
  const numeroTurno = turno == 'jugador' ? 1 : 2;

  function clickedSquare(row: number, column: number) {
    if (turno === 'jugador') {
      return Turno(row, column);
    }
  }

  function Turno(row: number, column: number) {
    if (canClickSpot(numeroTurno, row, column)) {
      const affectedDiscs = getAffectedDiscs(numeroTurno, row, column);
      flipDiscs(affectedDiscs);

      const prevState = [...tablero];

      prevState[row][column] = numeroTurno;
      setTablero(prevState);
      if (turno === 'jugador' && canMove(2)) {
        setTurno('maquina');
      } else if (turno == 'maquina' && canMove(1)) {
        setTurno('jugador');
      }

      if (!canMove(1) && !canMove(2)) {
        console.log('esta aqui');
        Swal.fire('Juego Finaizado', '', 'success');
      }
    } else {
      return;
    }
  }

  function canClickSpot(id: number, row: number, column: number): boolean {
    const affectedDiscs: Spot[] = getAffectedDiscs(id, row, column);
    return affectedDiscs.length == 0 ? false : true;
  }

  function getAffectedDiscs(id: number, row: number, column: number): Spot[] {
    const size = sizeTablero - 1
    const calculateLeft = calculateAffectedLeft(tablero, row, column, id,size);
    const calculateDownRight = calculateAffectedDownRight(
      tablero,
      row,
      column,
      id,
      size
    );

    /**
     * Primero calcula las horizontales y diagonales juntas
     */

    //Calcula de forma diagronal (Hacia abajo y hacia la drecha) y Horizontal (Izquierda)
    if (calculateLeft.length > 0 && calculateDownRight.length > 0) {
      return calculateLeft.concat(calculateDownRight);
    }

    //Mando a llamar a las funciones que se utilizaran
    const calculateRight = calculateAffectedRight(tablero, row, column, id);
    const calculateDownLeft = calculateAffectedDownLeft(
      tablero,
      row,
      column,
      id,
      size
    );

    //Calculate de forma diagonal (Hacia abajo y hacia la izquierda) y Horizontal (Derecha)
    if (calculateRight.length > 0 && calculateDownLeft.length > 0) {
      return calculateRight.concat(calculateDownLeft);
    }

    const calculateUpLeft = calculateAffectedUpLeft(tablero, row, column, id);
    const calculateUpRight = calculateAffectUpRight(tablero, row, column, id, size);

    if (calculateRight.length > 0 && calculateUpLeft.length > 0) {
      return calculateRight.concat(calculateUpLeft);
    }

    if (calculateLeft.length > 0 && calculateRight.length > 0) {
      return calculateLeft.concat(calculateRight);
    }

    const calculateBelow = calculateAffectedBelow(tablero, row, column, id, size);

    if (calculateRight.length > 0 && calculateBelow.length > 0) {
      return calculateRight.concat(calculateBelow);
    }

    const calculateAbove = calculateAffectedAbove(tablero, row, column, id);
    if (calculateLeft.length > 0) {
      return calculateLeft;
    }

    if (calculateDownRight.length > 0) {
      return calculateDownRight;
    }

    if (calculateDownLeft.length > 0) {
      return calculateDownLeft;
    }

    if (calculateAbove.length > 0) {
      return calculateAbove;
    }

    if (calculateBelow.length > 0) {
      return calculateBelow;
    }

    if (calculateUpLeft.length > 0) {
      return calculateUpLeft;
    }

    if (calculateUpRight.length > 0) {
      return calculateUpRight;
    }

    return calculateRight;
  }

  function flipDiscs(affectedDiscs: Spot[]) {
    const prevState = [...tablero];
    for (let i = 0; i < affectedDiscs.length; i++) {
      const spot: Spot = affectedDiscs[i];
      if (tablero[spot.row][spot.column] === 1) {
        prevState[spot.row][spot.column] = 2;
        setTablero(prevState);
      } else {
        prevState[spot.row][spot.column] = 1;
        setTablero(prevState);
      }
    }
  }

  function canMove(id: 1 | 2) {
    for (let row = 0; row < sizeTablero; row++) {
      for (let column = 0; column < sizeTablero; column++) {
        if (canClickSpot(id, row, column)) {
          return true;
        }
      }
    }
    return false;
  }

  useEffect(() => {
    if (score.vacios === 0) {
      void Swal.fire(
        'Juego Terminado',
        `${
          score.humano > score.maquina
            ? 'El Humano ah conquistado a la maquina'
            : score.humano === score.maquina
            ? 'Esto es un empate'
            : 'La Maquina conquisto al humano'
        }`,
        'success'
      );
    }
  }, [score]);

  return (
    <div>
      <div className="ml-5">
        <div className="flex gap-2 aling-center">
          <h4 className=" font-prosto-one">Turno de:</h4>
          <div className="flex gap-1">
            <label className=" font-prosto-one">{turno.toUpperCase()}</label>
            <img src={turno == 'jugador' ? '../man.svg' : '../robot.svg'} />
            <div
              className={`${
                turno == 'jugador' ? ' bg-jugador1' : 'bg-jugador2'
              } w-6 h-6 rounded-full`}
            />
          </div>
        </div>
        <ScoreView
          tablero={tablero}
          turno={turno}
          score={score}
          setScore={setScore}
        />

        <div className={`flex flex-col items-center gap-2 justify-center ${sizeTablero == 10 && 'mt-[-36px]'} `}>
          {tablero.map((row, irow) => (
            <div key={irow} className="flex gap-2">
              {row.map((column, icolumn) => (
                <div key={icolumn}>
                  {column == 0 &&
                  canClickSpot(turno === 'maquina' ? 2 : 1, irow, icolumn) ? (
                    <Ficha
                      posicion={3}
                      afectados={
                        getAffectedDiscs(
                          turno === 'jugador' ? 1 : 2,
                          irow,
                          icolumn
                        ).length
                      }
                      turno={turno}
                      onClick={() => clickedSquare(irow, icolumn)}
                    />
                  ) : column === 1 ? (
                    <Ficha posicion={1} onClick={() => {}} />
                  ) : column === 2 ? (
                    <Ficha posicion={2} onClick={() => {}} />
                  ) : (
                    column == 0 && (
                      <Ficha
                        posicion={0}
                        onClick={() => clickedSquare(irow, icolumn)}
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface IFicha {
  posicion: 0 | 1 | 2 | 3;
  onClick: () => void;
  turno?: Turno;
  afectados?: number;
}
export const Ficha = (props: IFicha) => {
  const { posicion, onClick, turno, afectados } = props;

  if (posicion === 0) {
    return (
      <div
        id={'vacio'}
        className={'flex bg-quieta w-12 h-12 rounded-full shadow-md'}
        onClick={onClick}
      />
    );
  }

  if (turno === 'jugador') {
    return (
      <div className="relative">
        <div
          id={'vacio'}
          className={'flex bg-consejoHumano w-12 h-12 rounded-full shadow-md'}
        />
        <div
          className="absolute left-4 right-0 top-3 bottom-0 text-[#002E7A]"
          onClick={onClick}
        >
          {afectados}
        </div>
      </div>
    );
  } else if (turno === 'maquina') {
    return (
      <div className="relative">
        <div
          id={'vacio'}
          className={'flex bg-consejoMaquina w-12 h-12 rounded-full shadow-md'}
        >
          <div
            className="absolute left-4 right-0 top-3 bottom-0 text-[#7A092E]"
            onClick={onClick}
          >
            {afectados}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`flex ${
        posicion == 1 ? 'bg-jugador1' : 'bg-jugador2'
      } w-12 h-12 rounded-full shadow-md   `}
      onClick={onClick}
    />
  );
};
