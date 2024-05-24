import { useContext } from 'react';
import { MainContext } from '../context';
import { useNavigate } from 'react-router-dom';

interface IModal {
  id: string;
  label: string;
}

export const ModalInitialGame = (props: IModal) => {
  const { setSizeTablero, setDificultad, setName, name } = useContext(MainContext);
  const navigate = useNavigate();
  const { id } = props;

  console.log(name)
  return (
    <div className="flex justify-center mt-3">
      <button
        className="btn font-prosto-one btn-accent btn-outline"
        onClick={() => {
          const elementmodal = document.getElementById(id);
          if (elementmodal instanceof HTMLDialogElement) {
            elementmodal.showModal();
          }
        }}
      >
        Iniciar Juego
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold font-prosto-one text-lg ">
            Configuracion Inicial!
          </h3>
          <>
            <div className="flex flex-col">
              <label className="mt-5 text-xs mb-1 font-mono opacity-60 ">
                Nombre
              </label>
              <input
                type="text"
                placeholder="escribe tu nombre aqui"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="input input-bordered font-prosto-one input-sm w-full max-w-xs"
              />
            </div>

            <div className="flex flex-col">
              <label className="mt-5 text-xs mb-1 font-mono opacity-60 ">
                Tamaño del Tablero
              </label>
              <select
                onChange={(e) => setSizeTablero(Number(e.target.value))}
                className="select select-bordered select-sm text-sm w-full max-w-xs font-prosto-one [&>option]:text-sm [&>option]:font-prosto-one "
              >
                <option disabled defaultValue={'defaultValue'}>
                  Seleccionar Tablero
                </option>
                <option value={6}>6*6</option>
                <option value={8}>8*8</option>
                <option value={10}>10*10</option>
              </select>
            </div>

            <div className="flex flex-col ">
              <label className="mt-5 text-xs mb-1 font-mono opacity-60 ">
                Nivel de Dificultas
              </label>
              <select
                onChange={(e) => setDificultad(e.target.value)}
                className="select select-bordered select-sm text-sm w-full max-w-xs font-prosto-one [&>option]:text-sm [&>option]:font-prosto-one "
              >
                <option disabled defaultValue={'defaultValue'}>
                  Selecciona Dificultad
                </option>
                <option>Principiante</option>
                <option>Normal</option>
                <option>Avanzado</option>
              </select>
            </div>
            <a
              className="btn btn-outline btn-primary btn-sm font-prosto-one mt-5 flex justify-center ml-auto mr-auto w-5/12 "
              onClick={() => navigate('/reversi')}
            >
              Empezar
            </a>
          </>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
