import express from 'express'
import {Request, Response} from 'express'
import router from './router/mainRouter' ;
import path, { extname } from 'path';
import { engine } from 'express-handlebars';
const methodOverride = require('method-override')


const app = express()
const port = 8000
//sử dụng middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(methodOverride('_method'))

//Template Engine
app.engine('hbs', engine({
  extname : '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../src/view'));
 
router(app)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})