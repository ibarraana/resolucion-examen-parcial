/*
1. Modelo de Datos Único: Deporte (tabla deportes) 
Crea el siguiente modelo independiente con sus respectivos campos (define los tipos de  datos y configuraciones que consideres más adecuados): 
• id 
• nombre 
• profesor 
• precioMensual 
• categoria (donde se guardarán los valores: "Niños", "Jóvenes" o "Adultos") 
*/

import { DataTypes } from "sequelize"
import { sequelize } from "../config/database.js"

const Deporte = sequelize.define("Deporte", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profesor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precioMensual: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    categoria: {
        type: DataTypes.ENUM("Niños", "Jóvenes", "Adultos"),
        allowNull: false
    }
})

export default Deporte

