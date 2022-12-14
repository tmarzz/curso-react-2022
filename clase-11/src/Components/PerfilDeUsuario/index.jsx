import { useEffect, useState } from "react";
import Axios from 'axios';

function PerfilDeUsuario() {
    const [json, setJson] = useState();
    const [isLogging, setIsLogging] = useState(true)
    const [contador, setContador] = useState(0)

    useEffect(() => {
        // Usamos setTimeout para simular demoras en la 
        // transmición de datos y aprender como mostrar un 
        // cargando al usuario en pantalla
        setTimeout(() => {
            Axios({
                url: 'https://jsonplaceholder.typicode.com/users/3'
            })
            .then((response) => {
                setJson(response.data)
                setIsLogging(false)
            })
            .catch((error) => {
                console.error(error)
            })
        }, 5000)

        console.log('DidMount')
    }, [isLogging])
    
    return(
        <div>
            <button
                onClick={() => {setContador(contador + 1)}}
            >
                Click Me: {contador}
            </button>
            {
                isLogging ? 
                    <p>Está cargando...</p>
                    :
                    <p>
                        Nombre: {json.name}
                        <br />
                        Apellido: {json.username}
                    </p>

            }
        </div>
    )
}

export default PerfilDeUsuario;