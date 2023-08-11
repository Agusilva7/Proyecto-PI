//params --> /:id
require('dotenv').config();
const {API_KEY} = process.env;
const {Videogames}=require("../db")

const axios= require("axios")
const getVideoGamesIdController=async(id)=>{
    const validacion=id.includes("-")
    if (validacion){
        console.log("lo tengo que buscar en mi base de datos")
        return;
        // const gameIdDb=await Videogames.findOne({where:{id:id},include:[
        //     {
        //       model: Genres,
        //       attributes:["name"],
        //       through:{attributes:[]}
        //     }
        //   ]});
        // return gameIdDb
    }
    const {data}=await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    
    if (data){
        
        const videoGame={
                    id:data.id,
                    name:data.name,
                    image:data.background_image,
                    platforms:data.platforms,
                    descripcion:data.description,
                    released:data.released,
                    rating:data.rating,
                    genres:data.genres
                }
        
        return videoGame
    }
       
    }
    module.exports=getVideoGamesIdController;
