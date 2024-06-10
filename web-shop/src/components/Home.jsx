import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Home() {
  const [login, setLogin] = useState(false);
  const [userName, setUsername] = useState("");

  // Total price context to go here



  // Saves any input to setUsername
  const saveUserName = (e) => {
    setUsername(e.target.value);
  };

  // Event handler to set login to true on click
  const loginChange = (e) => {
    console.log(e.target.value);
    setLogin(true);
  };

  // Handler for logout to setLogin to false and show "Welcome to the homepage!"
  // Resets name to "" on logout
  const logout = () => {
    setLogin(false);
    setUsername("");
  };

  // Conditional render dependant or weather the user has logged in
  if (login === false) {
    return (
      <div>
        <h1>Welcome to the homepage!</h1>
        {/* Button and input wrapped in a form to allow required attribute to prevent submission without some input */}
        <form type="submit" onSubmit={loginChange}>
          <input
            placeholder="Enter name"
            onChange={saveUserName}
            type="text"
            required
            value={userName}
          ></input>
          <Button type="submit" variant="primary" size="lg">
            Login
          </Button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome {userName}</h1>
        <Button onClick={logout} variant="secondary" size="lg">
          Logout
        </Button>
      </div>
    );
  }
}
