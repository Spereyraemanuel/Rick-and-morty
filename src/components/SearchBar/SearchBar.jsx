import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
    const [character, setCharacter] = useState("")
     
    const handleChange = (event) => {
      setCharacter(event.target.value)
    }
      
   return (
      <div>
         <input  type='search' value={character} onChange={handleChange}/> 

         <button className="btn-agregar" onClick={(id) => onSearch(character)}>Agregar</button>
      </div>
   );
}
