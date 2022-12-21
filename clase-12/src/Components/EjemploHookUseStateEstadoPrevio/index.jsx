import { useState } from "react";

function Contador() {

    const [contador, setContador] = useState(0);
    const [contadorConEstado, setContadorConEstado] = useState(0)

    const contarClicks = () => {
        setContador(contador + 1)
        setContador(contador + 1)
        setContador(contador + 1)
    }

    const contarClicksConEstado = () => {
        setContadorConEstado((estadoPrevio) => (estadoPrevio + 1))
        setContadorConEstado((estadoPrevio) => (estadoPrevio + 1))
        setContadorConEstado((estadoPrevio) => (estadoPrevio + 1))
    }

    return(
        <div>
        <div
            style={{
                height: 100, 
                width: 100,
                backgroundColor: "lightblue"
            }}
            onClick={contarClicks}
        >
            {contador}
        </div>
        <div
            style={{
                height: 100, 
                width: 100,
                backgroundColor: "violet"
            }}
            onClick={contarClicksConEstado}
        >
            {contadorConEstado}
        </div>
        </div>
    )
}

export default Contador;