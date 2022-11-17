import { useState } from "react";

function Carrousel() {
    
    const [numero, setNumero] = useState(0);

    const estilos = {
        contenedorDeImagenes: {
            display: 'flex',
            flexDirection: 'row',

        },
        ventana: {
            height: '300px',
            width: '300px',
            overflow: 'hidden'
        },
        movimiento: {
            transform: `translate(${numero * -300}px, 0px)`,
            transition: 'all 0.3s linear 0.1s'
        }
    }

    const desplazarDerecha = () => {
        if(numero < 2){
            setNumero(numero + 1);
        }
        else{
            setNumero(0);
        }
        // console.log(numero)
    }

    const desplazarIzquierda = () => {
        if(numero > 0){
            setNumero(numero - 1);
        }
        else{
            setNumero(2)
        }
        // console.log(numero)
    }

    return(
        <div>
            <div
                style={estilos.ventana}
            >
                <div
                    style={estilos.movimiento}
                >
                    <div
                        style={estilos.contenedorDeImagenes}
                    >
                        <img src="https://picsum.photos/300?random=1" alt="" />
                        <img src="https://picsum.photos/300?random=2" alt="" />
                        <img src="https://picsum.photos/300?random=3" alt="" />
                    </div>
                </div>
            </div>
            <button
                onClick={desplazarIzquierda}
            >
                IZQUIERDA
            </button>
            <button
                onClick={desplazarDerecha}
            >
                DERECHA
            </button>
        </div>
    );
}

export default Carrousel;