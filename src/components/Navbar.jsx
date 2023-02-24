import React from 'react';
import { MenuData } from '../Data';


const Navbar = () => {
    return (
        <nav className='app-navbar'>
            <h1>LOGO</h1>
            
            <ul className='navbar-items'>
            
            {MenuData.map((item, i) => {
                return(
                <li key={`navbar-${i}`}>
                        <a href = {item.url} className ='nav-links'>
                            {item.title}
                        
                        </a>
                     </li>
                    )
                })}
          </ul>
           
           
  </nav>
    );
};

export default Navbar;