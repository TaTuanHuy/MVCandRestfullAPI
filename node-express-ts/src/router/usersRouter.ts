import express from 'express';
import mysql from 'mysql2/promise';
const router = express.Router()
import userController from '../controller/usersController';
import middleware from '../middleware/createUser'

router.get('/create', userController.getFormCreateUser)

router.get('/profile/:id', userController.profileUser)

router.delete('/:id', userController.deleteUser)

router.put('/:id', userController.updateUser)

router.post('/', middleware.checkUser, userController.createNewUser)

router.get('/', userController.index)

export default router
