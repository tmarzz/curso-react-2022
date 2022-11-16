/*
  Tarea
    Terminar de crear el componente Beneficios de Mercado Puntos de ML
    Replicar alguno de los componentes que están en su página web
*/

import './App.css';
import Cabecera from './components/componenteCabecera';
import ContenedorTarjetas from './components/componenteContenedorTarjetas';
// import ContenedorTarjetas from './components/componenteContenedorTarjetas';
// import imgTarjetaPromocion from './img/HBOMax_widgetmulti_mobdsk_mla_@3x.jpg';
// import imgLogoHBO from './img/hbo-max-logo.png';
// import ComponenteTarjetaPromocion from './components/componenteTarjetaPromoción';

function App() {
  return (
    <div>
      {/* <ComponenteTarjetaPromocion 
        imagen={imgTarjetaPromocion}
        logo={imgLogoHBO}
        detalleLogo='Logo HBO'
        promocion='7 DÍAS GRATIS'
        descuento='Hasta 50% OFF'
        plataforma='HBO Max'
      /> */}
      {/* <ContenedorTarjetas /> */}
      <Cabecera />
      <ContenedorTarjetas />
    </div>
  );
}

export default App;
