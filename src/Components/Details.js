import Nav from './Nav';
import fotoModelo from './../Img/Anteojos/ali-pazani-GwglcplmXDs-unsplash.jpg';

const estilos = {
    backButton: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px',
            boxSizing: 'border-box',
        },
        backButtonDos: {
            color: 'rgb(106, 102, 102)',
            backgroundColor: 'white',
            fontWeight: '500',
            fontSize: '26px',
            textDecoration: 'none',
            border: 'none',
    },
    imageWrapper: {
        display: 'block',
        boxSizing: 'border-box',
        padding: '30px',
        position: 'relative',
    },        
    imageInsideWrapper: {
        display: 'block',
        width: '100%',
        height: '100%',
    }
}

function BackButton() {
    return(
        <div
            style={estilos.backButton}
        >
            <button
                style={estilos.backButtonDos}
            >
                Volver
            </button>            
        </div>
    );
}

function Imagen(props) {
    return(
        <div
            style={estilos.imageWrapper}
        >
            <img 
                style={estilos.imageInsideWrapper}
                src={props.imagen}
                alt=''
            />
        </div>
    );
}

function Details() {
    return(
        <div>
            <Nav />
            <BackButton />
            <Imagen 
                imagen={fotoModelo}
            />
        </div>
    );
}

export default Details;