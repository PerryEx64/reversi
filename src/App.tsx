import { IMainContext, MainContext } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home.tsx';
import { Reversi } from './pages/Reversi.tsx';
import { Curiosidades } from './pages/Curiosidades.tsx';
import { ReglasConsejos } from './pages/ReglasConsejos.tsx';

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
          <Route path="/curiosidades" Component={Curiosidades} />
          <Route path="/reglasConsejos" Component={ReglasConsejos} />
        </Routes>
      </MainContext.Provider>
    </BrowserRouter>
  );
};
