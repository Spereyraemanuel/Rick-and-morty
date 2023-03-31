import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import { useState } from "react"
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from "./components/Login"
import About from "./components/About"
import Detail from "./components/Detail"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from './components/Favorites';



function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'emanuel@gmail.com';
   const PASSWORD = '130Syndy01';

  const [characters, setCharacters] = useState([])
 const location = useLocation()

 function login(inputs) {
   if (inputs.password === PASSWORD && inputs.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

function logOut() {
      setAccess(false);
      navigate('/');  
}

useEffect(() => {
   !access && navigate('/');
}, [access]);

  const onSearch = (id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         let exist = characters.find((character)=>character.id === data.id)
         if(exist){
            alert("ya existe")
         }
         else { 
            setCharacters((oldChars) => [...oldChars, data]);
         }
         } else {
            alert('¡No hay personajes con este ID!');
      }
   });
 }
function onClose(id){
   setCharacters((oldChars) => { 
    return oldChars.filter((character)=> character.id !== id)
});
}

  return (

      <div className='App'>
         {location.pathname === "/" ? null : <NavBar logOut={logOut} onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Login login={login}/>}/>
            <Route path='/home' element={<Cards 
         onClose={onClose}
         characters={characters}
         /> }/>
            <Route path='/about' element={<About/>}/>
            <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes> 
      </div>
   )
}

export default App;
