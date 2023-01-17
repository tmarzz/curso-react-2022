import './App.css';
import { ListaTarjetasAvanzadas, TarjetaAvanzada, TarjetaAvanzadaEspecifica } from './Components/TarjetaAvanzada';

function App() {
  return (
    <div
      className='App'
    >
      <ListaTarjetasAvanzadas />
      <h2>El que es distinto!</h2>
      <TarjetaAvanzadaEspecifica 
        id={1}
      />
    </div>
  );
}

export default App;
