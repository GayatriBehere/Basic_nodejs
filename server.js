const express = require('express')
const app = express();

const db=require('./db')

const PORT=process.env.PORT||3000;

const personRoutes=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes.js')
const MenuITem=require('./models/MenuItem.js');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
app.use('/person',personRoutes)

app.use('/menu',menuRoutes)

app.listen(PORT,()=>{
    console.log("yess")
})