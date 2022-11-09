// TAREA: HACER TARJETA DE PRODUCTO CON LOS ESTILOS DE MERCADOLIBRE

import './App.css';
import Ejercicio02 from './components/Ejercicio02';
// import ComponenteTarjetaDeUnaImagen from './components/ComponenteTarjeta';
// import ComponenteToDo from './components/Ejercicio01';
import ComponenteToDo02 from './components/ListaToDoV02';

function App() {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        marginTop: '350px'
      }}
    >
      {/* <ComponenteTarjetaDeUnaImagen /> */}
      {/* <ComponenteToDo /> */}
      <ComponenteToDo02 />  
      {/* <Ejercicio02 /> */}
    </div>
  );
}

export default App;
