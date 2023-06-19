import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    return navigate(-1);
  }

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("All fields are mandatory");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("User has been successfully registered!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("It's not possible to register the user.");
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>App to save and manage your favorite links</p>
        <h2>Create an account</h2>

        <Input
          placeholder="Username"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Register" onClick={handleSignUp} />
        <ButtonText className="buttontext" title="Back" onClick={handleBack} />
      </Form>
    </Container>
  );
}
