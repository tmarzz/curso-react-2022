import ItemTarjeta from "../../Components/ItemTarjeta";

function MainView() {
    return(
        <div>
            <ItemTarjeta 
                titulo='Titulo de la tarea'
                detalle='Lorem ipsum, dolor sit amet 
                consectetur adipisicing elit. 
                Repudiandae, perspiciatis esse 
                optio asperiores commodi quidem 
                rerum tempora minus consequatur 
                quibusdam animi magni cumque 
                qui, ipsa id doloremque, illo 
                nemo similique!'
            />
        </div>
    );
}

export default MainView;