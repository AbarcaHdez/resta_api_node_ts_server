import colors from 'colors'
import server from './server'
import { connectDB } from './config/db'

connectDB()

const port = process.env.PORT || 5000
server.listen(port, () => {
    console.log(colors.cyan.bold(`Rest api en el puerto ${port}`))
})