import { useState } from 'react';
import './style.css';

function TarjetaItem() {
    const [showDescuento, setDescuento] = useState(false);
    return(
        <div
            className='tarjetaItem'
            onMouseEnter={() => {setDescuento(true)}}
            onMouseLeave={() => {setDescuento(false)}}
        >
            <div
                className='tarjetaItem-fila'
            >
                <img 
                    className='tarjetaItem-imagen'
                    src='https://picsum.photos/224/224?random=1'
                    alt='Imagen producto'
                />
            </div>
            <div
                style={{
                    boxSizing: 'border-box',
                    padding: '20px 10px 20px 16px'
                }}
            >
                <div
                    className='tarjetaItem-fila'
                >
                    {
                        showDescuento ? 
                            <span
                                className='tarjetaItem-oculto tarjetaItem-promociones tarjetaItem-promociones_tachado tarjetaItem-promociones_colorGainsboro'
                            >
                                Antes: 1234345 pesos
                            </span>

                        :
                        ''
                    }

                    <h1
                        className='tarjetaItem-precio'
                        style={{
                            marginBottom: '5px',
                        }}
                    >
                        $142.999 
                        <span
                            className='tarjetaItem-promociones'
                        >
                            16% OFF
                        </span>
                    </h1>
                    <span
                        className='tarjetaItem-promociones'
                    >
                        12x $11.874 sin interes                
                    </span>
                    <span
                        className='tarjetaItem-promociones tarjetaItem-promociones_negrita'
                    >
                        Envio gratis                
                    </span>
                    <span
                        className='tarjetaItem-promociones tarjetaItem-promociones_colorGainsboro'
                    >
                        Samsung TV 64"
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TarjetaItem;