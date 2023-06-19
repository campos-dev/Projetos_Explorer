import { Link } from "react-router-dom";

import { FiLock, FiMail, FiUser, FiArrowLeft, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/campos-dev.png"
            alt="Picture from user"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Username" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />
        <Input placeholder="New Password" type="password" icon={FiLock} />
        <Button type="Button" title="Save" />
      </Form>
    </Container>
  );
}
