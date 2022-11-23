import ComponenteCabecera from "../ComponenteCabecera";
import imgTarjetaPromocion01 from './../../../img/Widget_Multicontent_Latam_1152-x-849px.jpg';
import imgTarjetaPromocion02 from './../../../img/HBOMax_widgetmulti_mobdsk_mla_@3x.jpg';
import imgTarjetaPromocion03 from './../../../img/paramount_widgetmulti_mobdsk_mla_@3x.jpg';
import imgLogoStarPlus from './../../../img/comboplus-square@2x.jpg';
import imgLogoHBO from './../../../img/hbo-max-logo.png';
import imgLogoParamount from './../../../img/paramount-logo-vdp-56-x-56-filled@3x.png';
import ComponenteTarjetaPromocion from "../ComponenteTarjetaPromocion";
import { useState } from "react";
import './style.css'

const json = [
    {
        id: '1',
        imagen: imgTarjetaPromocion01,
        logo: imgLogoStarPlus,
        detalleLogo:'Logo HBO',
        descuento:'Sin cargo con el nivel 6',
        plataforma:'Disney+ y Star+'
    },
    {
        id: '2',
        imagen: imgTarjetaPromocion02,
        logo: imgLogoHBO,
        detalleLogo:'Logo HBO',
        promocion:'7 DÍAS GRATIS',
        descuento:'Hasta 50% OFF',
        plataforma:'HBO Max'
    },
    {
        id: '3',
        imagen: imgTarjetaPromocion03,
        logo: imgLogoParamount,
        detalleLogo: 'Logo HBO',
        promocion: '7 DÍAS GRATIS',
        descuento: 'Hasta 50% OFF',
        plataforma: 'Paramount+',
    }
]

function ContenedorTarjetas() {
    const [tarjeta, setTarjeta] = useState(json)

    return(
        <div
            className="contenedor"
        >
            <ComponenteCabecera />
            <div
                className="tarjetero"
            >
                {
                    tarjeta.map((item) => (
                        <ComponenteTarjetaPromocion 
                            key= {`TarjetaPromocion-${item.id}`}
                            imagen= {item.imagen}
                            logo= {item.logo}
                            detalle= {item.detalleLogo}
                            descuento= {item.descuento}
                            plataforma= {item.plataforma}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default ContenedorTarjetas;