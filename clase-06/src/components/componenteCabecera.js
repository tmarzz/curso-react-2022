import BarraBusqueda from "./componenteBarraBusqueda";
import BarraEnlaces from "./componenteBarraEnlaces";

const estilos = {
    cabecera: {
        backgroundColor: '#FFF159',

    }
}

function Cabecera() {
    return(
        <div
            style={estilos.cabecera}
        >
            <div                
                    // Este va a ser el primer contenedor para dividir toda la cabecera en tres columnas 
                    // (logo) (busqueda/enlaces) (cuenta)                
               style={{
                    paddingTop: '0.5rem',
                    paddingBottom: '0.75rem',
                    // display: 'flex',
                    // alignItems: 'center'
               }}
            >
                <BarraBusqueda />  
                <BarraEnlaces />
            </div>         
        </div>
    );
}

export default Cabecera;