import logo from './logo.svg';
import './App.css';
// import ComponenteRepasoClaseAnterior from './components/componenteRepasoClaseAnterior';
// import Componente from './components/OtraFormaDeUsarCSS';
// import AgregandoComportamiento from './components/hooks';
import ComponenteContador from './components/componenteContador';
import EjemploHook01 from './components/ejemploHook01';
import Ejercicio01 from './components/ejercicio01';
import Hook02 from './components/hooks02';

function App() {
  return (
    <div className="App">
      {/* <ComponenteRepasoClaseAnterior />
      <Componente />
      <AgregandoComportamiento /> */}
      {/* <ComponenteContador /> */}
      <EjemploHook01 />
      <Ejercicio01 />
      <Hook02 />
    </div>
  );
}

export default App;
