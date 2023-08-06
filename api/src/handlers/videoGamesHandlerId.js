const getVideoGamesIdController = require("../controllers/getVideoGamesIdController");

const videoGamesHandlerId=async(req,res)=>{
    const {id}=req.params;
    try {
        const response = await getVideoGamesIdController(id);
        
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
    
}

module.exports=videoGamesHandlerId;