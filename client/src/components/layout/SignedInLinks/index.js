import React from 'react'; 
import {NavLink} from 'react-router-dom'


const SignedInLinks = () => {
    return (
      <ul className="right">
            <li><NavLink to="/">New Project</NavLink></li>
            <li><NavLink to="/">Log out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating purple lighten-2">NN</NavLink></li>
      </ul>
    )
}

export default SignedInLinks;