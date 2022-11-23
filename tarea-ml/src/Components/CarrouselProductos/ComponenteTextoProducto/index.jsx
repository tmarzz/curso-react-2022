import './style.css'

function TextoProducto(props) {
    return(
        <div
            className='contenedorTextoProducto'
        >
            {props.ofertaBool === false ? '' :
                    <span
                        className='resaltarOfertaDelDia'
                    >                    
                        OFERTA DEL DIA
                    </span>
            }
            <div
                className='contenedorDetalleProducto'
            >
                {/* HACER IF ofertaBool mostrar texto con oferta, else mostrar solo con precio original */}
                <span
                    className='precioOriginal'
                >
                    {console.log(props.precioReal)}
                    {/* 55555555 */}
                </span>
                {/* CONTENEDOR DE PRECIO Y DESCUENTO */}
                <div
                    className='contenedorPrecioProducto'
                >
                    <span
                        className='precioFinal'
                    >
                        {/* {props.precioDescuento} */}
                        5555555
                    </span>
                    <span
                        style={{
                        color: '#00A650',
                        fontSize: '0.6rem',
                        paddingTop: '0.5rem',
                        paddingLeft: '0.3rem',
                    }}
                    >
                        35% OFF
                    </span>
                </div>
            </div>    
        </div>
    );
};

export default TextoProducto;