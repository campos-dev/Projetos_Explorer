import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>App to save and manage your favorite links</p>
        <h2>Sign in</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Next" />
        <Link to="/register">Create an account</Link>
      </Form>
      <Background />
    </Container>
  );
}
