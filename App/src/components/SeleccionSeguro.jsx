function SeleccionSeguro({ seguroCotizaciones, seguroSeleccionadoPorElUsuarioProps }) {

    function cambiarSeleccionSeguro(evento) {
        const idSeleccionado = evento.target.value

        for(const seguro of seguroCotizaciones) {
            if(seguro.id === idSeleccionado) {
                seguroSeleccionadoPorElUsuarioProps(seguro)
                return
            }   
        }
    }
    

    return (
        <>
            <b>Seleccione la opción de seguro:</b>

            <select value={seguroCotizaciones.id} onChange={cambiarSeleccionSeguro}>
                {seguroCotizaciones.map((seguro) => (
                    <option key={seguro.id} value={seguro.id}>{seguro.tipo}</option>
                ))}
            </select>   
            
        </>
    )
}

export default SeleccionSeguro