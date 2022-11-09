import { useState } from 'react';

function ItemListaToDo(props) {        
    const [estado, setEstado] = useState(false);

    const cambiarEstadoTarea = () => {
        setEstado(!estado);
    }

    return(
        <li
           onClick={cambiarEstadoTarea}           
        >
            {estado ? <span style={{textDecoration: 'solid 1px black line-through'}}>{props.textoToDo}</span> : props.textoToDo}
        </li>
    );
}

export default ItemListaToDo;