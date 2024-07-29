
const express = require('express')
const router=express.Router();
const { postData, getData ,getByName,updatePerson} = require('./../Controlllers/person');


router.post('/',postData)
  
  
router.get('/',getData)

router.get('/:name',getByName)

router.put('/:name', updatePerson);


module.exports=router;