import React from "react";
import RootContainer from "./Containers/RootContainer";

/** Context API  **/
import AuthContextProvider from "./Contexts/AuthContext";

function LukeMwilaToDo() {
  return (
    <AuthContextProvider>
      <RootContainer />
    </AuthContextProvider>
  );
}
export default LukeMwilaToDo;
