//  TAREA
//  modificar el código para que el hook en Tabla del id seleccionado sea del tipo array,
//  y el usuario pueda seleccionar y deseleccionar varios usuarios de la lista

import { useEffect, useState } from "react";
import Axios from "axios";

const Fila = ({id, name, username, email, city, selected}) => {
    return(
        <tr
            onClick={() => {
                selected(id)
            }}
        >
            <td>
                <input 
                    type='checkbox'
                />
            </td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{city}</td>
        </tr>
    );
}

function Table(){
    const [json, setJson] = useState([])
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState()

    useEffect(() => {
        Axios({
            url: 'https://jsonplaceholder.typicode.com/users'
        })
        .then((response) => {
            setJson(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return(
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>city</th>
            </tr>
            {
                json.map(({id, name, username, email, address}) => (
                    <Fila 
                        id={id}
                        name={name}
                        username={username}
                        email={email}
                        city={address.city}
                        selected={setUsuarioSeleccionado}
                    />
            ))}
            <th>
                <td>
                    Usted seleccionó a {usuarioSeleccionado}
                </td>
            </th>
        </table>
    );
}

export default Table;