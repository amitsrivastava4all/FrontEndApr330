import React from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';
export const Contact=(props)=>{
    return(
        <div>
            <h1>Inside Contact us Component</h1>
            <ul>
            <li><NavLink activeClassName="active" to="/contact/office">Office</NavLink></li>
            <li><NavLink activeClassName="active" to="/contact/residence">Res</NavLink></li>
            </ul>
        </div>
    )
}