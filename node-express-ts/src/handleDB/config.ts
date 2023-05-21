import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config()
import model from "../models/DB"


async function getAllUser (table : string | undefined) {
        const conn = await model;
        const query = `SELECT * FROM ${table}`
        const [rows, fields] = await conn.execute(query) as any;
        return rows
}

async function createUser (table : string | undefined, data : any){
    const conn = await model;
    const listColumn = Object.keys(data).toString();
    const listValue = Object.values(data).map((e) => `'${e}'`).toString();
    const query = `INSERT INTO ${table}(${listColumn}) VALUES (${listValue});`
    await conn.execute(query);
}

async function getProfileUser (table : string | undefined, id: string){
    const conn = await model;
    const query = `SELECT * FROM ${table} WHERE userId = '${id}'`
    const [rows, fields] = await conn.execute(query) as any;
    return rows
}

async function updateUser(table : string | undefined, id: string, data: any){
    const conn = await model;
    const {userId, full_name, phone, address, age, sex} = data
    const query = ` UPDATE ${table}
    SET userId = '${userId}', full_name = '${full_name}', phone = '${phone}', address = '${address}', age = ${age}, sex = '${sex}'
    WHERE userId = '${id}'`
    await conn.execute(query);
}

async function deleteUser(table : string | undefined, id: string){
    const conn = await model;
    const query = `DELETE FROM ${table} WHERE userId = '${id}'`
    await conn.execute(query);
}

export default {
    getAllUser,
    createUser,
    getProfileUser,
    updateUser,
    deleteUser,
}