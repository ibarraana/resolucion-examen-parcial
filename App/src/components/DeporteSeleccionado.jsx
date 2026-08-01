import { useState } from "react"
import SeleccionSeguro from "./SeleccionSeguro"
import PrecioFinal from "./PrecioFinal"


function DeporteSeleccionado({ deporteSeleccionadoUsuarioProps, opcionesSegurosSeleccionar}) {

    
    const[seguroSeleccionadoValor, setSeguroSeleccionadoValor] = useState(opcionesSegurosSeleccionar[0])

    const seguroSeleccionadoPorElUsuarioS = (seguro) => {
        setSeguroSeleccionadoValor(seguro)
    }

    if(!deporteSeleccionadoUsuarioProps)
    {
        return <p>No se a seleccionado el deporte!</p>
    }

    const precioMensual = Number(deporteSeleccionadoUsuarioProps.precioMensual)

    const incremento = Number(seguroSeleccionadoValor.incremento)

    const precioFinal = precioMensual + (precioMensual * incremento / 100)

    return (
        <>
        <h2>Resumen de Inscripción</h2>
        
        <ul key={deporteSeleccionadoUsuarioProps.id}>            
            <li>Nombre del deporte: {deporteSeleccionadoUsuarioProps.nombre}</li>
            <li>Profesor del deporte: {deporteSeleccionadoUsuarioProps.profesor}</li>
            <li>Precio mensual del deporte: {deporteSeleccionadoUsuarioProps.precioMensual}</li>
            <li>Categoria del deporte: {deporteSeleccionadoUsuarioProps.categoria}</li>
        </ul>

        <SeleccionSeguro seguroCotizaciones={opcionesSegurosSeleccionar} seguroSeleccionadoPorElUsuarioProps={seguroSeleccionadoPorElUsuarioS}/>

        <br />

        <br />

        <PrecioFinal precioFinalProp={precioFinal}/>

        <br /><br />

        <button>Confirmar</button> 
        
        </>          
        
    )
}

export default DeporteSeleccionado