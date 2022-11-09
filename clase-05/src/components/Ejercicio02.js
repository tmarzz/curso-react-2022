/*
    Componente tarjetero.
    Tiene tres componentes del tipo tarjetadeunaimagen
    uno despues de otro
    
    Hacer las modificaciones necesarias al componente tarjetadeunaimagenV2 para que acepte que le pasen el texto como propiedades. solo los campos de precio y titulo,
    no la imagen
*/

import ComponenteTarjetaV02 from "./ComponenteTarjetaV02";

function Ejercicio02(props) {
    return(
        <div>
            <ComponenteTarjetaV02 
                imagen='https://picsum.photos/200/300/?random=1'
                detalle='Camisa Friday II Slim Fit'
                precio='$21.000'
            />
            <ComponenteTarjetaV02 
                imagen='https://picsum.photos/200/300/?random=2'
                detalle='Coso'
                precio='$1000'
            />
            <ComponenteTarjetaV02 
                imagen='https://picsum.photos/200/300/?random=3'
                detalle='Piluso'
                precio='$15.000'
            />
        </div>
    );
}

export default Ejercicio02;