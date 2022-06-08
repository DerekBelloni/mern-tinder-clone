import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card'
import { SwipeDown } from "@mui/icons-material";


const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Sandra Bullock',
      url: "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
    },
    {
      name: 'Jeff Bezos',
      url: "https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg",
    }
  ])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ', nameToDelete)
    // setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen')
  }


  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <>
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeft={() => outOfFrame(person.name)}
            >
            </TinderCard>
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </>
        ))}
      </div>
    </div >
  );
}

export default TinderCards;


