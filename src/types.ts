export type Turno = 'jugador' | 'maquina';

export type ModoDeJuego = 'facil' | 'normal' | 'avanzado';

export type Tablero = number[][];

export type Spot = { row: number; column: number };

export interface Score {
  humano: number;
  maquina: number;
  vacios: number;
}

export interface SpotMaquina extends Spot {
    affectedDisc: number;
  }
  


