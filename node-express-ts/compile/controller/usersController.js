"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const service_1 = __importDefault(require("../service/service"));
dotenv_1.default.config();
//[GET] List of Users
async function index(req, res) {
    // try {
    //     const conn = await model;
    //     const [rows, fields] = await conn.execute(`SELECT * FROM ${process.env.TABLE_USERS}`) as any;
    //     res.render('home', {rows})
    // } catch (error) {
    //     res.status(400).json(error)
    // }
    service_1.default.getAllUser(res);
}
// [POST] Form Create
function getFormCreateUser(req, res) {
    res.render('createUser');
}
async function createNewUser(req, res) {
    // try {
    //     const {userId, full_name, phone, address, age, sex} = req.body
    //     const conn = await model;
    //     await conn.execute(`
    //     INSERT INTO ${process.env.TABLE_USERS}(userId, full_name, phone, address, age, sex)
    //     VALUES ('${userId}', '${full_name}', '${phone}', '${address}', ${age}, '${sex}');`) as any;
    //     res.redirect('/user')
    // } catch (error) {
    //     res.status(400).json(error)
    // }
    service_1.default.createUser(req.body, res);
}
// [GET] profile User
async function profileUser(req, res) {
    // try {
    //     const id = req.params.id
    //     const conn = await model;
    //     const [rows , fields] = await conn.execute(`SELECT * FROM ${process.env.TABLE_USERS} WHERE userId = '${id}'`) as any;
    //     res.render('profile', {rows : rows[0]})
    // } catch (error) {
    //     res.status(400).json(error)
    // }
    const id = req.params.id;
    service_1.default.getProfileUser(id, res);
}
// [PUT] edit user
async function updateUser(req, res) {
    // try {
    //     const id = req.params.id
    //     const {userId, full_name, phone, address, age, sex} = req.body
    //     const conn = await model;
    //     await conn.execute(`
    //                     UPDATE ${process.env.TABLE_USERS}
    //                     SET userId = '${userId}', full_name = '${full_name}', phone = '${phone}', address = '${address}', age = ${age}, sex = '${sex}'
    //                     WHERE userId = '${id}'`);
    //     res.redirect('/user')
    // } catch (error) {
    //     res.status(400).json(error)
    // }
    const id = req.params.id;
    service_1.default.updateUser(id, res, req.body);
}
// [DELETE] delete user   
async function deleteUser(req, res) {
    // try {
    //     const id = req.params.id
    //     const conn = await model;
    //     await conn.execute(`
    //                     DELETE FROM ${process.env.TABLE_USERS}
    //                     WHERE userId = '${id}'`);
    //     res.redirect('/user')
    // } catch (error) {
    //     res.status(400).json(error)
    // }
    const id = req.params.id;
    service_1.default.deleteUser(id, res);
}
exports.default = {
    index,
    getFormCreateUser,
    createNewUser,
    profileUser,
    updateUser,
    deleteUser,
};
