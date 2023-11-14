import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Card from "./components/card/Card.js";
import ColorSchemesExample from "./components/navbar/Navbar.js";

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <ColorSchemesExample />
        <h1>BrightITCodes</h1>
        <Card />
      </Container>
    </React.Fragment>
  );
};

export default App;
