import { useState } from "react";


function AgregandoComportamiento() {
    
    // Esta variable existe en el browser, pero por más cambios que le haga,
    // por el ciclo de carga de ReactJS, nunca va a actualizar el DOM con el
    // color rojo, porque nunca se entera de que el estado cambió
    let variable = 'VALOR INICIAL';

    // HOOK
    // const [variable, la funcion de actualizacion] = useStte('valor inicial')
    const [colorDeLetra, setColorDeLetra] = useState('');
    // Cuando quiera ver el valor de la variable, llamo a color
    // Cuando quiera actualizar el valor de la variable color, uso la funcion setColor
    
    return (
        <div>
            <p
                style={{color: colorDeLetra}}
                onDoubleClick={() => {
                    setColorDeLetra('red');
                    variable = 'VALOR NUEVO';
                    console.log(variable);
                }}
                onClick={() => {
                    console.log(variable);
                }}
            >
                ¿De qué color soy?
            </p>
        </div>
    );
}

export default AgregandoComportamiento;