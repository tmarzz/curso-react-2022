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
