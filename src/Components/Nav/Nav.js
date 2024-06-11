import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import Logo from '../../logo/logo.png'

const Nav = () => {
  return (
    <div className='nav'>
        <div className='nav__container'>
            <Link to='/' className='links'><img src={Logo} alt='logo'/></Link> 
            <div className='nav__btns'>
                <Link to='/' className='links'><span>Home</span></Link>
                <Link to='/skills' className='links'><span>Skills</span></Link>
                <Link  to='/projects' className='links'><span>Projects</span></Link>
                <Link to='/contact' className='links'><span>Contact</span></Link> 
            </div>
        </div>
    </div>
  )
}

export default Nav