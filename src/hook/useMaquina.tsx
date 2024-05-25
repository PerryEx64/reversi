import { useCallback, useContext, useEffect } from 'react';
import { Score, Tablero, Turno } from '../types';
import { MainContext } from '../context';
import {
  generarNumeroAleatorio,
  ObtenerMovimientosPosibles
} from '../scripts/Maquina';
import Swal from 'sweetalert2';

export const useMaquina = (
  turno: Turno,
  tablero: Tablero,
  score: Score,
  action: (row: number, column: number) => void
) => {
  const { dificultad, sizeTablero } = useContext(MainContext);

  const principiante = useCallback(() => {
    const posicionFicha = ObtenerMovimientosPosibles(
      turno,
      tablero,
      sizeTablero
    );

    //Si ya no hay mas posiciones para jugar se finaliza
    if (posicionFicha.length < 1) {
      return void Swal.fire(
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

    //Obtengo el valor minimo o el que tenga menos ganancia
    const affectedDiscs = posicionFicha.map((item) => item.affectedDisc);
    const minAffectedDisc = Math.min(...affectedDiscs);
    const minIndex = affectedDiscs.indexOf(minAffectedDisc);
    const posicionElegida = posicionFicha[minIndex];

    //Ejecuto la accion para que la maquina pueda jugar

    action(posicionElegida.row, posicionElegida.column);
  }, [tablero, turno, action, score, sizeTablero]);

  const normal = useCallback(() => {
    const posicionFicha = ObtenerMovimientosPosibles(
      turno,
      tablero,
      sizeTablero
    );

    //Si ya no hay mas posiciones para jugar se finaliza
    if (posicionFicha.length < 1) {
      return void Swal.fire(
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
    const numeroAleatorio = generarNumeroAleatorio(0, posicionFicha.length - 1);
    const posicionElegida = posicionFicha[numeroAleatorio];

    //Ejecuto la accion para que la maquina pueda jugar
    action(posicionElegida.row, posicionElegida.column);
  }, [action, tablero, turno, score, sizeTablero]);

  const avanzado = useCallback(() => {
    const posicionFicha = ObtenerMovimientosPosibles(
      turno,
      tablero,
      sizeTablero
    );

    //Si ya no hay mas posiciones para jugar se finaliza
    if (posicionFicha.length < 1) {
      return void Swal.fire(
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

    //Obtengo el valor maximo o el que tenga mas ganancia
    const affectedDiscs = posicionFicha.map((item) => item.affectedDisc);
    const maxAffectedDisc = Math.max(...affectedDiscs);
    const minIndex = affectedDiscs.indexOf(maxAffectedDisc);
    const posicionElegida = posicionFicha[minIndex];

    //Ejecuto la accion para que la maquina pueda jugar
    action(posicionElegida.row, posicionElegida.column);
  }, [action, tablero, turno, score, sizeTablero]);

  useEffect(() => {
    if (turno === 'maquina') {
      setTimeout(() => {
        /**
         * La maquina hace la jugada dependiendo la dficultad
         */
        if (dificultad === 'Normal') {
          return normal();
        } else if (dificultad === 'Principiante') {
          return principiante();
        } else {
          return avanzado();
        }
      }, 1500);
    }
  }, [turno]);
};
