const postVideoGamesController=require("../controllers/postVideoGamesControllers")
const postVideoGamesHandler=async(req,res)=>{
    const {name,descripción,plataformas,imagen,fechaDeLanzamiento,rating,genero}=req.body
    try {
        const response= await postVideoGamesController(name,descripción,plataformas,imagen,fechaDeLanzamiento,rating,genero)
        res.status(200).json(response)
        
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}
module.exports=postVideoGamesHandler;