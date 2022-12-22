import { useEffect, useRef, useState } from "react";

function Monto(){
    const [show, setShow] = useState(true)
    const [saldo, setSaldo] = useState(0);

    // useRef inmutable. No tiene ningún tipo, solo asignado el elemento HTML
    const pRef = useRef();
    // useRef mutable. Tiene un valor asignado como si fuera un useState.
    // No está relacionado a ningún elemento HTML
    const pRefMutable = useRef(true);

    useEffect(() => {
        //Finjo una conexión lenta
        setTimeout(() => {
            if(pRefMutable.current === true){
                setSaldo(500);
            }
            else{
                console.log('No se puede mostrar información en elementos no montados')
            }
        },4000)

        // Component Unmount
        return () => {
            pRefMutable.current = false;
        }

    }, [])

    return(
        <div>
            <p>Tu saldo disponible es: </p>
            <button
                onClick={() => {setShow(!show)}}
            >
                {show ? 'Ocultar' : 'Mostrar'}
            </button>
            {/* {show ? <p ref={pRef}>{saldo}</p> : <p>*****</p>} */}
            {show ? <p ref={pRefMutable}>{saldo}</p> : <p>*****</p>}
        </div>
    );
}

export default Monto;