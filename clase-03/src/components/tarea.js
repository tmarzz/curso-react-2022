// Refactorizar el ejercicio 1 de 'los monos' tal que el contador
// sume valores sin limite.
// Cuando el contador sea un numero par muestra un emoji
// cuando el contador sea un numero impar, muestra otro


import { useState } from "react";
let emoji= '';

function Tarea() {
    const [estado, setEstado] = useState(0)

    function Sumar() {
        setEstado(estado + 1);
    }

    function Restar() {
        if(estado > 0) {
            setEstado(estado - 1)
        }
        else{
            setEstado(2)
        }
    }

function emoticon() {
    if(estado % 2 == 0) {
        emoji = ':O';
    }
    else {
        emoji = ':X';
    }
    return emoji;
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
            <p>{emoticon().toString()}</p>
            <p>{estado % 2 == 0 ? ':D' : '>:('}</p>
            <button onClick={Restar}>
                -
            </button>
        </div>
   ); 
}

export default Tarea;