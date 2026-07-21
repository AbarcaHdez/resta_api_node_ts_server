import { Sequelize } from "sequelize-typescript";
import colors from 'colors'
import dotenv from 'dotenv'
import Product from '../models/Product.model'
dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL!,{
    models: [Product],
    logging: false
})

export async function connectDB() {
    try {
        await db.authenticate()
        //console.log(colors.blue("Conexion exitosa a la BD"))
    } catch(error) {
        console.log(error)
        console.log(colors.red.bold("Hubo un error al conectarse a la BD"))
    }
}

export default db