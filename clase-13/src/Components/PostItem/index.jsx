import './style.css'
import Modal from '../Modal';
import PostItemInput from '../PostItemInput';
import { useState } from 'react';

// 1 - Tomo un json de ejemplo y armo una estructura de HTML/CSS/JS para esa informacion
// 2 - Una vez que tengo la estructura deseada, utilizo las propiedades para recibir la informacion.
// 3 - ....

function PostItem({id, title, body, onClick}) {

    return(
        <div
            id={id}
            className='postItem-contenedor'
            onClick={onClick}
        >
            <h5
                className='postItem-title'
            >
                {title}
            </h5>
            <p
                className='postItem-paragraph'
            >
                {body}
            </p>

        </div>
    )
}

export default PostItem;