import React, { Component } from "react";
import { Normalize } from "styled-normalize";

import GlobalStyle from "./styles";
import PokemonSearch from "./components/Main/PokemonSearch";

class App extends Component {
   render() {
      return (
         <>
            <Normalize />
            <GlobalStyle />
            <PokemonSearch />
         </>
      );
   }
}

export default App;
