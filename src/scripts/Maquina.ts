import { ModoDeJuego, SpotMaquina, Tablero } from "../types";
import { canClickSpot, getAffectedDiscs } from "./Tablero";



/**
 * Primero la maquina obtendra todos los posibles movimientos
 */
export const ObtenerMovimientoMaquina = (
    modoDeJuego: ModoDeJuego,
    tablero: Tablero,
    turno: number,
  ): SpotMaquina[] => {
    /**
     * Modo: Facil
     * Comportamiento esperado: Que la maquina siempre deje que el usuario gane la partida
     * Como lo lograra: La maquina siempre elegira la opcion con el numero menor de fichas que afecta
     */
  
    const posicionFicha: SpotMaquina[] = [];
  
    for (let row = 0; row < tablero.length; row++) {
      for (let column = 0; column < tablero.length; column++) {
        if (
          tablero[row][column] == 0 &&
          canClickSpot(turno, row, column, tablero)
        ) {
          /**
           * Aqui deberia de calcuar cuales son los numero
           */
          const affectedDisc = getAffectedDiscs(turno, row, column, tablero);
          if (affectedDisc.length > 0) {
            posicionFicha.push({
              row,
              column,
              affectedDisc: affectedDisc.length,
            });
          }
  
          /* const affectedDis: Spot[] = getAffectedDiscs(
            turno,
            row,
            column,
            tablero,
          );
          posiblesPosiciones.push(...affectedDis); */
        }
      }
    }
  
    if (modoDeJuego == "facil") {
      return posicionFicha;
    }
    /**
     * Modo: Normal
     * Comportamiento esperado: Que la maquina pueda mover sus fichas de forma aleatoria
     * Como lo lograra: La maquina elegira de forma aleatoria el numero de fichas que afecta
     */
  
    if (modoDeJuego == "normal") {
      return posicionFicha;
    }
  
    /**
     * Modo: Avanzado
     * Comportamiento esperado: Que la maquina le de pelea al usuario eligiendo estrategicamente las fichas que movera
     * Como lo lograra: ??
     */
  
    return posicionFicha;
  };
  