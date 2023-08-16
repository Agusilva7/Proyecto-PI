import React from 'react'
import Card from "../Card/Card"
import Style from "./cards.module.css"
const Cards = ({info}) => {
  // const gameGenero=[];

  return (

    <div className={Style.cards}>
      {
        
        info.map(game => {
        
          // game.genres.forEach(genero => {
          //   gameGenero.push(genero.name)
          // });
          return <Card name={game.name} genres={game.genres} image={game.image} id={game.id} key={game.id}/>
        })
      }
    </div>
  )
  
}

export default Cards