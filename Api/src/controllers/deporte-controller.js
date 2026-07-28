import { Deporte } from "../models/index.js"

export const getDeportes = async (req, res) => {
  try {
    const deportes = await Deporte.findAll()
    res.json(deportes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

