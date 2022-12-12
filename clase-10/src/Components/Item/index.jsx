import { useState } from "react";


function Item({id, valor, notificarQueFuiSeleccionado}) {
    const [select, setSelect] = useState(false)
    
    const estilo = {
        border: select ? '1px solid black' : 'none'
    }

    const funcionOnClick = () => {
        notificarQueFuiSeleccionado(id)
        setSelect(!select)
    }

    return(
        <div
            style={estilo}
            onClick={funcionOnClick}
        >
            {valor}
        </div>
    );
}

export default Item;