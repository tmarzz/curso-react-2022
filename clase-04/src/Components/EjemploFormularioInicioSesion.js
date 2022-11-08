import ComponenteLineaHorizontal from "./EjemploFormularioComponenteLineaHorizontal";
import InputNombre from "./EjemploFormularioInputNombre";
import InputPassword from "./EjemploFormularioInputPassword";

const estilos = {
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
    width: '300px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0px 0px 15px -5px rgba(0,0,0,0.59)'
}

function FormularioInicioSesion() {
return(
    <div style={estilos}>
        <InputNombre />
        <InputPassword />
        <ComponenteLineaHorizontal />
    </div>
);
}

export default FormularioInicioSesion;