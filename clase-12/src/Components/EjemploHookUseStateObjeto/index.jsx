import { useState } from "react";

function EjemploUseStateObjeto() {

    const [objeto, setObjeto] = useState({
        name: 'tomson',
        lastname: 'coso'
    })

    const actualizarNombre = (event) => {
        let name = event.target.value;
        // setObjeto(ingresoDeUsuario) si hago esto piso el objeto con otro tipo de dato
        setObjeto((estadoPrevio) => ({
            ...estadoPrevio,
            // name: ingresoDeUsuario,
            name
        }))
    }

    return(
        <div>
            <input 
                type='text'
                value={objeto.name}
                onChange={actualizarNombre}
            />

            <input 
                type='text'
                value={objeto.lastname}
                // onChange={}
            />
        </div>
    )
}

export default EjemploUseStateObjeto;