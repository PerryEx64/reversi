import { useCallback, useContext, useEffect } from 'react';
import { Score, SpotMaquina, Tablero, Turno } from '../types';
import { MainContext } from '../context';
import { canClickSpot, getAffectedDiscs } from '../scripts/Tablero';

export const useMaquina = (
  turno: Turno,
  tablero: Tablero,
  score: Score,
  action: (row: number, column: number) => void
) => {
  const { dificultad } = useContext(MainContext);

  const principiante = useCallback(() => {
    const numberTurno = turno == 'jugador' ? 1 : 2;
    const posicionFicha: SpotMaquina[] = [];

    /**
     * Obtiene las fichas donde puede la maquina pponer
     */
    for (let row = 0; row < tablero.length; row++) {
      for (let column = 0; column < tablero.length; column++) {
        if (
          tablero[row][column] == 0 &&
          canClickSpot(numberTurno, row, column, tablero)
        ) {
          const affectedDisc = getAffectedDiscs(
            numberTurno,
            row,
            column,
            tablero
          );
          if (affectedDisc.length > 0) {
            posicionFicha.push({
              row,
              column,
              affectedDisc: affectedDisc.length
            });
          }
        }
      }
    }

    /**
     * Obtengo el valor minimo o el que tenga menos ganancia
     */

    const affectedDiscs = posicionFicha.map((item) => item.affectedDisc);
    const minAffectedDisc = Math.min(...affectedDiscs);
    const minIndex = affectedDiscs.indexOf(minAffectedDisc);
    const posicionElegida = posicionFicha[minIndex];
    /**
     * Ejecuto la accion para que la maquina pueda jugar
     */
    action(posicionElegida.row, posicionElegida.column);
  }, [tablero, turno, action]);
  const normal = useCallback(() => {}, []);
  const avanzado = useCallback(() => {}, []);

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
