require('dotenv').config();
const {DB_USER, DB_PASSWORD, DB_HOST,API_KEY} = process.env;

const axios= require("axios")


const getVideoGamesController=async()=>{
    const games=[]
    let aux=1
    while (aux<6){
        const {data}=await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${aux}`)
        if (data.results){
            data.results.forEach(juego=> {
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
                games.push(videoGame); 
            });
        }
        aux+=1;
        // console.log(games.length)
    }
    return games

   
}
module.exports=getVideoGamesController;