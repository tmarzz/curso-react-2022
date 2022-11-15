const estilos= {
    contenedorBusqueda: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        boxShadow: '0px 1px 1px rgba(0,0,0,0.2)',
        // paddingTop: '1rem',
    },
    barraBusqueda: {
        width: '100%',
        height: '2rem',
        border: 'none',
    },
    boton: {
        height: '2.1rem',
        width: '2.5rem',
        border: 'none',
        backgroundColor: 'white'
    },
    lineaVertical: {
        borderLeft: 'thin solid #ECECEC',
        height: '1.5rem'
    }
}

function BarraBusqueda(){
    return(
            <div
                style={estilos.contenedorBusqueda}
            >
                <input 
                        style={estilos.barraBusqueda}
                        type='text'
                        placeholder='Buscar productos, marcas y más'
                />
                <div 
                    style={estilos.lineaVertical} 
                />
                <button 
                    style={estilos.boton}
                    type='submit'
                >
                    ?    
                </button>
            </div>
    );
}

export default BarraBusqueda;