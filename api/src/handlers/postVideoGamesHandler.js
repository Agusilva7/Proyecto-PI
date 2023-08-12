const postVideoGamesController=require("../controllers/postVideoGamesControllers")
const postVideoGamesHandler=async(req,res)=>{
    const {name,description,platforms,image,released,rating,genres}=req.body
    try {
        const response= await postVideoGamesController(name,description,platforms,image,released,rating,genres)
        res.status(200).json(response)
        
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}
module.exports=postVideoGamesHandler;