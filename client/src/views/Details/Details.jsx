import React, { useEffect } from 'react'
import Style from "./details.module.css"
import { useDispatch , useSelector} from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import {getVideoGamesId,clear} from "../../Redux/Actions/actions"



const Details = () => {
  
  const id=useParams();
  const dispatch=useDispatch();
  const gameDetail=useSelector((state)=>state.gameDetail)

  useEffect(()=>{
    dispatch(getVideoGamesId(id.id))
    return ()=>{
      dispatch(clear())
    }
  },[])

  
  // const genres= new Set();
  // const plataforms= new Set();
  const genres=[]
  const platforms=[]
  let newPlatfoms="";
  let newGenres="";
  
  const regex = /<\/?[a-z][\s\S]*?>/ig;
  const detail=gameDetail.description?.replace(regex,"");

  //SI ES UN JUEGO DE LA API
  if (Number.isInteger(gameDetail.id)){
    gameDetail.genres?.forEach((element)=> {
      // genres.add(element.name)
      if (!genres.includes(element.name)){
        genres.push(element.name)
      }
    });
  
    gameDetail.platforms?.forEach((element)=>{
      // platforms.add(element.platform.name)
      if (!platforms.includes(element.platform.name)){
        platforms.push(element.platform.name)
      }
    })
  
  }else{
    
    gameDetail.platforms?.forEach(plataform=>{
      return (newPlatfoms+= `${plataform}, `);  
    })
    gameDetail.genres?.forEach(genres=>{
      return (newGenres+= `${genres.name}, `);  
    })
  }


  return (
    <div className={Style.div_cont}>
      <div className={Style.detalle}>
        <h5>id : {gameDetail.id}</h5>
        <section className={Style.name}>
          <h3>Name : {gameDetail.name}</h3>
        </section>
        <div className={Style.div_img}>
          <img src={gameDetail.image}/>
        </div>

        {Number.isInteger(gameDetail.id)?<h5>Genres: {genres.join(" , ")}</h5>:<h5>Geners: {newGenres}</h5>}
        
        {Number.isInteger(gameDetail.id)?<h5>Platforms: {platforms.join(" , ")}</h5>:<h5>Platforms: {newPlatfoms}</h5>}
       
        <h5>Rating : {gameDetail.rating}</h5>

        <h5>Fecha de lanzamiento : {gameDetail.released}</h5>

      </div>
      <div className={Style.descrip}>
        <p>{detail}</p>
      </div>
    </div>
    
  )
}

export default Details