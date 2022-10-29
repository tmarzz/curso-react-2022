
const estilo = {
    backgroundColor: "red",
    color: "purple",
    fontSize: "80px",
}

function ComponenteTituloH1ConMuchosEstilos(){
    return (
        <div>
            <h1
                style={estilo}
            >
                Hola ¿Cómo estás?
            </h1>
        </div>
    );
}

export default ComponenteTituloH1ConMuchosEstilos;