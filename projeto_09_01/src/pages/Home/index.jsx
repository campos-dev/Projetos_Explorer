import { FiPlus } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="All" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Search for a note" />
      </Search>

      <Content>
        <Section title="My notes" />
        <Note
          data={{
            title: "React",
            tags: [
              { id: "1", name: "react" },
              { id: "2", name: "styled-components" },
            ],
          }}
        />
      </Content>

      <NewNote to="/new">
        <FiPlus />
        New note
      </NewNote>
    </Container>
  );
}
