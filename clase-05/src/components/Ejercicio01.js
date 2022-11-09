// CREAR UN COMPONENTE LISTA DE TAREAS
/*
 realizar un componente que tenga un componente ul o ol 
 y adentro un elemento li para cada uno de los items

 -comprar carne
 -sacar turno con el dentista
 -buscar nuevo departamento
*/

function ComponenteToDo() {
    return(
        <div>
            <h3>Lista de tareas pendientes</h3>
            <ul>
                <li>Comprar carne</li>
                <li>Sacar turno con el dentista</li>
                <li>Buscar nuevo departamento</li>
            </ul>
        </div>
    );
}

export default ComponenteToDo;