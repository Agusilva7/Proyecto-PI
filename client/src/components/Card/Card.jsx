import React from 'react'
import Style from "./card.module.css"
const Card = ({name,genres}) => {
  const genero=genres.map(genero=>genero.name)
  return (
    <div className={Style.card}>
      <div>
        <h4>{name}</h4>
      </div>
      <div>
       <p>{genero}</p>
      </div>
    </div>
  )
}

export default Card