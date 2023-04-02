import React from 'react';
import Cards from '../cards/Cards';
import { connect } from 'react-redux';



function Favorites({ myFavorites, onClose }) {
  return (
    <div>
      
      {myFavorites &&
        myFavorites.map((character, index) => {
          return (
          
            <Cards
              key={index}
              id={character.id}
              name={character.name}
              age={character.age}
              gender={character.gender}
              image={character.image}
              species={character.species}
              origin={character.origin.name}
              onClose={onClose}
            />
          );
        })
        }
    </div>
  );
}


function mapState(state) {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapState)(Favorites)