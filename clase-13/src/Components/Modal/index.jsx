import './style.css';

function Modal({show, setShow, children}) {
    const estilos = {
        display: show ? 'grid' : ' none'
    }

    return(
        <div
            className="modal-contenedor"
            style={estilos}
        >
            <div
                className="modal-paper"
            >
                {children}
                <button
                    onClick={() => {setShow(false)}}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}

export default Modal;