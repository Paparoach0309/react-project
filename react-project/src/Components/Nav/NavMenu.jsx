import React from 'react';

import Burger from './Burger.jsx';
import NavLogo from './NavLogo.jsx';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className = "nav">
            <NavLink to='/home'>
                <NavLogo />
            </NavLink>
                <Burger/>
            <div className='nav-list'>
                <h3 className='nav-list-name'>FIFA World Cup Russia 2018™ 21 May - 18 June</h3>
                <ul className="nav-list-item">
                    <NavLink to ='/teams'>Teams</NavLink>
                    <NavLink to='/stadiums'>Stadiums</NavLink>
                    <NavLink to='/gallery'>Gallery</NavLink>
                    <NavLink to='/ticketing'>Ticketing</NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;