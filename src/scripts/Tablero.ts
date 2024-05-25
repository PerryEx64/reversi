import { Spot, Tablero } from "../types";
import { calculateAffectedLeft, calculateAffectUpRight, calculateAffectedAbove,calculateAffectedBelow,calculateAffectedDownLeft,calculateAffectedDownRight,calculateAffectedRight,calculateAffectedUpLeft } from "./Movimientos";


export function canClickSpot(id: number, row: number, column: number, tablero: Tablero, sizeTablero: number): boolean {
    const affectedDiscs: Spot[] = getAffectedDiscs(id, row, column, tablero, sizeTablero);
    return affectedDiscs.length == 0 ? false : true;
  }


  export function getAffectedDiscs(id: number, row: number, column: number, tablero: Tablero, sizeTablero: number): Spot[] {
    const size = sizeTablero - 1
    const calculateLeft = calculateAffectedLeft(tablero, row, column, id, size);
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
