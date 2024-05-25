import { ProtectedRouter } from '../components/ProtectedRouter';
import { TableroScreen } from '../components/Tablero';
import { TitleGame } from '../components/TitleGame';

export const Reversi = () => {
  return (
    <ProtectedRouter>
      <TitleGame />
      <TableroScreen />
    </ProtectedRouter>
  );
};
