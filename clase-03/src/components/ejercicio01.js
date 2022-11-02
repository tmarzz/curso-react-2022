/*
    Realizar un componente con tres estados, basado en un contador.
    Cuando el contador está en 0, mostar el emoji :mono:
    Cuando el contador está en 1, mostrar el emoji
    Cuando el contador está en 2, mostrar el emoji
    Al llegar al estado 2, volver al 0

    PISTA: Le sumas uno mientras el contador sea < 3. Cuando sea 2, igual a 3
*/

import { useState } from "react";

function Ejercicio01() {
    const [estado, setEstado] = useState(0)

    function Sumar() {
        if(estado < 2) {
            setEstado(estado + 1)
        }
        else{
            setEstado(0);
        }
    }

    function Restar() {
        if(estado > 0) {
            setEstado(estado - 1)
        }
        else{
            setEstado(2)
        }
    }

   return (
        <div>
            <button
                onClick={Sumar}
            >
                +
            </button>
            <p>
                {estado.toString()}
            </p>
            <button onClick={Restar}>
                -
            </button>
        </div>
   ); 
}

export default Ejercicio01;