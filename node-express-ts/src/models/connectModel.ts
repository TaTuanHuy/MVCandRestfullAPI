import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER1,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_USER
})

export default connection
    