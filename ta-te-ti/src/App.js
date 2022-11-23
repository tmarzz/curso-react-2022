import './App.css';
import useState from 'react';

const SIMBOLOX = 'X';
const SIMBOLO0 = '0'

function App() {
  const [tablero, setTablero] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])

  const jugar = (x, y) => {
    let copy = tablero;
  }

  return (
    <div className="contenedor">
      <div
        className='tateti'
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
