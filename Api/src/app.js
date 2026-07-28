import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

// Aca realizo la importacion del ruteo
import router from './routers/index.js'

const app = express()

app.use(cors())           // Permite que React se conecte
app.use(morgan('dev'))    // Muestra: GET /products 200 en consola
app.use(express.json())  // Entiende los objetos JSON que enviamos

app.use('/api', router)    // Aca le digo que use el ruteo para las rutas que comiencen con /api


export default app