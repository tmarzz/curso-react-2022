import { useState } from 'react';
import './Style.css';

function CasillaTateti({x, y, funcionActualizarTableroEnviada, habilitado}){

    const [miValor, setMiValor] = useState(null);

    const hizoClick = () => {
        if (habilitado(x,y)){
            let resultado = funcionActualizarTableroEnviada(x,y);
            setMiValor(resultado)
        }
    }

    return(
        <div
            className='contenedorCasilla'
            onClick={hizoClick}
        >
            {miValor}
        </div>
    );
}

export default CasillaTateti;