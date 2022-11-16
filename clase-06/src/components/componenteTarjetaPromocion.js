// import imgLogo from './../img/hbo-max-logo.png'
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
            padding: '1.2rem',
            paddingLeft: '1rem',
            boxSizing: 'border-box',
            // marginLeft: '2rem',
            marginRight: '1rem'
        },
        contenedor02: {            
            display: 'flex',
            height: '10rem',
            alignItems: 'end',
        }
    }
    return(
        <div 
            style={estilos.contenedor} 
        >
            <div
                style={estilos.contenedor02}
            >
                <ComponenteLogo             
                    logo={props.logo}
                    detalle={props.detalleLogo}
                />
                <ComponenteTextoTarjeta  
                    promocion={props.promocion}
                    descuento={props.descuento}
                    plataforma={props.plataforma}            
                />
            </div>
        </div>
    );
}

export default ComponenteTarjetaPromocion;