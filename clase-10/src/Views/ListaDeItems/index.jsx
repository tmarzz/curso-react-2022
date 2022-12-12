import { useState } from "react";
import Item from "../../Components/Item";

function ListaDeItems() {
    const [listaDeItemsSeleccionados, setListaDeItemsSeleccionados] = useState([]);

    const seleccionDeItem = (id) => {
        if(listaDeItemsSeleccionados.some((item) => (item === id))){
            // Si ya está seleccionado lo elimino
            let copyArray = listaDeItemsSeleccionados;
            copyArray = copyArray.filter((item) => (item != id));
            setListaDeItemsSeleccionados(copyArray);
        }
        else{
            // Si no está seleccionado lo agrego
            setListaDeItemsSeleccionados([...listaDeItemsSeleccionados, id])
        }
        // return true
    }

    return(
        <div>
            {`Cantidad de items seleccionados: ${listaDeItemsSeleccionados.length}`}
            <Item 
                id={1}
                valor={'Hacer compras'}
                notificarQueFuiSeleccionado={seleccionDeItem}
            />
            <Item 
                id={2}
                valor={'Sacar al perro'}
                notificarQueFuiSeleccionado={seleccionDeItem}
            />
            <Item 
                id={3}
                valor={'bañarme'}
                notificarQueFuiSeleccionado={seleccionDeItem}
            />
        </div>
    );
}

export default ListaDeItems;