import imgLogo from './../img/hbo-max-logo.png'
import ComponenteLogo from "./componenteLogo";
import ComponenteTextoTarjeta from "./componenteTextoTarjeta";

function ComponenteTarjetaPromocion(props){
    const estilos = {
        contenedor: {
            borderRadius: '10px',
            // width: '26rem',
            // height: '19rem',
            width: '400px',
            height: '295px',
            backgroundImage: `url(${props.imagen})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            alignItems: 'end',
            padding: '0.5rem',
            boxSizing: 'border-box'
        },
        contenedor02: {            
            display: 'flex',
            height: '10rem',
            alignItems: 'end',
        }
    }

    return(
        <div style={estilos.contenedor}>
            <div
                style={estilos.contenedor02}
            >
                <ComponenteLogo             
                    logo={imgLogo}
                    detalle='Logo HBO'
                />
                <ComponenteTextoTarjeta  
                    promocion='7 DÍAS GRATIS'
                    descuento='Hasta 50% OFF'
                    plataforma='HBO Max'            
                />
            </div>
        </div>
    );
}

export default ComponenteTarjetaPromocion;