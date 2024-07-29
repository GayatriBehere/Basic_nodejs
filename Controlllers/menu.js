const menu=require('./../models/MenuItem')

const postData=async(req,res)=>{
    try{
      const data=req.body
    const newmenu=new menu(data);
    const response= await newmenu.save();
    console.log('data saved');
    res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'inernal server error'});
  
    }
  }

  const getData=async(req,res)=>{
    try{
        const data=await menu.find();
        console.log('data fetch');
    res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'inernal server error'});
  
    }
  
  }
  module.exports={postData,getData}