import Card from './Card';

// Dirígete al componente Cards y envíale el id del personaje como propiedad al componente Card.


function Cards({ characters, onClose,}) {
    return <div className='cards'>
        {characters.map((character, index) => (
            <Card
                key={index}
                id={character.id}
                name={character.name}
                age={character.age}
                gender={character.gender}
                image={character.image}
                species={character.species}
                location={character.location.name}
                origin={character.origin.name}
                onClose={onClose}
            />
        ))}
    </div>;
}


export default Cards;   