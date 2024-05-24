import { IMainContext, MainContext } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './router/Home.tsx';
import { Reversi } from './router/Reversi.tsx';

export const App = () => {
  const [sizeTablero, setSizeTablero] = useState<number>(6);
  const [name, setName] = useState<string>('');
  const [dificultad, setDificultad] = useState<string>('');
  const values: IMainContext = {
    sizeTablero,
    setSizeTablero,
    name,
    setName,
    dificultad,
    setDificultad
  };

  return (
    <BrowserRouter>
      <MainContext.Provider value={values}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/reversi" Component={Reversi} />
        </Routes>
      </MainContext.Provider>
    </BrowserRouter>
  );
};
