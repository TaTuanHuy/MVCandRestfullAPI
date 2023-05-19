import model from "../models/DB";
import { Request, Response } from "express";
import dotenv from 'dotenv';
import service from '../service/service'
dotenv.config()
    
    //[GET] List of Users
    async function index(req: Request, res: Response) {
        // try {
        //     const conn = await model;
        //     const [rows, fields] = await conn.execute(`SELECT * FROM ${process.env.TABLE_USERS}`) as any;
        //     res.render('home', {rows})
        // } catch (error) {
        //     res.status(400).json(error)
        // }
        service.getAllUser(res)
    }

    // [POST] Form Create
    function getFormCreateUser (req: Request, res: Response){
        res.render('createUser')
    }

    async function createNewUser(req: Request, res: Response){
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
        service.createUser(req.body, res)
    }

    // [GET] profile User
    async function profileUser(req: Request, res: Response){
        // try {
        //     const id = req.params.id
        //     const conn = await model;
        //     const [rows , fields] = await conn.execute(`SELECT * FROM ${process.env.TABLE_USERS} WHERE userId = '${id}'`) as any;
        //     res.render('profile', {rows : rows[0]})
        // } catch (error) {
        //     res.status(400).json(error)
        // }
        const id = req.params.id
        service.getProfileUser(id, res)
    }
    
    // [PUT] edit user
    async function updateUser(req: Request, res: Response){
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
        const id = req.params.id
        service.updateUser(id, res, req.body)
    }
    
    // [DELETE] delete user   
    async function deleteUser(req: Request, res: Response){
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
        const id = req.params.id
        service.deleteUser(id, res)
    }



export default {
    index,
    getFormCreateUser,
    createNewUser,
    profileUser,
    updateUser,
    deleteUser,
}

