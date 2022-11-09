import imagen from './../Img/ImagenKevingston01.png';

const estilos = {
    contenedor: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px'
    },
    imagen: {
        height: '250px',
        // paddingTop: '150px'
    },
    alerta: {
        backgroundColor: '#A00E1D',
        color: 'white',
        maxWidth: '60px',
        textAlign: 'center',
        marginBottom: '10px'
    },
    titulo: {
        fontSize: '1.5rem'
    },
    subtitulo: {
        color: '#D7D7D7',
        fontSize: '1rem'
    },
    precio: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    }
}

function ComponenteTarjetaDeUnaImagen() {
    return(
        <div style={estilos.contenedor}>
            <img 
                src={imagen} 
                alt='Imagen de camisa' 
                style={estilos.imagen}
            />
            <span
                style={estilos.alerta}
            >
                NUEVO!
            </span>
            <span
                style={estilos.titulo}
            >
                Camisa Friday II Slim Fit
            </span>
            <span
                style={estilos.subtitulo}
            >
                3 cuotas sin interes de $7.000
            </span>
            <span
                style={estilos.precio}
            >
                $21.000
            </span>
        </div>
    );
}

export default ComponenteTarjetaDeUnaImagen;