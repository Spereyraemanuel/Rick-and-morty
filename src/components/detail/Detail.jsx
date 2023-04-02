import React from 'react'
import  axios  from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'


export default function Deatil() {
  const{id} = useParams()
  const [character, setCharacter] = useState({})
  

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
 
  return (
    <div>
      <h1>Detail</h1>
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.specie}</h2>
      <h2>{character.gender}</h2>
      <h2>{character.origin?.name}</h2>
      <img src={character.image} alt={character.name} />
    </div>
  )
}
