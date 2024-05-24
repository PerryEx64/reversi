import { createContext } from "react";

export type Dificultad = 'Principiante' | 'Normal' | 'Avanzado'

export interface IMainContext {
    sizeTablero: number,
    setSizeTablero: (sizeTablero: number) => void
    name: string,
    setName: (name: string) => void
    dificultad: Dificultad,
    setDificultad: (dificultas: Dificultad) => void
}


const initContext: IMainContext = {
    sizeTablero: 6,
    setSizeTablero: () => {},
    name: '',
    setName: () => {},
    dificultad: 'Normal',
    setDificultad: () => {}
}


export const MainContext = createContext(initContext)