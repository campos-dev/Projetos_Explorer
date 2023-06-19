import { Container, Links, Content } from "./styles.js";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/Buttontext";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="remove note" />
          <h2>Introduction to React</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            amet velit blanditiis, quisquam fugiat facere qui nobis mollitia
            ullam et iusto at sed facilis quasi exercitationem eveniet quod odio
            quis.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt amet velit blanditiis, quisquam fugiat facere qui nobis
            mollitia ullam et iusto at sed facilis quasi exercitationem eveniet
            quod odio quis.
          </p>
          <Section title="Links">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Tags">
            <Tag title="nodejs" />
            <Tag title="express" />
          </Section>
          <Button title="return" />
        </Content>
      </main>
    </Container>
  );
}
