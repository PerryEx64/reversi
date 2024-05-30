import { useContext } from 'react';
import { MainContext } from '../context';
import Back from './Back';
import { useNavigate } from 'react-router-dom';
import { useReset } from '../hook/useReset';

export const TitleGame = () => {
  const { name } = useContext(MainContext);
  const navigate = useNavigate();
  const { reset } = useReset();

  return (
    <>
      <header className="flex justify-between w-[80%] ml-auto mr-auto items-center">
        <div className="flex justify-center my-5">
          <a
            onClick={() => {
              navigate('/');
              reset();
            }}
            href={'/'}
            role="button"
            className="btn btn-outline btn-info font-prosto-one"
          >
            <Back />
          </a>
        </div>
        <div className="flex flex-col mt-5 gap-6 justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Juega con nosotros</h2>
            <div className="flex gap-3 justify-center items-center">
              <h2 className="text-2xl font-prosto-one">Bienvenido:</h2>
              <h3 className="text-2xl font-prosto-one text-indigo-600">
                {name}
              </h3>
            </div>
          </div>
        </div>
        <div></div>
      </header>
    </>
  );
};
