import { useState } from "react";

function EjemploInput01() {
    const [nombre, setNombre] = useState('Valor por defecto');

    const guardarNombre = (event) => {
        let nombreIngresado = event.target.value;
        setNombre(nombreIngresado);
    };

    return(
        <div>
            <input 
                type='text'
                value={nombre} 
                onChange={(event) => {guardarNombre(event)}}
                />
                {`${nombre}`}
                <p>{nombre}</p>
        </div>
    );
}
export default EjemploInput01;