import React, { useState, useRef } from "react";

import { PokeProps } from "../../interfaces/Poke.interface";
import {
   Title,
   Button,
   StyledContainer,
   StyledCardPhotoContainer,
   StyledName,
   SearchContainer,
} from "./styles";

export interface Pokemon extends React.HTMLAttributes<HTMLDivElement> {
   pokemon: PokeProps;
}

export const Main: React.FC<Pokemon> = ({ pokemon, ...props }) => {
   const [poke, setPoke] = useState("");
   const [numberOfAbilities, setNumberOfAbilities] = useState(0);
   const [baseExperience, setBaseExperience] = useState(0);
   const [image, setImage] = useState("");
   const [error, setError] = useState(false);
   const inputEl = useRef(null);

   const handleSearch = () => {
      const inputValue = inputEl.current.value;
      console.log(inputValue);

      fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then((res) => {
         if (res.status !== 200) {
            setError(true);
            return;
         }
         res.json().then((data) => {
            setPoke(data.name);
            setNumberOfAbilities(data.abilities.length);
            setBaseExperience(data.base_experience);
            setImage(data.sprites.front_default);
         });
      });
   };

   let resultMarkup;

   if (error) {
      resultMarkup = <p>Pokemon not found, please try again.</p>;
   } else {
      resultMarkup = (
         <StyledContainer>
            <StyledCardPhotoContainer>
               <img src={image} alt={poke} />
            </StyledCardPhotoContainer>
            <StyledName>
               <p>
                  {poke} has {numberOfAbilities} abilities and {baseExperience}{" "}
                  points.
               </p>
            </StyledName>
         </StyledContainer>
      );
   }

   return (
      <>
         <Title>Pokedex</Title>
         {resultMarkup}
         <SearchContainer>
            <input type="text" ref={inputEl} />
            <Button onClick={handleSearch}>Search for Pokemons!</Button>
         </SearchContainer>
      </>
   );
};

export default Main;
