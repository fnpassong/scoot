import { Link } from 'react-router-dom'

import ham from '../assets/icons/hamburger.svg';
import logo from '../assets/logo.svg';

import '../scss/stylos/navbar.scss';


export const NavBar = () => {
  return (
    
    <div className="navbar">

      <div className="navbar__container">
        <div className="img__container">

          <img src= {ham} alt="" />
          <img src= {logo} alt="" />

        </div>
        <nav className="navbar__links">

          <Link to='/about'>About</Link>
          <Link>Location</Link>
          <Link>Careers</Link>



        </nav>


      </div>

 

    </div>
    
  )
}
