require('dotenv').config();
const {API_KEY} = process.env;


const {Genres}=require("../db")
const axios= require("axios")

const getGenresControllers=async()=>{
    //llamo a la base de datos
    const dataBaseGenres=Genres.findAll()

    const {data}=await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    //si no hay nada en la base de datos
    const array=data.results.map(genres=>{
        const videoGame={
            id:genres.id,
            name:genres.name
        }
        return videoGame
    })
    if (data.results && !(await dataBaseGenres).length){
        //para crear los generos en la base de datos
        const genres=await Genres.bulkCreate(array)

        return genres
    }
    return array
 
    
}
module.exports=getGenresControllers;