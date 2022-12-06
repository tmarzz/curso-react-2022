import { useState } from 'react';
import './Style.css';

function CasillaTateti({tableroEnviado, x, y, funcionActualizarTableroEnviada}){

    const [miValor, setMiValor] = useState(null);

    const hizoClick = () => {
        let resultado = funcionActualizarTableroEnviada(x,y);
        setMiValor(resultado)
    }

    return(
        <div
            className='contenedorCasilla'
            onClick={hizoClick}
        >
            {tableroEnviado[x][y]}
        </div>
    );
}

export default CasillaTateti;