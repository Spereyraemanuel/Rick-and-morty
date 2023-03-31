import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'


export default function navBar({onSearch, logOut}) {
  return (
    <div> 
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/about">
         <button>About</button>
      </Link>
      <Link to="/Favorites">
         <button>Favorites</button>
      </Link>
         <SearchBar onSearch={onSearch} />  
          <button onClick={logOut}>LogOut</button>
    </div>
  )
};

