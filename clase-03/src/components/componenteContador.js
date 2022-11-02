import { useState } from "react";


function ComponenteContador() {
    //Hook
    const [contadorHook, setContadorHook] = useState(0);
    //Variable tradicional
    let contadorTradicional = 0;

    const funcionContadora = () => {
        contadorTradicional++;
        console.log(contadorTradicional);

        setContadorHook(contadorHook + 1);
    }
    
    function funcionRestadora() {
        setContadorHook(contadorHook - 1);
    }

    return (
        <div 
            onContextMenu={funcionRestadora}
            onClick={funcionContadora}
        >
            H:{contadorHook} - T:{contadorTradicional}
        </div>
    );
}


export default ComponenteContador;