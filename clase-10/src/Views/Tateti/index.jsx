import { useState } from 'react';
import CasillaTateti from '../../Components/CasillaTateti/Index';
import './Style.css';

const SIMBOLO_X = 'X';
const SIMBOLO_0 = '0';

function Tateti() {

    const [tablero, setTablero] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ])

    const [turno, setTurno] = useState(SIMBOLO_0);

    const casillaHabilitadaParaJugar = (x,y) => {
        return tablero[x][y] === null;
    }

    const cambiarTurno = () => {
        let siguienteTurno = turno === SIMBOLO_0 ? SIMBOLO_X : SIMBOLO_0;
        setTurno(siguienteTurno);
    }

    const actualizarTablero = (x,y) => {
        // Hago una copia del tablero original, porque el estado de un HOOK es inalterable.
        let copyTablero = tablero;
        // Actualizo la posición en la copia del tablero
        copyTablero[x][y] = turno;
        // Seteo al HOOK su nuevo estado, pisando el estado anterior.
        setTablero(copyTablero);
        // Paso el turno
        cambiarTurno();
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
                habilitado={casillaHabilitadaParaJugar}
                x={0}
                y={0}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                habilitado={casillaHabilitadaParaJugar}
                x={0}
                y={1}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                habilitado={casillaHabilitadaParaJugar}
                x={0}
                y={2}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                habilitado={casillaHabilitadaParaJugar}
                x={1}
                y={0}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                habilitado={casillaHabilitadaParaJugar}
                x={1}
                y={1}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                habilitado={casillaHabilitadaParaJugar}
                x={1}
                y={2}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                habilitado={casillaHabilitadaParaJugar}
                x={2}
                y={0}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                habilitado={casillaHabilitadaParaJugar}
                x={2}
                y={1}
            />
            <CasillaTateti 
                tableroEnviado={tablero}
                funcionActualizarTableroEnviada={actualizarTablero}
                habilitado={casillaHabilitadaParaJugar}
                x={2}
                y={2}
            />
        </div>
    );
}

export default Tateti;