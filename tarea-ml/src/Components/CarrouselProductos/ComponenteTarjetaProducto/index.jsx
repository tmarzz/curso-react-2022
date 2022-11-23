// import { useState } from 'react';
import ImagenTarjetaProducto from '../ComponenteImagenTarjetaProducto';
import TextoProducto from '../ComponenteTextoProducto';
import './style.css';

// HACER ALGORITMO PARA CALCULAR EL DESCUENTO CON precioOriginal y descuento
const json = [
    {
        ofertaDelDia: false,
        precio: '$58.999',
        descuento: 10,
        precioConDescuento: '$52.999',
        cuotasSinInteres: '3',
        envioGratis: true,
        nombreProducto: 'Telefono Celular Tcl 30+',
        detalleProducto: '128/4gb Tech Black',
        imagenProducto: 'https://picsum.photos/200/300?random=1', //No anda pasar la imagen por atributo, preguntar al profesor
    }
]

function TarjetaProducto(props) {

    return(

        <div
            className='contenedorTarjetaProducto'
        >
            <ImagenTarjetaProducto 
                nombre={json.nombreProducto}
                imagen={json.imagenProducto}
            />
            <hr />
            <TextoProducto 
                ofertaBool={json.ofertaDelDia}
                precioReal={json.precio}
                precioDescuento={json.precioConDescuento}
            />
        </div>

    );
}

export default TarjetaProducto;

//<div
//style={{
//    paddingLeft: '0.5rem',
//}}
//>
//<span
//    style={{
//        backgroundColor: 'white',
//        width: '34%',
//        fontSize: '0.6rem',
//        
//    }}
//>
//    OFERTA DEL DIA
//</span>
//<div
//    className='contenedorDetalleProducto'
//>
//    <span
//        style={{
//            textDecoration: 'line-through',
//            fontSize: '0.6rem',
//            color: '#666666',
//        }}
//    >
//        $ 100.000
//    </span>
//    {/* CONTENEDOR DE PRECIO Y DESCUENTO */}
//    <div
//        style={{
//            display:'flex',
//            flexDirection: 'row',
//            justifyContent: 'flex-start',
//        }}
//    >
//        <span
//            style={{
//                fontSize: '1.5rem',
//            }}
//        >
//            $ 40.499
//        </span>
//        <span
//            style={{
//                color: '#00A650',
//                fontSize: '0.6rem',
//                paddingTop: '0.5rem',
//                paddingLeft: '0.3rem',
//            }}
//        >
//            35% OFF
//        </span>
//
//    </div>
//    <span
//        style={{
//            color: '#15AD5E',
//            fontSize: '0.8rem',
//            fontWeight: 'bold'
//        }}
//    >
//        {/* ¡PODRIA SER COMPONENTE TIPO DE ENVIO? */}
//        Envío gratis
//    </span>
//    <span>NOMBRE PRODUCTO</span>
//    <span>DETALLE PRODUCTO</span>
//</div>
//
//</div>