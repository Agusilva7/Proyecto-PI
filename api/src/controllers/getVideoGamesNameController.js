require('dotenv').config();
const {API_KEY} = process.env;

const axios= require("axios")
const getVideoGamesNameController=async(name)=>{
    let aux=1
    const games=[]
    while (aux<6){

        const {data}=await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${aux}`)
        
        if (data){
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
            })
            aux+=1
        } 
    }
    const result = games.filter(juego=>juego.name.toLowerCase().includes(name.toLowerCase()));
    console.log(result.length)
    if (!result.length)throw new Error("Este juego no esta disponible TUKI!!")
    return result.slice(0,15)
    
}
module.exports=getVideoGamesNameController;