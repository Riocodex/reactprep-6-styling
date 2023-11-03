import './App.css';
import React, { useState } from "react";

function App() {
  const [colour, setColour] = useState("");

  const getInputs = (event) => {
    const { name, value } = event.target;
    setColour(value);
  };

  const styles = {
    internal: {
      color: colour,
    }
  };

  return (
    <div className="App">
      <h1 style={{ color: "green", backgroundColor: "black" }}>Change colour</h1>
      <h1 style={styles.internal}>Rio</h1>
      <input
        type="text"
        placeholder="Type the color you want Rio to be"
        name="colour"
        onChange={getInputs}
      />
    </div>
  );
}

export default App;
