import { useNavigate } from 'react-router-dom';

export const CardIniciales = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:mb-5 justify-center md:gap-16 max-sm:gap-8 items-center ml-auto mr-auto w-full">
      <div className="card w-96 max-sm:w-80 max-sm:ml-auto max-sm:mr-auto  bg-base-100 shadow-xl image-full">
        <figure>
          <img src="./reversi.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-prosto-one text-md">
            ¡Reglas y consejos!
          </h2>
          <p className="font-prosto-one text-xs">
            Observa las reglas y descubre diversos consejos para vencer a la
            máquina.
          </p>
          <div className="card-actions justify-end">
            <a
              className="btn btn-primary btn-md font-prosto-one"
              onClick={() => navigate('/reglasConsejos')}
            >
              Ir
            </a>
          </div>
        </div>
      </div>

      <div className="card w-96 max-sm:w-80 max-sm:ml-auto max-sm:mr-auto bg-base-100 shadow-xl image-full">
        <figure>
          <img src="./curiosidades.png" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-prosto-one text-md">¡Curiosidades!</h2>
          <p className="font-prosto-one text-xs">
            ¿Sabías cuántos escenarios posibles hay en Reversi, dónde se originó
            y cuál es la partida más corta?
          </p>
          <div className="card-actions justify-end">
            <a
              className="btn btn-primary btn-md font-prosto-one"
              onClick={() => navigate('/curiosidades')}
            >
              ir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
