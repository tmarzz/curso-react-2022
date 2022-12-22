import { useState } from 'react';
import './style.css'

// 1 - Tomo un json de ejemplo y armo una estructura de HTML/CSS/JS para esa informacion
// 2 - Una vez que tengo la estructura deseada, utilizo las propiedades para recibir la informacion.
// 3 - ....

function PostItemInput({id, title, body}) {

    const [postObjeto, setPostObjeto] = useState({
        id,
        title,
        body
    })

    const guardarTitle = (event) => {
        //crear codigo para actualizar el valor de title sin
        //perder el resto de los parametros del objeto
        let title = event.target.value;
        setPostObjeto((estadoPrevio) => ({
            ...estadoPrevio,
            title
        }))
    }

    return(
        <div
            id={id}
            className='postItemInput-contenedor'
        >
            <input 
                type='text'
                value={postObjeto.title}
                onChange={guardarTitle}
            />
            <textarea 
                value={postObjeto.body}
            />
        </div>
    )
}

export default PostItemInput;