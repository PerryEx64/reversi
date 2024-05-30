import { CardIniciales } from "../components/CardIniciales";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ModalInitialGame } from "../components/ModalInitialGame";

export const Home = () => {
  return <div className="bg-[background-color: #282828]" ><div className="flex flex-col min-h-screen justify-between">
  <main className="flex-1">
    <Header
      title="¡Explora el mundo de Reversi!"
      subTitle="¿Estás listo para conquistar el tablero?"
    />
    <ModalInitialGame id="play" label="Ver aquí" />

    <section className="flex grow gro gap-3 mt-8">
      <CardIniciales />
    </section>
  </main>
  <Footer />
</div></div>;
};
