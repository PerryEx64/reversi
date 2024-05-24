import { useContext } from "react";
import { MainContext } from "../context";

export const TitleGame = () => {
    const {name} = useContext(MainContext)

    console.log(name)
  return (
    <>
      <header className="flex justify-between w-[80%] ml-auto mr-auto items-center">
        <div></div>
        <div className="flex flex-col mt-5 gap-4 justify-center items-center">
          <div>
          <h2 className="w-auto justify-center items-center text-center text-xl">
            Juega con nosotros
          </h2>
          <h2 className="w-auto justify-center items-center text-center text-xl">
            Bienvenido: {name}
          </h2>
          </div>
        </div>
        <div></div>
      </header>
    </>
  );
};
