const express = require('express')
const router=express.Router();
const { postData, getData } = require('./../Controlllers/menu');


router.post('/',postData)  
router.get('/',getData)


  module.exports=router;