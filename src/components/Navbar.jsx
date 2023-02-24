import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div>
        <ul>
            <li>
                <NavLink className={({isActive}) => (isActive ? "active" : "") } end to="/">Home</NavLink>     
            </li>
            <li>
                <NavLink className={({isActive}) => (isActive ? "active" : "") } to="/about">About</NavLink>
            </li>
        </ul>
    </div>
  )
};
