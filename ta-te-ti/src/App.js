import './App.css';
import {useState} from 'react';

const SIMBOLO_X = 'X';
const SIMBOLO_0 = '0'

const Casilla = ({x, y, turnoJugador}) => {
  const [valor, setValor] = useState(null);
  
  const clickCasilla = () => {
    console.log('Inicia funcion clickCasilla');
    let simboloTurno = turnoJugador(x,y);
    setValor(simboloTurno)
    console.log('salgo funcion casilla');
  }
  
  return(
    <div
      onClick={clickCasilla}
    >
      {valor}
    </div>
  );
};

function App() {
  const [tablero, setTablero] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [turno, setTurno] = useState(SIMBOLO_X);

  const jugar = (x, y) => {
    console.log('Inicia funcion tateti');
    
    let copy = tablero;    
    copy[x][y] = turno;
    
    turno === SIMBOLO_X ? setTurno(SIMBOLO_0) : setTurno(SIMBOLO_X);

    setTablero(copy);
    console.log(tablero)
    console.log('salgo funcion tateti');
    return copy[x][y]
  }

  return (
    <div className="contenedor">
      <div
        className='tateti'
      >   
        <Casilla x={0} y={0} turnoJugador={jugar} />
        <Casilla x={0} y={1} turnoJugador={jugar} />
        <Casilla x={0} y={2} turnoJugador={jugar} />
        <Casilla x={1} y={0} turnoJugador={jugar} />
        <Casilla x={1} y={1} turnoJugador={jugar} />
        <Casilla x={1} y={2} turnoJugador={jugar} />
        <Casilla x={2} y={0} turnoJugador={jugar} />
        <Casilla x={2} y={1} turnoJugador={jugar} />
        <Casilla x={2} y={2} turnoJugador={jugar} />     
      </div>
    </div>
  );
}

export default App;
