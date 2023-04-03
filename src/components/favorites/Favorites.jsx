import React from 'react';
import Card from '../card/Card';
import { connect } from 'react-redux';



function Favorites({ myFavorites, onClose }) {
  return (
    <div>
      
      {myFavorites &&
        myFavorites.map((character, index) => {
          return (
          
            <Card
              key={index}
              id={character.id}
              name={character.name}
              age={character.age}
              gender={character.gender}
              image={character.image}
              species={character.species}
              origin={character.origin?.name}
              onClose={onClose}
            />
          );
        })
        }
    </div>
  );
}


function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, null)(Favorites)