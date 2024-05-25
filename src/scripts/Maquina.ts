import { SpotMaquina, Tablero, Turno } from "../types";
import { canClickSpot, getAffectedDiscs } from "./Tablero";


export const ObtenerMovimientosPosibles = (turno: Turno, tablero: Tablero, sizeTablero: number): SpotMaquina[] => {

  const numberTurno = turno == 'jugador' ? 1 : 2;
  const posicionFicha: SpotMaquina[] = [];

  for (let row = 0; row < tablero.length; row++) {
    for (let column = 0; column < tablero.length; column++) {
      if (
        tablero[row][column] == 0 &&
        canClickSpot(numberTurno, row, column, tablero, sizeTablero)
      ) {
        const affectedDisc = getAffectedDiscs(
          numberTurno,
          row,
          column,
          tablero,
          sizeTablero
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

  return posicionFicha
}


export function generarNumeroAleatorio(max: number, min: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}