
const { where } = require("sequelize");
const {Videogames, Genres}=require("../db")
const postVideoGamesController =async(name,descripción,plataformas,imagen,fechaDeLanzamiento,rating,genero)=>{

    if (!genero||!name||!descripción||!plataformas||!imagen||!fechaDeLanzamiento||!rating)throw new Error("Faltan completar datos");
    const validateVideoGame=await Videogames.findOne({where:{name:name}})

    if (validateVideoGame)throw new Error("Ya existe este jueguito Perrito");

    const newVideoGame=await Videogames.create(
        {   name,
            descripción,
            plataformas,
            imagen,
            fechaDeLanzamiento,
            rating,
            genero
        }
    )
    for (let i =0 ;i<genero.length;i++){
        const genres=await Genres.findOne({
            where:{
                name:genero[i]
            },
        });
        if (!genres)throw new Error("Este genero no existe Salamin con patas!!");
        await newVideoGame.addGenres(genres.id);
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