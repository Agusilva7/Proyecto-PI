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

  
  
  const generos= new Set();
  const plataformas= new Set();

  gameDetail.genres?.forEach((element)=> {
    generos.add(element.name)
  });

  gameDetail.platforms?.forEach((element)=>{
    plataformas.add(element.platform.name)
  })

  const regex = /<\/?[a-z][\s\S]*?>/ig;
  const detalle=gameDetail.descripcion?.replace(regex,"")
    


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
        <h5>Geners: {generos}</h5>
        <h5>Plataforms: {plataformas}</h5>
        <h5>Rating : {gameDetail.rating}</h5>

        <h5>Fecha de lanzamiento : {gameDetail.released}</h5>

      </div>
      <div className={Style.descrip}>
        <p>{detalle}</p>
      </div>
    </div>
    
  )
}

export default Details