import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../context';

export const useReset = () => {
  const navigate = useNavigate();
  const { setDificultad, setName, setSizeTablero } = useContext(MainContext);

  const reset = () => {
    setDificultad('Normal');
    setName('');
    setSizeTablero(6);
    navigate('/');
  };
  return { reset };
};
