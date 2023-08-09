import React ,{useState} from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
import {getVideoGamesName}from "../../Redux/Actions/actions"
import { useDispatch} from 'react-redux'


const Navbar = () => {
    const dispatch=useDispatch();
    const [game,setGame]=useState({
        name:""
    })
    const handleChange=(event)=>{
        setGame({
            ...game,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(getVideoGamesName(game.name))

        
    }
    
  return (
    <div className='nav-cont'>
        <div className='nav-img-cont'>
            <Link to={"/"}><img src='https://media.tenor.com/Q4tVC2cL_woAAAAd/noot-noot-apocalypse.gif' alt=''/></Link>
        </div>
        <div className='nav-link-cont'>
            <Link to={"/home"} className="link">Home</Link>
            <Link to={"/create"} className="link">Formulario</Link>
        </div>
        <div>
           
            <input type='text'  placeholder="Name of Game"name="name" onChange={handleChange}/>
            <button type='submit' name="" onClick={handleSubmit}>Submit</button>
            
        </div>
    </div>
  )
}

export default Navbar