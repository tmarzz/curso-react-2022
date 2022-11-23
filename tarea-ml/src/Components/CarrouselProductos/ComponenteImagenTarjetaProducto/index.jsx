import './style.css';

function ImagenTarjetaProducto(props) {
    return(
        <img
            className='imagenTarjetaProducto'
            // src={props.imagen} 
            src='https://picsum.photos/200/300?random=1'
            alt={props.nombre}
        />
    );
}

export default ImagenTarjetaProducto;