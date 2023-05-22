import BarraMeses from "./componentes/BarraMeses/BarraMeses";
import Formulario from "./componentes/formulario/Formulario";
import QuadroTarefas from "./componentes/QuadroTarefas/QuadroTarefas";
import QueDia from "./componentes/QueDia/QueDia";

function App() {
  return (
    <>
      <QueDia />
      <Formulario />
      <BarraMeses />
      <QuadroTarefas />
    </>
  );
}

export default App;
