import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
            <div className="container">
                <div className="navbar-brand">
                    Note App
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            Главная
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link">
                            Информация
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}