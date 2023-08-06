require('dotenv').config();
const {API_KEY} = process.env;


const {Genres}=require("../db")
const axios= require("axios")
const getGenresControllers=async()=>{
    const baseDeDatos=Genres.findAll()
    const {data}=await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    if (data.results && !(await baseDeDatos).length){
        const array=data.results.map(juego=>{
            const videoGame={
                id:juego.id,
                name:juego.name
            }
            return videoGame
        })

        const generos=await Genres.bulkCreate(array)
        return generos
    }
    throw new Error("base de datos ya esta llena")
}
module.exports=getGenresControllers;