import ComponenteLogo from "../ComponenteLogo";
import ComponenteTextoTarjeta from "../ComponenteTextoTarjeta";
import './style.css';

function ComponenteTarjetaPromocion(props){

    return(
        <div  
            style={{
                backgroundImage: `url(${props.imagen})`
            }}
            className='contenedor01'
        >
            <div
                className='contenedor02'
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