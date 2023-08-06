import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
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
            <form>
                <input type='text' name="" id=""/>
                <input type='submit' name="" id=""/>
            </form>
        </div>
    </div>
  )
}

export default Navbar