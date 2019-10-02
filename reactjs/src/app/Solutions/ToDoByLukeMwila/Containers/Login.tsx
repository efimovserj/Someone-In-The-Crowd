import * as React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

/** Utils **/
import { Header } from "../Components/Styles";

function Login() {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [loading, setUserLoading] = React.useState(false);

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        // Auth handler
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
    </Form>
  );
}

export default Login;
