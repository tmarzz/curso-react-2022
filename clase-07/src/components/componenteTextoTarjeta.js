function ComponenteTextoTarjeta(props){
    const estilos = {
        contenedor: {
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '5rem',
            paddingLeft: '1rem'
        },
        pretitulo: {
            margin: '0rem',
            marginBottom: '0.2rem',
            fontSize: '0.5rem',
            fontWeight: 'bold'
        },
        titulo: {
            margin: '0rem',
            marginBottom: '0.2rem',
            fontSize: '1rem',
            fontWeight: 'bold'
        },
        subtitulo: {
            margin: '0rem',
            marginBottom: '0.2rem',
            fontSize: '0.85rem',
            fontWeight: '300'
        }
    }

    return(
        <div
            style={estilos.contenedor}
        >
            <span 
                style={estilos.pretitulo}
            >
                {props.promocion === null ? '' : props.promocion}
            </span>
            <h1 
                style={estilos.titulo}
            >
                {props.descuento}
            </h1>
            <h2 
                style={estilos.subtitulo}
            >
                {props.plataforma}
            </h2>
        </div>
    );
}

export default ComponenteTextoTarjeta;