const getGenresControllers=require("../controllers/getGenresControllers")
const getGenresHandler=async(req,res)=>{
    try {
        const response = await getGenresControllers()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

module.exports=getGenresHandler;