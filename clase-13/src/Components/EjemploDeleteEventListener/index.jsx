import { useEffect, useRef, useState } from "react";

function EjemploDeGestionDeEventos() {
    const [contador, setContador] = useState(0)
    const divRef = useRef();

    const cambiarColorRosa = (event) => {
        event.target.style.backgroundColor = 'pink'
    }

    const cambiarColorAzul = (event) => {
        event.target.style.backgroundColor = 'lightblue'
    }

    // En el mismo useEffect agregar otro evento que sea el de mouseleave y haga que el
    // div sea de color azul. Crear la funcion y eliminar el evento en la parte de
    // componentWillUnmount

    useEffect(() => {
        divRef.current.addEventListener('mouseenter', cambiarColorRosa)
        divRef.current.addEventListener('mouseleave', cambiarColorAzul)
        return() => {
            divRef.current.removeEventListener('mouseenter', cambiarColorRosa);
            divRef.current.removeEventListener('mouseleave', cambiarColorAzul);
        }
    });

    return(
        <div
            style={{
                height: 50,
                width: 50,
                backgroundColor: "violet"
            }}
            ref={divRef}
            onClick={() => {
                setContador(contador + 1)
            }}
        >
            {contador}
        </div>
    );
}

export default EjemploDeGestionDeEventos;