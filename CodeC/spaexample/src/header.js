import React from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';
export const Header = (props)=>{
    return (
        <ul>
            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="/about/Ram/Developer">About</NavLink></li>
            <li><NavLink activeClassName="active" to="/contact">Contact Us</NavLink></li>
            <li><NavLink activeClassName="active" to={{pathname:'/news',search:'?time=9000&name=Sports News'}}>News 
            </NavLink>
            </li>
        </ul>
    )
}