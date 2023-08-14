import React, { useEffect, useState } from 'react'
import { clear, getVideoGames,getVideoGamesGenres,filterGenres,filterPlatforms,filterGames, hoja, orderName} from '../../Redux/Actions/actions'
import {useDispatch,useSelector}from 'react-redux'
import Style from "./home.module.css"
import Cards from "../../components/Cards/Cards"
import Loading from '../../components/Loader/loder'

const Home = () => {

  const [removeLoading,setRemoveLoading]=useState(false)

  const dispatch=useDispatch();
  
  useEffect(()=>{
    if (!allVideoGames.length){
      dispatch(getVideoGames())
    }
    dispatch(getVideoGamesGenres())

  },[])
  
  const gamePlatforms=useSelector((state)=>state.gamePlatforms)
  const allVideoGames=useSelector((state)=>state.allVideoGames)
  const gameName=useSelector((state)=>state.gameName)
  const gameGenres=useSelector((state)=>state.gameGenres)

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

  return (
    <div className={Style.div_cont}>
       {allVideoGames.length<=0?(<Loading/>):(
        <div>
        <div className={Style.filtros}>

          <label>Ordenamiento</label>
        
          <div className={Style.div_Az}>
            <img name="az" onClick={orderByName} className={Style.az} src='https://cdn-icons-png.flaticon.com/512/81/81456.png'/>
          </div>

          <div className={Style.div_Za}>
            <img name="za" onClick={orderByName} className={Style.za} src="https://cdn-icons-png.flaticon.com/512/80/80874.png"/>
          </div>
      
          <label>Filtro </label>
          <div className={Style.div_Genres}>
            <select onChange={optionGenres}>
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
              <option>Game API</option>
              <option>Game DB</option>
            </select>
          </div>

          <label>Paginado</label>

          <img name="prev" onClick={paginate} src="https://iili.io/Htm3aP2.th.png" className={Style.flecha}/>
          <img name="next" onClick={paginate} className={Style.flecha2} src="https://iili.io/HtykI7n.th.png"></img>
          
          <label>REFRESH</label>
          <img className={Style.return} src="https://iili.io/Htt5HjS.th.png" onClick={()=>{dispatch(clear())}}></img>
        </div>
        
        
        <div>
          {gameName.length?<Cards info={gameName}/>:<Cards info={allVideoGames}/>}
        </div>
        </div>
       )}
        
    </div>
  )
}

export default Home
