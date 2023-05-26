"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = __importDefault(require("../models/DB"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function checkUser(req, res, next) {
    try {
        const { userId, full_name, phone, address, age, sex } = req.body;
        const conn = await DB_1.default;
        const [rows, fields] = await conn.execute(`SELECT * FROM ${process.env.TABLE_USERS} WHERE userId = '${userId}'`);
        if (rows.length > 0) {
            res.render('error', {
                title: 'Thông Báo',
                header: 'Bạn đã nhập trùng mã người dùng',
                message: 'Vui lòng sử dụng mã người dùng khác',
                urlRedirect: 'http://localhost:8000/user/create'
            });
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
}
exports.default = {
    checkUser
};
