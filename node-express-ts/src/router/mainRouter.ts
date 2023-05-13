import userRouter from './usersRouter'

function router (app : any){
    app.use('/user', userRouter)
}

export default router