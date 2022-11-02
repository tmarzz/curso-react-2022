import { useState } from "react";

const estilo = {
    habilitado: {
        color: 'white',
        backgroundColor: 'black'
    },
    deshabilitado: {
        color: 'black',
        backgroundColor: 'purple'
    }
}

function Hook02() {
    //Hook
    const [habilitar, sethabilitar] = useState(true);

    function CambiarHabilitacion() {
        sethabilitar(!habilitar)
    }

    return (
        <div>
            <button
                onClick={CambiarHabilitacion}
            >
                ¡CLICKEAME!
            </button>
            <p
                style={habilitar ? estilo.habilitado : estilo.deshabilitado}
            >
                TEXTO
            </p>
            <button disabled={habilitar}></button>
        </div>
    );
}


export default Hook02;