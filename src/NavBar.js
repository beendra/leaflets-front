import React from 'react';
import {MenuItems} from './MenuItems';
import { useState } from 'react';
// import {Button} from './Button';

function NavBar({ currentUser, setCurrentUser }){
    const [ clicked, setClicked ] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }

    return (
        <nav className="navbar-items">
            <h3 className="navbar-logo">Leaflets🌿</h3>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
                {/* <li><Link to=""></Link></li> */}
            </ul>
        </nav>
    );
}

export default NavBar;