const  getVideoGamesNameController=require("../controllers/getVideoGamesNameController");

const videoGamesHandlerName=async(req,res)=>{
    const {name}=req.query;
    
    try {
        const response = await getVideoGamesNameController(name);
        
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
    
}

module.exports=videoGamesHandlerName;