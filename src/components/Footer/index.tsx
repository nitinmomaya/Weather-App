import React, { useContext } from "react";
import SearchContext from "../../context/GlobalContext";
import Container from "./style";

export default function Footer(): React.FunctionComponentElement<{}> {
  const { theme } = useContext(SearchContext);
  return (
    <Container theme={theme}>
      <p>
        &copy; Copyright 2023 pr. | Developed with React, Styled Component,
        Typescript.
      </p>
    </Container>
  );
}
