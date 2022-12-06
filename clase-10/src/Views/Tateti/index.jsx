import { useState } from 'react';
import CasillaTateti from '../../Components/CasillaTateti/Index';
import './Style.css';

function Tateti() {

    const [tablero, setTablero] = useState([
        [null],[null],[null],
        [null],[null],[null],
        [null],[null],[null],
    ])

    const actualizarTablero = (x,y) => {
        // Hago una copia del tablero original, porque el estado de un HOOK es inalterable.
        let copyTablero = tablero;
        // Actualizo la posición en la copia del tablero
        copyTablero[x][y] = 'Hola!'
        // Seteo al HOOK su nuevo estado, pisando el estado anterior.
        setTablero(copyTablero);
        // Devuelvo el valor de la posición modificada para que la casilla pueda motrarlo en pantalla.
        return tablero[x][y]
    }

    return(
        <div
            className='contenedorTateti'
        >
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                x={0}
                y={0}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                x={0}
                y={1}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                x={0}
                y={2}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                x={1}
                y={0}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                x={1}
                y={1}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                x={1}
                y={2}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                x={2}
                y={0}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                x={2}
                y={1}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                x={2}
                y={2}
            />
        </div>
    );
}

export default Tateti;