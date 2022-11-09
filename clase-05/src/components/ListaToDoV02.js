import ItemListaToDo from "./ItemListaToDo";

/*
    Los HOOKS son el estado interno de un componente. Es algo que el componente maneja internamente.
    Las PROPS son el estado externo del componente. Es un valor que le pasa el componente padre a un hijo.
*/

function ComponenteToDo02() {
    return(
        <div>
            <h3>Lista de tareas pendientes</h3>
            <ul>
                <ItemListaToDo
                    textoToDo={'Comprar carne'}
                />
                <ItemListaToDo 
                    textoToDo={'Sacar turno con el dentista'}
                />
                <ItemListaToDo 
                    textoToDo={'Buscar nuevo departamento'}
                />
            </ul>
        </div>
    );
}

export default ComponenteToDo02;