import React, { Component } from "react";

import {
   Title,
   Button,
   Input,
   StyledContainer,
   StyledCardPhotoContainer,
   StyledCardBody,
   StyledName,
   SearchContainer,
} from "./styles";

interface SearchState {
   error: boolean;
   pokemon: Pokemon;
}

interface Pokemon {
   name: string;
   numberOfAbilities: number;
   baseExperience: number;
   imageUrl: string;
}

export default class PokemonSearch extends Component<{}, SearchState> {
   pokemonRef: React.RefObject<HTMLInputElement>;

   constructor(props: SearchState) {
      super(props);
      this.state = {
         error: false,
         pokemon: null,
      };
      this.pokemonRef = React.createRef();
   }

   handleSearch = (): void => {
      const inputValue = this.pokemonRef.current.value;

      fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then((res) => {
         if (res.status !== 200) {
            this.setState({ error: true });
            return;
         }
         res.json().then((data) => {
            this.setState({
               error: false,
               pokemon: {
                  name: data.name,
                  numberOfAbilities: data.abilities.length,
                  baseExperience: data.base_experience,
                  imageUrl: data.sprites.front_default,
               },
            });
         });
      });
   };

   render() {
      const { error, pokemon } = this.state;

      let resultMarkup;

      if (error) {
         resultMarkup = <p>Pokemon not found!</p>;
      } else if (this.state.pokemon) {
         resultMarkup = (
            <div>
               <StyledCardPhotoContainer>
                  <img src={pokemon.imageUrl} alt={pokemon.name} />
               </StyledCardPhotoContainer>
               <StyledCardBody>
                  <StyledName>
                     {pokemon.name} has {pokemon.numberOfAbilities} abilities
                     and {pokemon.baseExperience} base experience points
                  </StyledName>
               </StyledCardBody>
            </div>
         );
      }

      return (
         <>
            <Title>POKEDEX</Title>
            <StyledContainer>
               {resultMarkup}
               <Input
                  type="text"
                  placeholder="Which Pokemon?"
                  ref={this.pokemonRef}
               />
               <Button onClick={this.handleSearch}>Search for Pokemons!</Button>
            </StyledContainer>
         </>
      );
   }
}
