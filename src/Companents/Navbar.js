import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import './NavbarStyle.css'

const Navbar = () => {
    const [state , setState] = useState(false)
  return (
    <header>
        <nav className='navbar'>
            <div className='logo'>
                <Link to='/'><img src='./logo.png' alt='home' /></Link>
            </div>
            <ul className={state?'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/pricing'>Pricing</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/faqQ'>FAQ</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </li>
            </ul>
            <div style={{cursor:'pointer'}} className='hamburger'>
                <FaBars onClick={()=> setState(!state)} style={{color:'white'}} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar