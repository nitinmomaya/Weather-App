import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import SearchContext, { SearchProvider } from "./context/GlobalContext";
import GlobalStyles from "./styles/GlobalStyles";

import light from "./styles/themes/ligth";
import dark from "./styles/themes/dark";
import Home from "./pages/Home";

export default function App(): React.FunctionComponentElement<{}> {
  const { theme } = useContext(SearchContext);

  return (
    <div>
      <SearchProvider>
        <ThemeProvider theme={theme.title === "light" ? light : dark}>
          <GlobalStyles />
          <Home />
        </ThemeProvider>
      </SearchProvider>
    </div>
  );
}
