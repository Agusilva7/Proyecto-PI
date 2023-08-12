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

  
  const genres= new Set();
  const plataforms= new Set();
  const regex = /<\/?[a-z][\s\S]*?>/ig;
  const detail=gameDetail.description?.replace(regex,"")

  if (Number.isInteger(gameDetail.id)){

    gameDetail.genres?.forEach((element)=> {
      genres.add(element.name)
    });
  
    gameDetail.platforms?.forEach((element)=>{
      plataforms.add(element.platform.name)
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

        {Number.isInteger(gameDetail.id)?<h5>Genres: {genres}</h5>:<h5>Geners: {gameDetail.genres}</h5>}
        
        {Number.isInteger(gameDetail.id)?<h5>Platforms: {plataforms}</h5>:<h5>Platforms: {gameDetail.plataforms}</h5>}
       
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