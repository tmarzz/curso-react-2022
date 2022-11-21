import ItemTarjeta from "../../Components/ItemTarjeta";
import Contenedor from '../../Components/Contenedor';
import { useState } from "react";

const json = [
    {
        id: '1',
        titulo: 'Hacer compras',
        detalle: 'Comprar pan, papitas, birra',
    },
    {
        id: '2',
        titulo: 'Sacar turno médico',
        detalle: 'Sacar turnno con el médico',
    },
    {
        id: '3',
        titulo: 'Ropa sucia',
        detalle: 'Lavar la ropa',
    },
]

function MainView() {
    const [listaTareas, setListaTareas] = useState(json);

    const borrarTarjeta = (id) => {
        console.log(id);
        let listaFiltrada = listaTareas.filter((item) => {
            return id !== item.id
        });
        setListaTareas(listaFiltrada);
    }

    return(
        <div>
            <Contenedor
                direccion='row'
                wrap='wrap'
            >
                {
                    listaTareas.map((item) => (
                        <ItemTarjeta 
                            key={`itemTarjeta-${item.id}`}
                            titulo={item.titulo}
                            detalle={item.detalle}
                            id={item.id}
                            funcionBorrar={borrarTarjeta}
                        />
                    ))
                }
            </Contenedor>
        </div>
    );
}

export default MainView;