import React from 'react';
import { Link} from 'react-router-dom';
import NavBar from '../styles/Navbar.css';

function navBar(){
    return(
       <div className='Div-section'>
        <div className='logo'></div>
        <ul className='nav-links'>
            <li><Link to ="/">Home</Link></li>
            <li><Link to= "/">About</Link></li>
            <li><Link>Gallexy</Link></li>
            <li><Link>Contact</Link></li>
        </ul>
       </div>
    );
}

export default navBar;