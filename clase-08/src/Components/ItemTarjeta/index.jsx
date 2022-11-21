import { useState } from "react";
import Paper from "../Paper";
import Contenedor from '../Contenedor';
import './style.css';

function ItemTarjeta(props) {
    const [titulo, setTitulo] = useState(props.titulo);
    const [editable, setEditable] = useState(false); // no es editable = false

    const updateTitulo = (e) => {
        // El parámetro 'e' hace referencia al OBJETO EVENT que siempre se recibe con cualquier evento de js que ocurra.
        // El 'e.target' hace referencia a obtener el elemento de la interfaz donde ocurrio el evento.
        let elemento = e.target;
        // El e.value es para obtener el valor ingresado por el usuario en el input
        let tituloIngresado = elemento.value;
        // Actualizo el HOOK del Titulo
        setTitulo(tituloIngresado);
    }

    return(
        <Paper
            color='purple'
        >            
            <Contenedor
                direccion='column'
            >
                <input  
                    type='text'
                    value={titulo}
                    onChange={updateTitulo}
                    readOnly={editable === false}
                    className={editable === true ? 'editable' : 'no-editable'}
                />
                <textarea
                    readOnly={editable === false}
                    className={editable === true ? 'editable' : 'no-editable'}
                    value={props.detalle}
                />
                <Contenedor
                    direccion='row'
                >
                    {
                        editable === false ? 
                            <button
                                onClick={() => (setEditable(true))}
                            >
                                Editar
                            </button>
                        :
                        <button
                            onClick={() => (setEditable(false))}
                        >
                            Guardar
                        </button>
                    }
                    <button
                        onClick={() => (
                            props.funcionBorrar(props.id)
                        )}
                    >
                        Eliminar
                    </button>
                </Contenedor>
            </Contenedor>
        </Paper>
    );
    
}
        
export default ItemTarjeta;

{/*     <div
            className="paper"
        >
            <input  
                type='text'
                value={titulo}
                onChange={updateTitulo}
                readOnly={editable === false}
                className={editable === true ? 'editable' : 'no-editable'}
            />
            <textarea
                readOnly={editable === false}
                className={editable === true ? 'editable' : 'no-editable'}
            >
                {props.detalle}
            </textarea>
            {
                editable === false ? 
                    <button
                        onClick={() => (setEditable(true))}
                    >
                        Editar
                    </button>
                :
                <button
                    onClick={() => (setEditable(false))}
                >
                    Guardar
                </button>
            }
    </div> */}