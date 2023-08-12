
const { where } = require("sequelize");
const {Videogames, Genres}=require("../db")
const postVideoGamesController =async(name,description,platforms,image,released,rating,genres)=>{
    //valido si falta algun dato
    if (!genres||!name||!description||!platforms||!image||!released||!rating)throw new Error("Faltan completar datos");
   
    //valido si ya existe el juego en mi base de datos 
    const validateVideoGame=await Videogames.findOne({where:{name:name}})
    if (validateVideoGame)throw new Error("Ya existe este jueguito Perrito");
    
    //creo mi juego en mi base de datos
    
    const newVideoGame=await Videogames.create(
        {   name,
            description,
            platforms,
            image,
            released,
            rating  
        }
    )
    for (let i =0 ;i<genres.length;i++){
        const genresDb=await Genres.findOne({
            where:{
                name:genres[i]
            },
        });
        await newVideoGame.addGenres(genresDb.id);
    }
    const returnCreatedGame=await Videogames.findOne({
        where:{id:newVideoGame.id},
        include:[{
            model:Genres,
            attributes:["name"],
            through:{attributes:[]}
        }]
    })
 
    return returnCreatedGame
}

module.exports=postVideoGamesController;