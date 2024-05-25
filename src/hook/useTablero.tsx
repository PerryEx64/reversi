import { useState } from 'react';
import { Tablero } from '../types';
import { TableroInicial, TableroInicial8, TableroIninicial10 } from '../init';

export const useTablero = (sizeTablero: number) => {
  const [tablero, setTablero] = useState<Tablero>(
    sizeTablero == 6
      ? TableroInicial
      : sizeTablero == 8
      ? TableroInicial8
      : TableroIninicial10
  );
  return { tablero, setTablero };
};
