import express from 'express'
import router from './router'
import './config/db'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './config/swagger'

// Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default server