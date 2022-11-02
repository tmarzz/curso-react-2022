import { useState } from "react";


function EjemploHook01() {

    const [visibilidad, setVisibilidad] = useState(true);
    
    function clickCambiarEstadoDeVisibilidad() {
        setVisibilidad(!visibilidad);
    }

    return (
        <div>
            <button
                onClick={clickCambiarEstadoDeVisibilidad}
            >
                ¡CLICKEAME!
            </button>
            <p>{visibilidad.toString()}</p>
            {visibilidad ? '>:(' : ':0'}
        </div>
    );
}

export default EjemploHook01;