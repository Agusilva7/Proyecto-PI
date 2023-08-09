import React, { useEffect } from 'react'
import { clear, getVideoGames, hoja, orderName} from '../../Redux/Actions/actions'
import {useDispatch,useSelector}from 'react-redux'
import Style from "./home.module.css"
import Cards from "../../components/Cards/Cards"

const Home = () => {

  const dispatch=useDispatch();

  const allVideoGames=useSelector((state)=>state.allVideoGames)
  const gameName=useSelector((state)=>state.gameName)



  useEffect(()=>{
    dispatch(getVideoGames())
  
    //se ejecuta cuando el componente se monte.
    // return(getVideoGamesId(id))
  },[])

  const paginate=(event)=>{
    dispatch(hoja(event.target.name))
  }

  const orderByName = (event)=>{
    dispatch(orderName(event.target.name))
  }
  
  return (
    <div className={Style.div_cont}>
        <h1>Home</h1>
        <div className={Style.filtros}>
          <label>Filtros/Ordenamiento</label>
          <button name="az" onClick={orderByName}>A-Z</button>
          <button name="za" onClick={orderByName}>Z-A</button>
          <label>Paginado</label>
          <button name="prev" onClick={paginate}>Prev</button>
          <button name="next" onClick={paginate}>Next</button>
          <button onClick={()=>{dispatch(clear())}}>Clear</button>
        </div>
        
        <div>
          {gameName.length?<Cards info={gameName}/>:<Cards info={allVideoGames}/>}
        </div>
        
    </div>
  )
}

export default Home
