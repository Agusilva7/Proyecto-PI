require('dotenv').config();
const {DB_USER, DB_PASSWORD, DB_HOST,API_KEY} = process.env;
const {Videogames,Genres}=require("../db")

const axios= require("axios")


const getVideoGamesController=async()=>{
  //donde guardo los juegos de la api
    const games=[]
    let aux=1
    // me traigo los juegos de la base de datos 
    const gameDB=await Videogames.findAll({
        include:[
          {
            model: Genres,
            attributes:["name"],
            through:{attributes:[]}
          }
        ]
        
      });
    
    while (aux<4){
        const {data}=await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=${aux}`)
        if (data.results){
          //recorro el array para poder quedarme las propiedades que necesito
          console.log(data.results)
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
            });
        }
        aux+=1;
        // console.log(games.length)
    }
    //concateno los juegos de la base de datos y los de la api
    return gameDB.concat(games)

   
}
module.exports=getVideoGamesController;