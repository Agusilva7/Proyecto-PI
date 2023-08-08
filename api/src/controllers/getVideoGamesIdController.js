//params --> /:id
require('dotenv').config();
const {API_KEY} = process.env;

const axios= require("axios")
const getVideoGamesIdController=async(id)=>{
   
   
    const {data}=await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    
    if (data){
        console.log(data)
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
