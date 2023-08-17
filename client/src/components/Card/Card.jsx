import React from 'react'
import Style from "./card.module.css"
import {Link} from "react-router-dom"
// import Details from '../../views/Details/Details'
// import { getVideoGamesId } from '../../Redux/Actions/actions'


const Card = ({name,genres,image,id,onDB}) => {

  if(onDB){
    console.log("este es de la base de datos")
  }

  let generos=""
  genres?.forEach((element,index)=> {
    if (index===genres.length-1){
      return (generos+= `${element.name}.`);
    }else {
          return (generos+= `${element.name}, `);
        }
  });
 
  return (
    <div  className={Style.card} name={id}>
      <div>
        <h3>{name}</h3>
      </div>
      <section className={Style.div_cont_card}>

          <Link to={`/details/${id}`}>
            <div >
              <img title="CLICK PARA VER MAS"  className={Style.div_img} src={image} alt='juego'/>
            </div>
          </Link>

      </section>
      
      <div>
       <p>{generos!==""?generos:"BASE DE DATOS: "+onDB}</p>
      </div>
    </div>
  )
}

export default Card