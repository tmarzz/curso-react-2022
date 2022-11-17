//  TERMINAR DE AJUSTAR LOS ESTILOS. CABECERA ESTÁ EN EL MEDIO Y VA A LA IZQUIERDA

import imgTarjetaPromocion01 from './../img/Widget_Multicontent_Latam_1152-x-849px.jpg';
import imgTarjetaPromocion02 from './../img/HBOMax_widgetmulti_mobdsk_mla_@3x.jpg';
import imgTarjetaPromocion03 from './../img/paramount_widgetmulti_mobdsk_mla_@3x.jpg';
import imgLogoHBO from './../img/hbo-max-logo.png';
import imgLogoStarPlus from './../img/comboplus-square@2x.jpg';
import imgLogoParamount from './../img/paramount-logo-vdp-56-x-56-filled@3x.png';
import ComponenteTarjetaPromocion from './componenteTarjetaPromocion';

function ContenedorTarjetas() {
    const estilos = {
        contenedor: {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ebebeb',
            width: '100%',
            alignItems: 'center',
            paddingTop: '2rem',
            paddingBottom: '2rem',
        },
        cabecera: {
            display: 'flex',
            alignItems: 'center',
            paddingRight: '43rem'

        },
        tarjetero: {
            display: 'flex',
            flexDirection: 'row',
            paddingRight: '0.2rem'
        },
        titulo: {
            color: '#6b6967',
            fontWeight: '300'
        },
        enlace: {
            textDecoration: 'none',
            // color: '97,147,249',
            paddingTop: '0.8rem',
            paddingLeft: '1rem',
            fontSize: '0.9rem'
        },
    }

    return(
        <div
            style={estilos.contenedor}
        >
            <div
                style={estilos.cabecera}
            >
                <h1
                    style={estilos.titulo}
                >
                    Beneficios de Mercado Puntos
                </h1>
                <a  
                    href='https://www.mercadolibre.com.ar/mercado-puntos#origin=benefits-home'
                    style={estilos.enlace}
                >
                    Ver todos los beneficios
                </a>
            </div>
            <div
                style={estilos.tarjetero}
            >

                <ComponenteTarjetaPromocion
                    imagen={imgTarjetaPromocion01}
                    logo={imgLogoStarPlus}
                    detalleLogo='Logo HBO'
                    descuento='Sin cargo con el nivel 6'
                    plataforma='Disney+ y Star+'
                />
                <ComponenteTarjetaPromocion 
                    imagen={imgTarjetaPromocion02}
                    logo={imgLogoHBO}
                    detalleLogo='Logo HBO'
                    promocion='7 DÍAS GRATIS'
                    descuento='Hasta 50% OFF'
                    plataforma='HBO Max'
                />
                <ComponenteTarjetaPromocion 
                    imagen={imgTarjetaPromocion03}
                    logo={imgLogoParamount}
                    detalleLogo='Logo HBO'
                    promocion='7 DÍAS GRATIS'
                    descuento='Hasta 50% OFF'
                    plataforma='Paramount+'
                />
            </div>
        </div>
    );
}

export default ContenedorTarjetas;