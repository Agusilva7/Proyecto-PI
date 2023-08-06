const  getVideoGamesController=require("../controllers/getVideoGamesController")

const videoGamesHandler=async(req,res)=>{
    try {
        const response = await getVideoGamesController();
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
    // res.status(200).send("esta todo TUKI")
}

module.exports=videoGamesHandler;