import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Container, Form } from "./styles";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    return navigate(-1);
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTags() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (newLink) {
      return alert('Press the "+" button to add the new link');
    }
    if (newTag) {
      return alert('Press the "+" button to add the new tag');
    }

    if (!title || links.length === 0 || tags.length === 0) {
      return alert("Title, links and tags are required");
    }

    await api.post("/notes", {
      title,
      description,
      links,
      tags,
    });
    alert("Note was successfully created");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <ButtonText title="back" onClick={handleBack} />
          </header>

          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Favorite links" />

          {links.map((link, index) => (
            <NoteItem
              key={String(index)}
              value={link}
              onClick={() => handleRemoveLink(link)}
            />
          ))}

          <NoteItem
            isNew
            placeholder="New link"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            onClick={handleAddLink}
          />

          <Section title="Tags" />

          <div className="tags">
            {tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="New Tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTags}
            />
          </div>

          <Button title="Save" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
