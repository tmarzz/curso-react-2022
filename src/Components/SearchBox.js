const estilos = {
    searchBoxWrapper: {
        padding: '50px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBox: {
        display: 'block',
        borderRadius: '30px',
        border: '1px solid black',
        color: 'rgba(0, 0, 0, 0.5)',
        padding: '30px',
        boxSizing: 'border-box',
        fontSize: '26px',
        width: '90%'
    },
}

function SearchBox() {
    return(
        <div
            style={estilos.searchBoxWrapper}
        >
            <input 
                type='text'
                placeholder='Tu búsqueda...'
                style={estilos.searchBox}
            />
        </div>
    );
}

export default SearchBox;