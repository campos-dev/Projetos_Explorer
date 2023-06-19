import { Link } from "react-router-dom";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>App to save and manage your favorite links</p>
        <h2>Create an account</h2>

        <Input placeholder="Username" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />

        <Button title="Register" />
        <Link to="/">Back</Link>
      </Form>
    </Container>
  );
}
