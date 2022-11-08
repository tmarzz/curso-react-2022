// Crear un input del tipo password (atributo type) y guardar en un hook la contraseña
// ingresada por el usuario. Imprimir en pantalla la misma.

import { useState } from "react";

function Ejercicio01(){
    const [password, setPassword] = useState();

    function GuardarPassword(event){
        let passwordIngresado = event.target.value;
        setPassword(passwordIngresado);
    }

    return(
        <div>
            <input 
                type='password'
                value={password}
                onChange={(e) => {
                    GuardarPassword(e);
                }}
            />
            <p>{password}</p>
        </div>
    );
}

export default Ejercicio01;