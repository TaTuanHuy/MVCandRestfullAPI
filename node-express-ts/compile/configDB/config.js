"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DB_1 = __importDefault(require("../models/DB"));
async function getAllUser(table) {
    const conn = await DB_1.default;
    const query = `SELECT * FROM ${table}`;
    const [rows, fields] = await conn.execute(query);
    return rows;
}
async function createUser(table, data) {
    const conn = await DB_1.default;
    const listColumn = Object.keys(data).toString();
    const listValue = Object.values(data).map((e) => `'${e}'`).toString();
    const query = `INSERT INTO ${table}(${listColumn}) VALUES (${listValue});`;
    await conn.execute(query);
}
async function getProfileUser(table, id) {
    const conn = await DB_1.default;
    const query = `SELECT * FROM ${table} WHERE userId = '${id}'`;
    const [rows, fields] = await conn.execute(query);
    return rows;
}
async function updateUser(table, id, data) {
    const conn = await DB_1.default;
    const { userId, full_name, phone, address, age, sex } = data;
    const query = ` UPDATE ${table}
    SET userId = '${userId}', full_name = '${full_name}', phone = '${phone}', address = '${address}', age = ${age}, sex = '${sex}'
    WHERE userId = '${id}'`;
    await conn.execute(query);
}
async function deleteUser(table, id) {
    const conn = await DB_1.default;
    const query = `DELETE FROM ${table} WHERE userId = '${id}'`;
    await conn.execute(query);
}
exports.default = {
    getAllUser,
    createUser,
    getProfileUser,
    updateUser,
    deleteUser,
};
