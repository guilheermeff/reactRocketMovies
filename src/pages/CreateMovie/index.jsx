import { MovieItem } from "../../components/MovieItem";
import { TextArea } from "../../components/TextArea";
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Content } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function CreateMovie() {
  return(
    <Container>

      <Header />

      <Content>
        <a href="#"><FiArrowLeft /> Voltar</a>

        <form>
          <h1>Novo filme</h1>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (De 0 a 5)" />
          </div>

          <TextArea placeholder="Observações"/>

          <section>
            <h2>Marcadores</h2>

            <div>
              <MovieItem value="Teste" />
              <MovieItem placeholder="Novo marcador" isNew />
              <MovieItem value="Comédia" />
              <MovieItem value="Ficção-científica" />
            </div>
          </section>

          <footer>
            <Button title="Excluir nota" />
            <Button title="Salvar alterações" />
          </footer>
        </form>
      </Content>

    </Container>
  )
}