import React, { useState } from 'react'
import logo from '../images/logo.png'
function Navbar() {
    const [navbar, setnavbar] = useState(false)

    const background=()=>{
        if(window.scrollY>=50){
            setnavbar(true);
        }else{
            setnavbar(false)
        }
    }
    window.addEventListener('scroll',background)
  return (
    <nav className={navbar? 'nav active':'nav'}>
        <a href="#" className='logo'>
            <img src={logo} style={{
                width:"150px",
                borderRadius:"10px"
            }} alt="" />
        </a>
        <input type="checkbox" className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for="menu-btn">
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href="#">HOME</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
