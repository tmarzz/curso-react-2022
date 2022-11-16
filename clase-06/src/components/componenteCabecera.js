import BarraBusqueda from "./componenteBarraBusqueda";
import BarraEnlaces from "./componenteBarraEnlaces";

const estilos = {
    cabecera: {
        backgroundColor: '#FFF159',
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }
}

function Cabecera() {
    return(
        <div
            style={estilos.cabecera}
        >
            <div
                style={{
                    width: '20rem'
                }}
            >
                <p style={{paddingLeft: '10rem'}}>Mercado libre</p>
            </div>
            <div                
                    // Este va a ser el primer contenedor para dividir toda la cabecera en tres columnas 
                    // (logo) (busqueda/enlaces) (cuenta)                
                style={{
                    paddingTop: '0.5rem',
                    paddingBottom: '0.75rem',
                }}
            >
                <BarraBusqueda />  
                <BarraEnlaces />
            </div>  
            <div
                style={{
                    width: '20rem',
                }}
            >
                <p style={{paddingLeft: '5rem'}}>Cuenta</p>
            </div>       
        </div>
    );
}

export default Cabecera;