import { createContext } from "react";


export interface IMainContext {
    sizeTablero: number,
    setSizeTablero: (sizeTablero: number) => void
    name: string,
    setName: (name: string) => void
    dificultad: string,
    setDificultad: (dificultas: string) => void
}


const initContext: IMainContext = {
    sizeTablero: 6,
    setSizeTablero: () => {},
    name: '',
    setName: () => {},
    dificultad: '',
    setDificultad: () => {}
}


export const MainContext = createContext(initContext)