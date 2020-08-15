import React from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";

const TinderCards = () => {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = database.collection("people").onSnapshot(snapshot => {
      setPeople(snapshot.docs.map(doc => doc.data()));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
