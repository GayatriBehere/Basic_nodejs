const express = require('express')
const app = express();
const db=require('./db')
const personRoutes=require('./routes/personRoutes')
const menuRoutes=require('./routes/menuRoutes.js')
const MenuITem=require('./models/MenuItem.js');
const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.use('/person',personRoutes)

app.use('/menu',menuRoutes)

app.listen(3000,()=>{
    console.log("yess")
})