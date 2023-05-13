"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectModel_1 = __importDefault(require("../models/connectModel"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//[GET] List of Users
async function index(req, res) {
    try {
        const conn = await connectModel_1.default;
        const [rows, fields] = await conn.execute(`SELECT * FROM ${process.env.TABLE_USERS}`);
        res.render('home', { rows });
    }
    catch (error) {
        res.status(400).json(error);
    }
}
// [POST] Form Create
function getFormCreateUser(req, res) {
    res.render('createUser');
}
async function createNewUser(req, res) {
    try {
        const { userId, full_name, phone, address, age, sex } = req.body;
        const conn = await connectModel_1.default;
        await conn.execute(`
            INSERT INTO ${process.env.TABLE_USERS}(userId, full_name, phone, address, age, sex)
            VALUES ('${userId}', '${full_name}', '${phone}', '${address}', ${age}, '${sex}');`);
        res.redirect('/user');
    }
    catch (error) {
        res.status(400).json(error);
    }
}
// [GET] profile User
async function profileUser(req, res) {
    try {
        const id = req.params.id;
        const conn = await connectModel_1.default;
        const [rows, fields] = await conn.execute(`SELECT * FROM ${process.env.TABLE_USERS} WHERE userId = '${id}'`);
        res.render('profile', { rows: rows[0] });
    }
    catch (error) {
        res.status(400).json(error);
    }
}
// [PUT] edit user
async function updateUser(req, res) {
    try {
        const id = req.params.id;
        const { userId, full_name, phone, address, age, sex } = req.body;
        const conn = await connectModel_1.default;
        await conn.execute(`
                            UPDATE ${process.env.TABLE_USERS}
                            SET userId = '${userId}', full_name = '${full_name}', phone = '${phone}', address = '${address}', age = ${age}, sex = '${sex}'
                            WHERE userId = '${id}'`);
        res.redirect('/user');
    }
    catch (error) {
        res.status(400).json(error);
    }
}
// [DELETE] delete user   
async function deleteUser(req, res) {
    try {
        const id = req.params.id;
        const conn = await connectModel_1.default;
        await conn.execute(`
                            DELETE FROM ${process.env.TABLE_USERS}
                            WHERE userId = '${id}'`);
        res.redirect('/user');
    }
    catch (error) {
        res.status(400).json(error);
    }
}
exports.default = {
    index,
    getFormCreateUser,
    createNewUser,
    profileUser,
    updateUser,
    deleteUser,
};
