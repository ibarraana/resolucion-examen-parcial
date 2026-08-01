
function ListadoDeportes({ deportesLista, funcionSeleccionarDeporte }) {
    return (
        <div>
            <h2>Listado de los deportes</h2>
                                
                {deportesLista.map((deporte) => (    
                    <ul key={deporte.id}>                
                        <li>{deporte.nombre}</li>
                        <li>{deporte.profesor}</li>
                        <li>{deporte.precioMensual}</li> 
                        <li>{deporte.categoria}</li> 
                        <li><button onClick={() => funcionSeleccionarDeporte(deporte)}>Seleccionar</button></li>  
                    </ul>                
                ))}                
        </div>
    )
}

export default ListadoDeportes
