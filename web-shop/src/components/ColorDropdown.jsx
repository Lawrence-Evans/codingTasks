import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function ColorDropdown() {
  const [colorChoice, setColorChoice] = useState("");

  // Three handlers. One for each color and saved in the use state.
  const chooseRed = () => {
    setColorChoice("red");
  };
  const chooseYellow = () => {
    setColorChoice("yellow");
  };
  const chooseBlue = () => {
    setColorChoice("blue");
  };

  // Conditional that checks colorChoice for which variant Dropdown.Toggle to render.
  // An onClick for each color choice button.
  if (colorChoice == "") {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose Color
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={chooseRed}>Red</Dropdown.Item>
          <Dropdown.Item onClick={chooseYellow}>Yellow</Dropdown.Item>
          <Dropdown.Item onClick={chooseBlue}>Blue</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else if (colorChoice == "red") {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          Chosen Red
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={chooseRed}>Red</Dropdown.Item>
          <Dropdown.Item onClick={chooseYellow}>Yellow</Dropdown.Item>
          <Dropdown.Item onClick={chooseBlue}>Blue</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else if (colorChoice == "yellow") {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
          Chosen Yellow
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={chooseRed}>Red</Dropdown.Item>
          <Dropdown.Item onClick={chooseYellow}>Yellow</Dropdown.Item>
          <Dropdown.Item onClick={chooseBlue}>Blue</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else if (colorChoice == "blue") {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Chosen Blue
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={chooseRed}>Red</Dropdown.Item>
          <Dropdown.Item onClick={chooseYellow}>Yellow</Dropdown.Item>
          <Dropdown.Item onClick={chooseBlue}>Blue</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
export default ColorDropdown;
