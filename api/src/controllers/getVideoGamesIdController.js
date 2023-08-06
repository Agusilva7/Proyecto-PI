//params --> /:id
require('dotenv').config();
const {API_KEY} = process.env;

const axios= require("axios")
const getVideoGamesIdController=async(id)=>{
   
   
    const {data}=await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    
    if (data){
        const juego=data;
        const videoGame={
                    id:juego.id,
                    name:juego.name,
                    image:juego.image,
                    platforms:juego.platforms,
                    slug:juego.slug,
                    released:juego.released,
                    rating:juego.rating,
                    genres:juego.genres
                }
        
        return videoGame
    }
       
    }
    module.exports=getVideoGamesIdController;
