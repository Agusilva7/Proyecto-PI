require('dotenv').config();
const {DB_USER, DB_PASSWORD, DB_HOST,API_KEY} = process.env;
const {Videogames,Genres}=require("../db")

const axios= require("axios")


const getVideoGamesController=async()=>{
    const games=[]
    let aux=1
    const gameDB=await Videogames.findAll({
        include:[
          {
            model: Genres,
            attributes:["name"],
            through:{attributes:[]}
          }
        ]
        
      });
      console.log(gameDB)
    while (aux<4){
        const {data}=await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=${aux}`)
        if (data.results){
            data.results.forEach(juego=> {
                const videoGame={
                    id:juego.id,
                    name:juego.name,
                    image:juego.background_image,
                    platforms:juego.platforms,
                    released:juego.released,
                    rating:juego.rating,
                    genres:juego.genres
                }
                games.push(videoGame); 
            });
        }
        aux+=1;
        // console.log(games.length)
    }
    return gameDB.concat(games)

   
}
module.exports=getVideoGamesController;