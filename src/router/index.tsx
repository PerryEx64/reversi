import { createBrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { Reversi } from './Reversi';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/reversi',
    element: <Reversi />
  }
]);
