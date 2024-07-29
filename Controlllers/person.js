const Person=require('./../models/person')

const postData=async(req,res)=>{
    try{
      const data=req.body
    const newPerson=new Person(data);
    const response= await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'inernal server error'});
  
    }
  }

const getData=async(req,res)=>{
    try{
        const data=await Person.find();
        console.log('data fetch');
    res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'inernal server error'});
  
    }
  
  }
  const getByName=async(req,res)=>{
    try{
      const name = req.params.name;
        const data=await Person.find({ name: name });
        console.log('data fetch');
    res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'inernal server error'});
  
    }
  
  }
  
  const updatePerson = async (req, res) => {
    try {
        const paramName = req.params.name; // Name from URL parameter
        const { name, age } = req.body; // Fields to be updated
        
        // Find person by the current name and update with new values
        const updatedPerson = await Person.findOneAndUpdate(
            { name: paramName },       // Filter to find person by name
            { name, age },             // Fields to update
            { new: true }              // Return the updated document
        );
        
        // If no person is found, return 404
        if (!updatedPerson) {
            return res.status(404).json({ error: 'Person not found' });
        }
        
        console.log(`Person updated: ${paramName}`);
        res.status(200).json(updatedPerson);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
};




  module.exports={postData,getData,getByName,updatePerson}