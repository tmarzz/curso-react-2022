//  Se termina de armar el tarjetero en clase, no era tarea

import './App.css';
import Cabecera from './components/componenteCabecera';
import Carrousel from './components/componenteCarrousel';
import ContenedorTarjetas from './components/componenteContenedorTarjetas';
// import ContenedorTarjetas from './components/componenteContenedorTarjetas';
// import imgTarjetaPromocion from './img/HBOMax_widgetmulti_mobdsk_mla_@3x.jpg';
// import imgLogoHBO from './img/hbo-max-logo.png';
// import ComponenteTarjetaPromocion from './components/componenteTarjetaPromoción';

const estilos = {
  ejercicioClase7: {
    display: "flex", 
    alignItems : "center", 
    justifyContent : "center", 
    height : "100vh"

  }
}

function App() {
  return (
    <div
      style={estilos.ejercicioClase7}
    >
      {/* <ComponenteTarjetaPromocion 
        imagen={imgTarjetaPromocion}
        logo={imgLogoHBO}
        detalleLogo='Logo HBO'
        promocion='7 DÍAS GRATIS'
        descuento='Hasta 50% OFF'
        plataforma='HBO Max'
      /> */}
      {/* <ContenedorTarjetas /> */}
      {/* <Cabecera />
      <ContenedorTarjetas /> */}
      <Carrousel />
    </div>
  );
}

export default App;
