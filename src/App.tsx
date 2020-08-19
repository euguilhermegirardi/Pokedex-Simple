import React from "react";
import { Normalize } from "styled-normalize";

import GlobalStyle from "./styles";
import Main from "./components/Main";

function App() {
   return (
      <>
         <Normalize />
         <GlobalStyle />
         <Main pokemon={null} />
      </>
   );
}

export default App;
