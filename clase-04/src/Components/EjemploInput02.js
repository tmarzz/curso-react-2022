import { useState } from "react";

function EjemploInput02() {
    const [nombre, setNombre] = useState();
    const [cumpleMinimoCaracteres, setCumpleMinimoCaracteres] = useState(true);

    const guardarNombre = (event) => {
        let nombreIngresado = event.target.value;
        setNombre(nombreIngresado);
        cantidadMinimaCaracteres();
    };

    const cantidadMinimaCaracteres = () => {
        if(nombre.length <= 8) {
            setCumpleMinimoCaracteres(false)
        }
        else {
            setCumpleMinimoCaracteres(true)
        }
    }

    return(
        <div>
            <input 
                type='text'
                placeholder='Ingrese su nombre'
                value={nombre} 
                onChange={(event) => {guardarNombre(event)}}
                />
                <label 
                    style={{color: 'red'}}
                >
                    {cumpleMinimoCaracteres ? '' : 'Tiene que tener ocho caracteres.'}
                </label>
                <p>{nombre}</p>
        </div>
    );
}
export default EjemploInput02;