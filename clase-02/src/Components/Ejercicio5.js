const estiloH1 = {
    fontSize: '80px',
    weight: 'bold',
}

const estiloP1 = {
    fontSize: '40px'
}

const estiloP2 = {
    fontSize: '20px',
    color: 'grey'
}

const Ejercicio5 = () => {
    return (
        <div>
            <h1 style={estiloH1}>
                Cuatro zapatos con motor electrico para correr más rápido
            </h1>
            <p style={estiloP1}>
                La tecnología siempre busca dar comodidad a acciones diarias y en todo el mundo se han creado
            </p>
            <p style={estiloP2}>
                28 de Octubre de 2022
            </p>
        </div>
    );
}

export default Ejercicio5;