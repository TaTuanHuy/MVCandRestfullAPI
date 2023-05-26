"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../handleDB/config"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userTable = process.env.TABLE_USERS;
async function getAllUser(res) {
    try {
        const rows = await config_1.default.getAllUser(userTable);
        return res.status(200).render('home', { rows });
    }
    catch (error) {
        res.status(400).json(error);
    }
}
async function createUser(data, res) {
    try {
        const rows = await config_1.default.createUser(userTable, data);
        res.status(201).redirect('/user');
    }
    catch (error) {
        res.status(400).json(error);
    }
}
async function getProfileUser(id, res) {
    try {
        const rows = await config_1.default.getProfileUser(userTable, id);
        res.render('profile', { rows: rows[0] });
    }
    catch (error) {
        res.status(400).json(error);
    }
}
async function updateUser(id, res, data) {
    try {
        await config_1.default.updateUser(userTable, id, data);
        res.status(201).redirect('/user');
    }
    catch (error) {
        res.status(400).json(error);
    }
}
async function deleteUser(id, res) {
    try {
        await config_1.default.deleteUser(userTable, id);
        res.status(200).redirect('/user');
    }
    catch (error) {
        res.status(400).json(error);
    }
}
exports.default = {
    getAllUser,
    createUser,
    getProfileUser,
    updateUser,
    deleteUser,
};
