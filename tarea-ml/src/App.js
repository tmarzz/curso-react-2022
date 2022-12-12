import TarjetaProducto from "./Components/CarrouselProductos/ComponenteTarjetaProducto";
import ContenedorTarjetas from "./Components/TarjetaPromocion/ComponenteContenedorTarjetas";


function App() {
  return (
    <div
      style={{backgroundColor: '#ebebeb'}}
    >
      {/* <ComponenteTarjetaPromocion         
        logo={logoHBO}
        detalle='Logo HBO'
        promocion='7 DÍAS GRATIS'
        descuento='Hasta 50% OFF'
        plataforma='Paramount+'
      /> */}
      <TarjetaProducto />
      {/* <ContenedorTarjetas /> */}
    </div>
  );
}

export default App;
