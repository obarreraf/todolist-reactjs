import React from "react";

const estilos = {
    color: 'red',
    backgroundColor: 'yellow'
}
function TodoCounter(){
    return (
        <h2 style={estilos}>Haz Completado 2 de 3 ToDos</h2>
    )
}

export {TodoCounter};