import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Checkbox from "./app/Components/Checkbox";
import Login from "./app/Solutions/ToDoByLukeMwila/Containers/Login";

const App: React.FC = () => {
  const [isChecked, handleChange] = useState<boolean>(true);

  const handleFields = (value: boolean) => {
    handleChange(value);
  };

  return <Login />;
};

export default App;
