// 0.38.46

import { useRef, useState } from 'react';
import './App.css';
import Table from './Components/Table';
// import EjemploDeGestionDeEventos from './Components/EjemploDeleteEventListener';
// import Modal from './Components/Modal';
// import Monto from './Components/Monto';
// import Tarjetero from './Components/Tarjetero';
// import TituloH2 from './Components/TituloH2';

function App() {

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <Modal
        show={show}
        setShow={setShow}
      >
        <p>Soy el children de Modal</p>
      </Modal>
      <button
        onClick={() => {
          setShow(true)
        }}
      >
        Mostrar
      </button>
      {
        show && <TituloH2 texto='Esto es un componente Titulo' />
      }
      <Tarjetero /> */}
      {/* <Monto /> */}
      {/* <EjemploDeGestionDeEventos /> */}
      <Table />
    </div>
  );
}

export default App;
