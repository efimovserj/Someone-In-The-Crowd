import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Checkbox from "./app/Components/Checkbox";

const App: React.FC = () => {
  const [isChecked, handleChange] = useState<boolean>(true);

  const handleFields = (value: boolean) => {
    handleChange(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Checkbox isChecked={isChecked} onChange={handleFields}>
          I'm with you
        </Checkbox>
      </header>
    </div>
  );
};

export default App;
