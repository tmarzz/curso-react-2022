import { useState } from "react";

function InputNombre() {
    const [nombre, setNombre] = useState()
    
    return(
        <input 
            type='text'
            style={{margin: '20px'}}
            placeholder='Nombre o Email'
            value={nombre}
            onChange={(event) => (setNombre(event.target.value))}
        />
    );
}

export default InputNombre;