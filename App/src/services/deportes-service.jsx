import api from "./index-api"

export async function obtenerDeportes() {
    const response = await api.get("/deportes")
    return response.data
}

