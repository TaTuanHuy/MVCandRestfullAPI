import configDB from "../configDB/config"
import {Request, Response, NextFunction} from "express"
import dotenv from "dotenv"
dotenv.config() 

const userTable = process.env.TABLE_USERS

async function getAllUser(res: Response){
    try {
        const rows = await configDB.getAllUser(userTable);   
        return res.render('home', {rows})
      } catch (error) {
        res.status(400).json(error)
      }
}

async function createUser(data: any, res: Response) {
    try{
        const rows = await configDB.createUser(userTable, data)
        res.redirect('/user')
    }catch(error) {
        res.status(400).json(error)
    }
}

async function getProfileUser (id: string, res: Response){
    try{
        const rows = await configDB.getProfileUser(userTable, id)
        res.render('profile', {rows : rows[0]})
    }catch(error) {
        res.status(400).json(error)
    }
}

async function updateUser (id: string, res: Response, data : any){
    try{
        await configDB.updateUser(userTable, id, data)
        res.redirect('/user')
    }catch(error) {
        res.status(400).json(error)
    }
}

async function deleteUser (id: string, res: Response){
    try{
        await configDB.deleteUser(userTable, id)
        res.redirect('/user')
    }catch(error) {
        res.status(400).json(error)
    }
}

export default {
    getAllUser,
    createUser,
    getProfileUser,
    updateUser,
    deleteUser,
}