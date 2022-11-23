import './style.css';

function ComponenteCabecera() {
    return(
        <div
            className='cabecera'
        >
            <h1
                className='titulo'
            >
                Beneficios de Mercado Puntos
            </h1>
            <a  
                href='https://www.mercadolibre.com.ar/mercado-puntos#origin=benefits-home'
                className='enlace'
            >
                Ver todos los beneficios
            </a>
        </div> 
    );
}

export default ComponenteCabecera;
