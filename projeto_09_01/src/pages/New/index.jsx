import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <Link to="/">back</Link>
          </header>

          <Input placeholder="Title" type="text" />

          <Textarea placeholder="Description" />

          <Section title="Favorite links" />
          <NoteItem value="https://rocketseat.com.br" />
          <NoteItem isNew placeholder="New link" />

          <Section title="Tags" />

          <div className="tags">
            <NoteItem value="React" />
            <NoteItem isNew placeholder="New Tag" />
          </div>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  );
}
