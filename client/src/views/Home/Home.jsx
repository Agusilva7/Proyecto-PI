import React, { useEffect, useState } from 'react'
import { clear, getVideoGames,getVideoGamesGenres,filterGenres,filterPlatforms,filterGames, hoja, orderName, filterRating} from '../../Redux/Actions/actions'
import {useDispatch,useSelector}from 'react-redux'
import Style from "./home.module.css"
import Cards from "../../components/Cards/Cards"
import Loading from '../../components/Loader/loder'
import  Error  from '../../components/Error/error'

const Home = () => {

  // const [removeLoading,setRemoveLoading]=useState(false)

  const dispatch=useDispatch();
  
  useEffect(()=>{
    if (!allVideoGames.length){
      dispatch(getVideoGames())
    }
    dispatch(getVideoGamesGenres())

  },[])
  
  const gamePlatforms=useSelector((state)=>state.gamePlatforms);
  const allVideoGames=useSelector((state)=>state.allVideoGames);
  const gameName=useSelector((state)=>state.gameName);
  const gameGenres=useSelector((state)=>state.gameGenres);
  const error=useSelector((state)=>state.error);
  const currentPage=useSelector((state)=>state.currentPage);

  const paginate=(event)=>{
    dispatch(hoja(event.target.name))
  }

  const orderByName = (event)=>{
    dispatch(orderName(event.target.name))
  }
 const optionGenres=(event)=>{
    dispatch(filterGenres(event.target.value))
 }
 const optionPlatforms=(event)=>{
  dispatch(filterPlatforms(event.target.value))
 }
 const optionGames=(event)=>{
  dispatch(filterGames(event.target.value))
 }
 const optionRating=(event)=>{
  dispatch(filterRating(event.target.value))
 }

  return (
    <div className={Style.div_cont}>
      
      {allVideoGames.length<=0?(<Loading/>):(
        <div>
        <div className={Style.filtros}>

          {/* <label>Ordenamiento</label> */}
        
          <div className={Style.div_Az}>
            <img name="az" onClick={orderByName} className={Style.az} src='https://cdn-icons-png.flaticon.com/512/81/81456.png'/>
          </div>

          <div className={Style.div_Za}>
            <img name="za" onClick={orderByName} className={Style.za} src="https://cdn-icons-png.flaticon.com/512/80/80874.png"/>
          </div>
      
          <label>Filtro </label>
          <div className={Style.div_Genres}>
            <select onChange={optionGenres}>
              <option selected="selected" disabled="disabled">Select Genres 🎭</option>
              {gameGenres?.map((genres,index) => {
                return(
                  <option key={index} > 
                    {genres}
                  </option>
                )
              })}
            </select>
          </div>
          <div className={Style.div_Platforms}>
            <select onChange={optionPlatforms}>
            <option selected="selected" disabled="disabled">Select Platforms 🎮</option>
              {[...gamePlatforms]?.map((platform,index)=>{
                return(
                  <option key={index}>
                    {platform}
                  </option>
                )
              })}
            </select>
          </div>
          <div className={Style.div_Games}>
            <select onChange={optionGames}>
              <option selected="selected" disabled="disabled">API / DB 🎲</option>
              <option>Game API</option>
              <option>Game DB</option>
            </select>
          </div>

          <div className={Style.div_Rating}>
            <select onChange={optionRating}>
              <option selected="selected" disabled="disabled">Select Rating 🔥</option>
              <option>Rating 👆</option>
              <option>Rating 👇</option>
              <option></option>
            </select>
          </div>

          <label>Paginado</label>

          <img name="prev" onClick={paginate} src="https://iili.io/Htm3aP2.th.png" className={Style.flecha}/>
          <div>
            <h1>{currentPage}</h1>
          </div>
          <img name="next" onClick={paginate} className={Style.flecha2} src="https://iili.io/HtykI7n.th.png"></img>
          
          <label>REFRESH</label>
          <img className={Style.return} src="https://iili.io/Htt5HjS.th.png" onClick={()=>{dispatch(clear())}}></img>
        </div>
          {error.length?<Error/>:(
          <div>
            {gameName.length?<Cards info={gameName}/>:<Cards info={allVideoGames}/>}
          </div>

          )}
        
      
        </div>
      )}
        
    </div>
  )
}

export default Home
