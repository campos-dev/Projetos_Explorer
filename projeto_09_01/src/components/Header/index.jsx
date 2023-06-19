import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/campos-dev.png" alt="User's picture" />
        <div>
          <span>Welcome,</span>
          <strong>Campos dev</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
