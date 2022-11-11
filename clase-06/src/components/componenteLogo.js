const estilo = {
    // height: '80px',
    // width: '80px',
    height: '5rem',
    width: '5rem',
    borderRadius: '10px'
}

function ComponenteLogo(props) {
    return(
        <img 
            // src="https://picsum.photos/80/80"
            src={props.logo}
            style={estilo}
            alt={props.detalle}
        />
    );
}

export default ComponenteLogo;