const estilos = {
    contenedor: {},
    enlaces: {
        textDecoration: 'none',
        color: '#857F43'
    }
}

function BarraEnlaces() {
    return(
        <div
            style={{
                paddingTop: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                paddingRight: '15rem',
                color: '#CDBA4C',
                width: '80%',
            }}
        >
            <a
                href='https://www.mercadolibre.com.ar/categorias#nav-header'
                style={estilos.enlaces}
            >
                Categorías
            </a>
            <a
                href='https://www.mercadolibre.com.ar/ofertas#nav-header'
                style={estilos.enlaces}
            >
                Ofertas
            </a>
            <a
                href='https://www.mercadolibre.com.ar/gz/home/navigation#nav-header'
                style={estilos.enlaces}
            >
                Historial
            </a>
            <a
                href='https://www.mercadolibre.com.ar/ofertas/supermercadolibre#nav-header'                
                style={estilos.enlaces}
            >
                Supermercado
            </a>
            <a
                href='https://www.mercadolibre.com.ar/c/ropa-y-accesorios#nav-header'
                style={estilos.enlaces}
            >
                Moda
            </a>
            <a
                href='https://www.mercadolibre.com.ar/publicar#nav-header'
                style={estilos.enlaces}
            >
                Vender
            </a>
            <a
                href='https://www.mercadolibre.com.ar/ayuda#nav-header'
                style={estilos.enlaces}
            >
                Ayuda
            </a>
        </div> 
    );
}

export default BarraEnlaces;