require('dotenv').config();
const {API_KEY} = process.env;
const { where ,Op} = require("sequelize");
const {Videogames}=require("../db")

const axios= require("axios")
const getVideoGamesNameController=async(name)=>{
    
    let aux=1
    const games=[]
    
    const filterByNameDB=await Videogames.findAll({
        where:{
            name:{[Op.iLike]:`%${name}%`},
        },
    });
    while (aux<6){

        const {data}=await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${aux}`)
        
        if (data){
            data.results.forEach(game=> {
                
                const videoGame={
                    id:game.id,
                    name:game.name,
                    image:game.background_image,
                    platforms:game.platforms,
                    released:game.released,
                    rating:game.rating,
                    genres:game.genres
                }
                games.push(videoGame);
            })
            aux+=1
        } 
    }
    const result = games.filter(game=>game.name.toLowerCase().includes(name.toLowerCase()));

    const filterGames=filterByNameDB.concat(result)
    if (!filterGames.length)throw new Error("Este juego no esta disponible TUKI!!")
    return filterGames.slice(0,15)
    
}
module.exports=getVideoGamesNameController;