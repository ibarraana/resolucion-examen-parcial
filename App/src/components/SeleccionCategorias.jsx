
function SeleccionCategorias({listadoCategorias, funcionSeleccionCategoria}) {
    return (
        <>
            <h2>Seleccione la categoria para ver el listado de deportes</h2>

            <br />

            {listadoCategorias.map((categoria) => (
                <button key={categoria} onClick={() => funcionSeleccionCategoria(categoria) }>{categoria}</button>
            ))}

        </>
    )
}

export default SeleccionCategorias