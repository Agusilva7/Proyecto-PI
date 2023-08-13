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
            <Link to={"/"}><img src='https://64.media.tumblr.com/567cc58bece83e7687df11a5f7e8df17/tumblr_mx14as6o5i1sl6vmto1_500.gifv' alt=''/></Link>
        </div>
        <div className='nav-link-cont'>
            <label>Home</label>
            <div className='nav-img-home'>
                <Link to={"/home"} className="link"><img src='https://cdn.icon-icons.com/icons2/2249/PNG/512/home_circle_outline_icon_139029.png'/></Link>
            </div>
            <label>Create game</label>
            <div className='nav-img-form'>
                <Link to={"/create"} className="link"> <img src='https://cdn-icons-png.flaticon.com/512/88/88450.png'/></Link>
            </div>
        </div>
        <div>
           
            <input  className="input-nav" type='text'  placeholder="Name of Game"name="name" onChange={handleChange}/>
            <button className="button-nav" type='submit' name="" onClick={handleSubmit}>Submit</button>
            
        </div>
        <div className='div_img'>
            <img src='https://media1.giphy.com/media/eGlfUj0mZT8k20aw7n/giphy.gif?cid=6c09b952uorcfoa9v8j7wwr93ljmd2xto2kfd7w6zxkk0idq&ep=v1_stickers_related&rid=giphy.gif&ct=s'/>
        </div>
    </div>
  )
}

export default Navbar