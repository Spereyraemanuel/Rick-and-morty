import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'
import "../navBar/NavBar.css"



export default function navBar({ onSearch, logOut }) {
  return (
        <nav>
      <div className='navigation'>
        <NavLink className="a" to="/home">Home</NavLink>
        <NavLink className="a" to="/about">About</NavLink>
        <NavLink className="a" to="/Favorites">Favorites</NavLink>
          <SearchBar onSearch={onSearch} />
        <button onClick={logOut}>LogOut</button>
      </div>
        </nav>
   
  )
};

