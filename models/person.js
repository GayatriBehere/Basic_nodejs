const mongoose=require('mongoose');
const personScema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
        
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },

    mobile:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true

    },
    salary:{
        type:Number
    }
})

const Person=mongoose.model('Person',personScema);

module.exports=Person;

