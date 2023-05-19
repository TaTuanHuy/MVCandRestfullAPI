import model from "../models/DB";
import { Request, Response , NextFunction} from "express";
import dotenv from 'dotenv';
dotenv.config()

    async function checkUser(req: Request, res: Response, next: NextFunction) {
        try {
            const {userId, full_name, phone, address, age, sex} = req.body
            const conn = await model;
            const [rows, fields] = await conn.execute(`SELECT * FROM ${process.env.TABLE_USERS} WHERE userId = '${userId}'`) as any;
            if(rows.length > 0){
                res.render('error', {
                    title:'Thông Báo',
                    header : 'Bạn đã nhập trùng mã người dùng',
                    message: 'Vui lòng sử dụng mã người dùng khác',
                    urlRedirect : 'http://localhost:8000/user/create'
                                                                 
            })
            }else{
                next()
            }
        } catch (error) {
            res.status(400).json(error)
        }
    }

    export default {
        checkUser
    }