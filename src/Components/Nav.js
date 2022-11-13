const estilos = {
    navWrapper: {
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav: {
        boxSizing: 'border-box',
        padding: '20px',
        borderBottom: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '190px',
    },
    logo: {
        fontSize: '32px',
        padding: '20px',
        boxSizing: 'border-box'
    },
    cartButton: {
        display: 'block',
        color: 'black',
        textDecoration: 'none',
        borderRadius: '30px',
        border: '1px solid black',
        boxSizing: 'border-box',
        padding: '10px',
        width: '100px',
    },
}

function Nav(){
    return(
        <div
            style={estilos.nav}
        >
            <div
                style={estilos.navWrapper}
            >
                <h1
                    style={estilos.logo}
                >
                    MioMio
                </h1>
                <button
                    style={estilos.cartButton}
                >
                    carrito
                </button>
            </div>

        </div>
    );
}

export default Nav;