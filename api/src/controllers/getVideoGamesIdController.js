//params --> /:id
require('dotenv').config();
const {API_KEY} = process.env;
const {Videogames,Genres}=require("../db")

const axios= require("axios")
const getVideoGamesIdController=async(id)=>{
    //si el id tiene - significa que esta en la base de datos
    const validate=id.includes("-")
    if (validate){
   
        const data=await Videogames.findOne({where:{id:id},include:[
            {
              model: Genres,
              attributes:["name"],
              through:{attributes:[]}
            }
        ]});
        
        return data
    }
    else{
        //el game esta en la api
        const {data}=await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        
        if (data){
            
            const videoGame={
                        id:data.id,
                        name:data.name,
                        image:data.background_image,
                        platforms:data.platforms,
                        description:data.description,
                        released:data.released,
                        rating:data.rating,
                        genres:data.genres
                    }
            
            return videoGame
        }
    }
       
    }
    module.exports=getVideoGamesIdController;
