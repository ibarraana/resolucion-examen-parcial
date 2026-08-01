
function PrecioFinal({ precioFinalProp }) {

    return(
        <>
            <b>El precio final te quedaria de tal forma: </b>
            <span>{precioFinalProp.toFixed(2)}</span>
        </>
    )

}

export default PrecioFinal