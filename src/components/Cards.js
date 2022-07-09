import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { useEffect, useState } from "react";

function Cards() {
  const [character, setCards] = useState([]);
  const fetchData = async () => {
      const fetchData = await fetch(
        `https://rickandmortyapi.com/api/character`
      );
      let data = await fetchData.json();
      let character = data.results;
        setCards(character.slice(0, 5));
        

      console.log(character);
    };
  useEffect(() => {
    
    fetchData(4);
  }, []);

  return (
    <div className="cards">
      <h1>Check out our main Characters!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">            
          <ul className="cards__items">
            {character.map((item) => {
              console.log(item)
                return <CardItem 
                src={item.image}
                text={item.species}
                label={item.name}
                path="/services"
              CardItem />

            }
            )}
            </ul>

        </div>
      </div>
    </div>
  );
}

// { array.map( (elemento, indice) => <p key={elemento + indice}> {elemento} </p>) }


export default Cards;
