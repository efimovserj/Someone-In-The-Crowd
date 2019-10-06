import * as React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

/** Presentation **/
import ErrorMessageContainer from "../Components/ErrorMessage";

/** Custom Hooks **/
import useErrorHandler from "../Utils/CustomHooks/ErrorHandler";

/**  Context  **/
import { authContext } from "../Contexts/AuthContext";

/** Utils **/
import { apiRequest, validateLoginForm } from "../Utils/Helpers";
import { Header } from "../Components/Styles";

function Login() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const auth = React.useContext(authContext);
  const { error, showError } = useErrorHandler(null);

  const authHandler = async () => {
    try {
      setLoading(true);
      const userData = await apiRequest(
        "https://jsonplaceholder.typicode.com/users",
        "post",
        { email: userEmail, password: userPassword }
      );
      const { id, email } = userData;
      auth.setAuthStatus({ id, email });
    } catch (error) {
      setLoading(false);
      showError(error.message);
    }
  };

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (validateLoginForm(userEmail, userPassword, showError)) {
          authHandler();
        }
      }}
    >
      <Header>Sign in</Header>
      <br />
      <FormGroup>
        <Input
          type="email"
          name="email"
          value={userEmail}
          placeholder="john@mail.com"
          onChange={e => setUserEmail(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="password"
          name="password"
          value={userPassword}
          placeholder="john@mail.com"
          onChange={e => setUserPassword(e.target.value)}
        />
      </FormGroup>

      <Button type="submit" disabled={loading} block={true}>
        {loading ? "Loading..." : "Sign In"}
      </Button>

      <br />

      {error && <ErrorMessageContainer errorMessage={error} />}
    </Form>
  );
}

export default Login;
