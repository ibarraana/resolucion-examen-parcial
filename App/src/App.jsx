import { useState, useEffect } from "react"
import { obtenerDeportes } from "./services/deportes-service"
import ListadoDeportes from "./components/ListadoDeportes"
import SeleccionCategorias from "./components/SeleccionCategorias"
import DeporteSeleccionado from "./components/DeporteSeleccionado"

function App() {

  const [deportes, setDeportes] = useState([])
  const [errorDatos, setErrorDatos] = useState("")
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")
  const [deporteSeleccionado, setDeporteSeleccionado] = useState(null)
  const listaCategorias = ["Niños",  "Jóvenes", "Adultos"] 
  
  useEffect(() => {
    cargarDeportes()
  }, [])

  const seleccionCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria)
    setDeporteSeleccionado(null)
  }

  const cargarDeportes = async() => {
    try {
      const datosDeportes = await obtenerDeportes()
      setDeportes(datosDeportes)
    } catch(error) {
      setErrorDatos("No se puede obtener los datos de Deportes")
    } 
  }

  function filtrarPorCategoria(deporte) {
    return deporte.categoria === categoriaSeleccionada
  }

  let deporteFiltro = deportes

  if(categoriaSeleccionada !== "") {
    deporteFiltro = deportes.filter(filtrarPorCategoria)
  }

  const deporteSeleccionadoUsuario = (deporte) => {
    setDeporteSeleccionado(deporte)
  }

  const opcionesSeguro = [
    { id: "s1", tipo: "Cobertura Base (Municipal)", incremento: 0 }, 
    { id: "s2", tipo: "Cobertura Intermedia (Provincial)", incremento: 15 },  
    { id: "s3", tipo: "Cobertura Alta Competencia (Nacional)", incremento: 30 } 
  ] 

    
  return (
    <>
      <h1>Primer examen parcial - Ana Gabriela Ibarra</h1>

      <SeleccionCategorias listadoCategorias={ listaCategorias } funcionSeleccionCategoria = { seleccionCategoria }/>

      {categoriaSeleccionada && <p>La categoria seleccionada fue: <b><em>{ categoriaSeleccionada }</em></b></p>}
      
      <ListadoDeportes deportesLista = { deporteFiltro } funcionSeleccionarDeporte = {deporteSeleccionadoUsuario} />

      <DeporteSeleccionado deporteSeleccionadoUsuarioProps= {deporteSeleccionado} opcionesSegurosSeleccionar={opcionesSeguro}  />

      
    </>
  )
}

export default App
