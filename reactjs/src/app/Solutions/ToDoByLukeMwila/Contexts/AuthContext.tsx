import * as React from "react";

/**  Custom types  **/
import { UserAuth } from "../CustomTypes";

/**  Custom Hooks  **/
import useAuthHandler from "../Utils/CustomHooks/AuthHandler";

/** Utils **/
import { DEFAULT_USER_AUTH } from "../Utils/Const";
import { getStoredUserAuth } from "../Utils/Helpers";

interface IAuthContextInterface {
  auth: UserAuth;
  setAuthStatus: (userAuth: UserAuth) => void;
  setUnauthStatus: () => void;
}

export const authContext = React.createContext<IAuthContextInterface>({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: () => {},
  setUnauthStatus: () => {}
});

const { Provider } = authContext;

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(
    getStoredUserAuth()
  );
  return (
    <Provider value={{ auth, setAuthStatus, setUnauthStatus }}>
      {children}
    </Provider>
  );
};

export default AuthProvider;
