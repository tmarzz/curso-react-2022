import './style.css';

function ComponenteTextoTarjeta(props){

    return(
        <div
            className='contenedor03'
        >
            <span 
                className='pretitulo'
            >
                {props.promocion === null ? '' : props.promocion}
            </span>
            <h1 
                className='titulo01'
            >
                {props.descuento}
            </h1>
            <h2 
                className='subtitulo'
            >
                {props.plataforma}
            </h2>
        </div>
    );
}

export default ComponenteTextoTarjeta;