// 02 - Controlar que la password tiene entre 3 y 5 caracteres y que inicia con mayuscula
//      sacan el primer caracter del hook y lo guardan en una variable auxiliar, le aplican la propieddad upper para convertirlo en mayuscula, si el resultado en esa variable auxiliar es igual al primer caracter del hook, significa que es mayuscula.

// 01 - Crear un input del tipo password (atributo type) y guardar en un hook la contraseña
// ingresada por el usuario. Imprimir en pantalla la misma.

import { useState } from "react";

function Ejercicio02(){
    const [password, setPassword] = useState();
    const [minimoCaracteres, setMinimoCaracteres] = useState(false);
    const [chequeoMayuscula, setChequeoMayuscula] = useState(true);
    
    const GuardarPassword = (event) => {
        let passwordIngresado = event.target.value;
        setPassword(passwordIngresado);
        ChequearCaracteresPassword()
        EmpiezaConMayuscula();
    }
    
    function ChequearCaracteresPassword() {
        //MELMO!!
        if(password != undefined && password.length < 3 || password.length > 5){
            setMinimoCaracteres(true);
        }
        else {
            setMinimoCaracteres(false);
        }
    }
    
    function EmpiezaConMayuscula() {
        if(password != undefined) {
            const primerCaracter = password[0].toUpperCase();
            if (primerCaracter === password[0]){
                setChequeoMayuscula(true);
            }
            else{
                setChequeoMayuscula(false);
            }
        }        
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
            <br />
            <label
                style={{color: 'red'}}
            >
                {minimoCaracteres ? 'Debe tener entre 3 y 5 caracteres' : ''}
            </label>
            <br />
            <label
                style={{color: 'red'}}
            >
                {chequeoMayuscula ? '' : 'Debe empezar con mayuscula'}
            </label>
            <p>{password}</p>
        </div>
    );
}

export default Ejercicio02;