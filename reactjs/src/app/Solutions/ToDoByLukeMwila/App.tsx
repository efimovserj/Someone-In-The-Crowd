import React, { useState } from "react";
import RootContainer from "./Containers/RootContainer";

/** Context API  **/
import AuthContextProvider from "./Contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <RootContainer />
    </AuthContextProvider>
  );
}
export default App;
