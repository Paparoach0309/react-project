import React, {useState} from 'react';
import '../../styles/burgerStyle.css';
import {NavLink} from 'react-router-dom';

const Burger = () => {
    let [open, setOpen] = useState(false);

    return(
        <div className={open ? 'burger-menu-activ' : 'burger-menu'}>
            <button onClick={() => setOpen(!open)} className='burger-menu-btn'>
                <span className='burger-menu-span'></span>
            </button>
            <div onClick={() => setOpen(false)} className='burger-menu-nav'>
                    <NavLink className='burger-menu-link' to ='/teams'>Teams</NavLink>
                    <NavLink className='burger-menu-link' to='/stadiums'>Stadiums</NavLink>
                    <NavLink className='burger-menu-link' to='/gallery'>Gallery</NavLink>
                    <NavLink className='burger-menu-link' to='/ticketing'>Ticketing</NavLink>
            </div>
            <div  onClick={() => setOpen(false)} className='over-block'></div>
        </div>
    );
};

export default Burger;