
const estilos = {
    estiloRojo: {
        color: 'red'
    },
    estiloVerde: {
        textDecoration: '1px solid green'
    },
    estiloAmarillo: {
        backgroundColor: 'yellow'
    }
}

function Componente() {
    return (
        <div>
            <p style={estilos.estiloRojo}>1</p>
            <p style={estilos.estiloVerde}>1</p>
            <p style={estilos.estiloAmarillo}>1</p>
        </div>
    );
}

export default Componente;