import { ReactNode, useContext } from 'react';
import { MainContext } from '../context';
import { Navigate } from 'react-router-dom';

export const ProtectedRouter = ({ children }: { children: ReactNode }) => {
  const { sizeTablero, name } = useContext(MainContext);

  if (name === '' || !name || !sizeTablero) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
};
