import { TextArea } from "../../components/TextArea";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, Content } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function CreateMovie() {
  return(
    <Container>

      <Header />

      <a href="#"><FiArrowLeft /> Voltar</a>

      <Content>
        <form>
          <h1>Novo filme</h1>

          <div>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (De 0 a 5)" />
          </div>

          <TextArea placeholder="Observações"/>

          <section>
            <h2>Marcadores</h2>
          </section>
        </form>
      </Content>

    </Container>
  )
}