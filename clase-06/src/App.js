/*
  Tarea
    Terminar de crear el componente Beneficios de Mercado Puntos de ML
    Replicar alguno de los componentes que están en su página web
*/

import './App.css';
import imgTarjetaPromocion from './img/HBOMax_widgetmulti_mobdsk_mla_@3x.jpg';
import ComponenteTarjetaPromocion from './components/componenteTarjetaPromoción';

function App() {
  return (
    <div>
      <ComponenteTarjetaPromocion 
        imagen={imgTarjetaPromocion}
      />
    </div>
  );
}

export default App;
