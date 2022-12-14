import { useEffect, useState } from "react";

console.log('%c PreRender', 'background-color: yellow');
function EjemploUseEffect() {

    console.log('%c Lógica del render', 'background-color: yellow');

    const [contadorMeGusta, setContadorMeGusta] = useState(0);
    const [contadorNoMeGusta, setContadorNoMeGusta] = useState(0);
    const [color, setColor] = useState('white');

    // componentDidMount
    // Solo se ejecuta una vez, cuando el componente está siendo montado
    useEffect(() => {
        console.log('%c UseEffect con dependencias vacías - ComponentDidMount', 'background-color: lightgreen')
    }, [/* No tiene dependencias */])

    // componentDidUpdate
    // Se va a ejecutar cada vez que el estado del componente se actualice
    useEffect(() => {
        console.log('%c UseEffect sin dependencias - ComponentDidUpdate', 'background-color: violet')
    })

    // componentDidUpdate pero con condiciones (depemdemcia del estado de un hook o más)
    // En este caso solo se ejecuta cuando 'contadorMeGusta' tiene un cambio de estado
    useEffect(() => {
        console.log(`%c UseEffect con una dependencia de ME GUSTA: ${contadorMeGusta} - ComponentDidUpdate`, 'background-color: pink')

        // componentWillUnmount
        return () => {
            console.log('Cierre useEffect para contadorMeGusta - componentWillUnmount')
        }

    }, [contadorMeGusta])

    useEffect(() => {
        console.log(`%c UseEffect con una dependencia de NO ME GUSTA: ${contadorNoMeGusta} - ComponentDidUpdate`, 'background-color: pink')

        // QUEDA PENDIENTE
        // Window.addEventListener('onMouseMove', () => {console.log('Estás moviendo el mouse')})

        // componentWillUnmount
        return () => {
            console.log('Cierre useEffect para contadorNoMeGusta - componentWillUnmount')
        }

    }, [contadorNoMeGusta])

    useEffect(() => {
        console.log(`%c UseEffect con ambas dependencias. ME GUSTA: ${contadorMeGusta}. NO ME GUSTA: ${contadorNoMeGusta}`, 'background-color: lightblue')
        if(contadorMeGusta < contadorNoMeGusta){
            //Decisión pero nos falta ver reference para hacerlo bien.
            setColor('red');
        }
        else if(contadorMeGusta > contadorNoMeGusta){
            //Decisión pero nos falta ver reference para hacerlo bien.
            setColor('green')
        }

        // componentWillUnmount
        return () => {
            console.log('Cierre useEffect para ambos contadores - componentWillUnmount')
        }

    }, [contadorMeGusta, contadorNoMeGusta])

    return(
        <div
            style={{backgroundColor: color}}
        >
            {console.log('%c El Render', 'background-color: yellow')}
            <p
                onClick={() => {setContadorMeGusta(contadorMeGusta + 1)}}
            >
                {contadorMeGusta}  👆 
            </p>
            <p
                onClick={() => {setContadorNoMeGusta(contadorNoMeGusta + 1)}}
            >
                {contadorNoMeGusta}  👇
            </p>
        </div>
    );
}

export default EjemploUseEffect;