const estilos = {
    listItem: {
        display: 'block',
        boxSizing: 'border-box',
        padding: '30px',
        position: 'relative',
    },
    listItemImg: {
        display: 'block',
        width: '100%',
        height: '100%',
    },
    listItemBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        position: 'absolute',
        top: '100px',
        left: '70px',
        width: 'calc(100% - 140px)',
        height: 'calc(100% - 200px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listItemBoxSpan: {
        fontSize: '32px',
        fontWeight: 'bold',
    },
}

function ItemFromList(props) {
    return(
        <div
            style={estilos.listItem}
        >
            <img 
                src={props.imagen}
                style={estilos.listItemImg}
                alt=''
            />
            <div
                style={estilos.listItemBox}
            >
                <span
                    style={estilos.listItemBoxSpan}
                >
                    {props.texto}
                </span>
            </div>
        </div>
    );
}

export default ItemFromList;